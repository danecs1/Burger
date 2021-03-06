require('dotenv').config();
const mysql = require('mysql');

let connection;

connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


module.exports = connection;