var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var GameController = require('./controllers/game.controller');

app.use(express.static(__dirname + '/../public'));
console.log(__dirname + '/../node_modules')
app.use('/node_modules',  express.static(__dirname + '/../node_modules'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});


var gameController = new GameController(io);

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});