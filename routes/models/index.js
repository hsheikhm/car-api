var models = require('express').Router();
var all = require('./all');
var single = require('./single');

models.get('/', all);

models.get('/:modelId', single);

module.exports = models;
