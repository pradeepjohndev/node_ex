const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const dbpool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
})

dbpool.connect((err) => {
    if (err) {
        console.error('Error connecting to database', err.stack);
    } else {
        console.log('database connected successfull');
    }
});

module.exports = dbpool;