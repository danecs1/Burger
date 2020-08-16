const connection = require('./connection');


const orm = {
    //Select all
    selectAll: function (cb) {
        let queryString = 'SELECT * FROM burgers';
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data)
        });
    },
    //Insert One
    insertOne: function (col, val, cb) {
        let queryString = `INSERT INTO burgers (${col}) VALUES(?)`;
        connection.query(queryString, val, (err, data) => {
            if (err) throw err;
            cb(data)
        })
    },

    //Update One:
    updateOne: function (val, id, cb) {
        let queryString = `UPDATE burgers SET devoured=${val} WHERE id=${id}`
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    }
}

//export orm object
module.exports = orm;
