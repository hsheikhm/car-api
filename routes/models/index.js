var models = require('express').Router();
var all = require('./all');
var single = require('./single');
var cars = require('./cars');

models.get('/', all);

models.get('/:modelId', single);

models.use('/:modelId/cars', cars);

module.exports = models;
