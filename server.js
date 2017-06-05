require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

// Define the port to run on
app.set('port', 3000);

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'))

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Add routing
app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendfile('./public/index.html')
})

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('App running on port', port);
});
