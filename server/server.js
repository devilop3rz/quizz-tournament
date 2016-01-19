var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var GameController = require('./controllers/game.controller');

app.use(express.static(__dirname + '/../public'));
app.use('/node_modules', express.static(path.resolve('../node_modules')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

var gameController = new GameController(io);

http.listen(30200, function () {
  console.log('Example app listening on port 3000!');
});