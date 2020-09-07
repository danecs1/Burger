require('dotenv').config();
const mysql = require('mysql');

let connection;

console.log('PROCESS', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'development') {
    connection = mysql.createConnection(process.env.DATABASE_URL)
}

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
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