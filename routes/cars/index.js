var cars = require('express').Router();
var all = require('./all');
var single = require('./single');
var data = require('../../data.json');
var findObject = require('../../utils/findObject');

cars.param('carId', findObject('car'));

cars.get('/', all);

cars.get('/:carId', single);

module.exports = cars;
