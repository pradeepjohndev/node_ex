const pool = require('../dbconfig/dbpool');

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
