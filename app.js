// Bring in our dependencies
var app = require('express')();
var routes = require('./routes');

// Connect all our routes to our applications
app.use('/', routes);

// Turn on that server!
app.listen(3000, function(){
  console.log('App listening on port 3000');
});
