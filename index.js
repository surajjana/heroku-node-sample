var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser());

app.set('port', (process.env.PORT || 5000));

app.post('/login', function (request, response) {

  response.send("Hello, World!! :-D");
  
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});