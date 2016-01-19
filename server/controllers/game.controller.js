
var Game = require('./game.class');

module.exports = function (io) {

    var game, createGame, joinGame;

    io.on('connection', function(socket){
        console.log('A user connected');
        socket.emit('welcome', {'aa': 'blabla'});

        socket.on('game.create', createGame);
        socket.on('game.join', joinGame);
    });

    createGame = function(data) {
        game = new Game();
    };

    joinGame = function(data) {
        game.addPlayer(data);
    };
}
