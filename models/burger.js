const orm = require('../config/orm');

const burger = {
    //selectAll
    selectAll: function (cb) {
        orm.selectAll(data => {
            cb(data);
        });
    },

    //insertOne
    insertOne: function (burger, name, cb) {
        orm.insertOne(burger, name, (res) => {
            cb(res);
        })
    },

    //updateOne
    updateOne: function (val, id, cb) {
        let devoured = val.devoured;
        orm.updateOne(devoured, id, (results) => {
            cb(results);
        })
    }
}

module.exports = burger;

