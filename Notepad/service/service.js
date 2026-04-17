const pool = require('../dbconfig/dbpool');
const bcrypt = require('bcrypt');

exports.getallnote = async () => {
    try {
        const result = await pool.query('SELECT * FROM notes ORDER BY id');
        return result.rows;
    } catch (err) {
        console.error('Error fetching notes:', err);
        throw err;
    }
};

exports.getonenote = async (id) => {
    try {
        const result = await pool.query('select * from notes where id = $1', [id]);
        return result.rows[0];
    }
    catch (err) {
        console.error('Error fetching note:', err);
        throw err;
    }
};

exports.createnote = async (title, content) => {
    try {
        const result = await pool.query('insert into notes (title,content) values ($1,$2) returning *', [title, content]);
        return result.rows[0];
    }
    catch (err) {
        console.error('Error creating note:', err);
        throw err;
    }
};

exports.updatenote = async (id, title, content) => {
    try {
        const result = await pool.query('update notes set title = $1, content = $2 where id = $3 returning *', [title, content, id]);
        return result.rows[0];
    }
    catch (err) {
        console.error('Error updating note:', err);
        throw err;
    }
};

exports.deletenote = async (id) => {
    try {
        const result = await pool.query('delete from notes where id = $1 returning *', [id]);
        return result.rows[0];
    }
    catch (err) {
        console.error('Error deleting note:', err);
        throw err;
    }
};


exports.authentication = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await pool.query('insert into users (username,password) values ($1,$2) returning *', [username, hashedPassword]);
        return result.rows;
    }
    catch (err) {
        console.error('Error authenticating user:', err);
        throw err;
    }
};

exports.readauthentication = async (username) => {
    try {
        const result = await pool.query('select * from users where username = $1', [username]);
        return result.rows[0];
    } catch (err) {
        console.error('Error reading user authentication:', err);
        throw err;
    }
};

/* exports.auth = async (username, password) => {
    try {
        const result = await pool.query('select * from users where username = $1', [username]);
        const user = result.rows[0];
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        } else {
            return null;
        }
    } catch (err) {
        console.error('Error during authentication:', err);
        throw err;
    }
}; */

exports.dashboard = async () => {
    try {
        const result = await pool.query('SELECT * FROM notes');
        return result.rows;
    } catch (err) {
        console.error('Error fetching dashboard data:', err);
        throw err;
    }
};

exports.pagimation = async (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    try {
        const result = await pool.query('SELECT * FROM employee ORDER BY id LIMIT $1 OFFSET $2', [limit, offset]);
        return result.rows;
    } catch (err) {
        console.error('Error fetching paginated data:', err);
        throw err;
    }
};
