var models = require('express').Router();
var all = require('./all');
var single = require('./single');
var cars = require('./cars');
var findObject = require('../../utils/findObject');

models.param('modelId', findObject('model'));

models.get('/', all);

models.get('/:modelId', single);

models.use('/:modelId/cars', cars);

module.exports = models;
