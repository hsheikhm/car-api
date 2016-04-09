var models = require('express').Router();
var all = require('./all');
var single = require('./single');
var cars = require('./cars');
var data = require('../../data.json');

models.param('modelId', function(req, res, next, value){
  var model = data.models.find(function(model){
    return model.id === Number(value);
  });

  if(model){
    req['model'] = model;
    next();
  } else {
    res.status(404).send('Invalid model ID');
  }
});

models.get('/', all);

models.get('/:modelId', single);

models.use('/:modelId/cars', cars);

module.exports = models;
