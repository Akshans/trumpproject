var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello Worrsdfld!');
});

app.listen(3000, function() {
  console.log('Example app liste ning on port 3000!');


});
