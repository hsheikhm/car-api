var data = require('../../data.json');

module.exports = function(req, res){
  var models = data.models;
  res.status(200).json({ models });
};
