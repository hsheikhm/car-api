var routes = require('express').Router();
var models = require('./models');
var cars = require('./cars');

routes.use('/models', models);

routes.use('/cars', cars);

routes.get('/', function(req, res){
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
