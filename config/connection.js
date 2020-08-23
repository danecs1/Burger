require('dotenv').config();
const mysql = require('mysql');

console.log('PROCESS', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'development') {
    mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;