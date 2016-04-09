var data = require('../../data.json');

module.exports = function(req, res){
  var car = req.car;
  res.status(200).json({ car });
};
