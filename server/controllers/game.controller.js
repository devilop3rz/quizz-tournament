
'use strict';

var Game = require('./game.class');

module.exports = function (io) {

    var game, createGame, joinGame, gameCreated = false, supersocket, listGames, listPlayers;

    io.on('connection', function(socket){
        console.log('A user connected');
        supersocket = socket;
        socket.emit('welcome', {'aa': 'blabla'});

        socket.on('game.create', createGame);
        socket.on('game.join', joinGame);
        socket.on('game.listGames', listGames);
        socket.on('game.listPlayers', listPlayers);

        socket.on('disconnect', function () {
            console.log('disconnected event');
            console.log(data);
            io.emit('game.playerLeft', {a:2});
            supersocket.broadcast.emit('game.playerLeft', {haselnuss:'123'})
        });
    });

    listGames = function(data, callback) {
        let isCreated = (game) ? true : false;
        callback(isCreated);
    };

    listPlayers = function(data, callback) {
        callback(game.getPlayers());
    };

    createGame = function(data) {
        game = new Game();
        supersocket.emit('game.created');
    };

    joinGame = function(data) {
        game.addPlayer(data);
        supersocket.broadcast.emit('game.playerJoined', data);
    };
}
