const express = require('express');

const db = require('../data/dbConnection.js');

const router = express.Router();


router.get('/', (req, res) => {
    db.select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json({
            data: cars
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'There was an error retrieving the cars data'
        });
    });
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {
    const car = req.body;
    if (isValidCar(car)){
        db('cars')
        .insert(car, 'id')
        .then(ids => {
            res.status(201).json({
                data: ids
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'There was an error creating the car file.'
            })
        })
    } else {
        res.status(400).json({
            message: 'Please provide a VIN, make, model, and mileage for the vehicle'
        });
    };
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

function isValidCar(car) {
    return Boolean(car.VIN && car.Make && car.Model && car.Mileage);
}




module.exports = router;