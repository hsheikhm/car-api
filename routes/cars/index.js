var cars = require('express').Router();
var all = require('./all');
var single = require('./single');
var data = require('../../data.json');

cars.param('carId', function(req, res, next, value){
  var car = data.cars.find(function(car){
    return car.id === Number(value);
  });

  if(car){
    req['car'] = car;
    next();
  } else {
    res.status(404).send('Invalid car ID');
  }
});

cars.get('/', all);

cars.get('/:carId', single);

module.exports = cars;
