const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

//Select all
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let selectData = {
            burgers: data
        };
        res.render('index', selectData);
        //res.status(200).json(selectData);
    });
})

//Insert one
router.post('/burger', (req, res) => {
    burger.insertOne(['burger_name',], [req.body.burger_name,], (result) => {
        res.status(201).end();
    })
});

//Update
router.put('/burgers/:id', (req, res) => {
    let { id } = req.params;
    burger.updateOne({ devoured: true }, id, (result) => {
        res.status(200).end();
    })
})

module.exports = router;