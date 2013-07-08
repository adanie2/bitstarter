var express = require('express');
var fs = require('fs');
//var buf = require('buffer');
var app = express.createServer(express.logger());
var file = "./index.html";

var data = fs.readFileSync(file,'utf-8');

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
