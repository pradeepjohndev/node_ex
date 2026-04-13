const { Pool } = require('pg');
require('dotenv').config();

console.log('Database configuration:', {
    user: process.env.user,
    host: process.env.host
});

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: String(process.env.password),
    port: process.env.port,
});



module.exports = pool;