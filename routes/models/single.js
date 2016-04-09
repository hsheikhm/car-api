var data = require('../../data.json');

module.exports = function(req, res){
  var model = req.model;
  res.status(200).json({ model });
};
