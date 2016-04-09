var data = require('../../data.json');

module.exports = function(req, res){
  var cars = data.cars;
  res.status(200).json({ cars });
};
