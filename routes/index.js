var routes = require('express').Router();
var models = require('./models');

routes.use('/models', models);

routes.get('/', function(req, res){
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
