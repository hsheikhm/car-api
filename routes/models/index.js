var models = require('express').Router();
var all = require('./all');

models.get('/', all);

module.exports = models;
