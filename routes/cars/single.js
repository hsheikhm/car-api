var data = require('../../data.json');

module.exports = function(req, res){
  var carId = Number(req.params.carId);
  var car = data.cars.find(function(car){
    return car.id === carId;
  });
  res.status(200).json({ car });
};
