var data = require('../data.json');

module.exports = function(type){
  return function(req, res, next, value){
    var typePlural = type + "s";
    var obj = data[typePlural].find(function(t){
      return t.id === Number(value);
    });

    if(obj){
      req[type] = obj;
      next();
    } else {
      res.status(404).send('Invalid ' + type + " ID");
    }
  };
};
