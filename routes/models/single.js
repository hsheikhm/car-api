var data = require('../../data.json');

module.exports = function(req, res){
  var modelId = Number(req.params.modelId);
  var model = data.models.find(function(model){
    return model.id === modelId;
  });
  res.status(200).json({ model });
};
