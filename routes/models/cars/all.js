var data = require('../../../data.json');

module.exports = function(req, res){
  var modelId = Number(req.params.modelId);
  var cars = data.cars.filter(function(car){
    return car.modelId === modelId;
  });
  res.status(200).json({ cars });
};
