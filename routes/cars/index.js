var cars = require('express').Router();
var all = require('./all');
var single = require('./single');

cars.get('/', all);

cars.get('/:carId', single);

module.exports = cars;
