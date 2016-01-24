
'use strict';

var Game = require('./game.class');

module.exports = function (io) {

    var game, gameCreated = false, supersocket, listGames, listPlayers;
   
    io.on('connection', function(socket){
        console.log('A user connected:' + socket.id);
        supersocket = socket;
        socket.emit('welcome', {'aa': 'blabla'});

        // User created a new Game
        socket.on('game.create', function (data){
            console.log('A game has just been created')
            game = new Game(data);

            socket.emit('game.created', {});
            socket.broadcast.emit('game.created', {});
        });

        // A user joined the game. He gets added go the game
        // with the given data
        socket.on('game.join', function (data) {
            data.socketId = socket.id;
            game.addPlayer(data);
            socket.broadcast.emit('game.playerJoined', data);
            socket.emit('game.playerJoined', data);
        });

        // Lists all created game instances
        socket.on('game.listGames', listGames);

        // Lists all the players in the created game instance
        socket.on('game.listPlayers', function(data, callback) {
            console.log('Listing Players');
            var players = game.getPlayers();
            callback(players);
        });

        // Start the game.
        socket.on('game.start', function (data, callback) {
            game.start();
            socket.emit('game.started', {});
            socket.broadcast.emit('game.started', {});
        });

        socket.on('ready', function () {
            socket.emit('game.question', game.currentQuestion);
        });

        // Get the next question from the game instance
        socket.on('game.getQuestion', function(data, callback) {
            callback(game.getQuestion());
        });

        // Get the next question from the game instance
        socket.on('game.sendAnswer', function(data, callback) {

            game.addAnswer(data);
            if(game.answers.length === game.players.length) {
                game.checkAnswers();
            }
        });

        // Handle disconnection events. Remove disconnected user 
        // from game and send the updated player list to the other users
        socket.on('disconnect', function () {
            console.log('disconnected event');
            socket.emit('game.playerLeft', {id:socket.id})
            io.emit('game.playerLeft', {id:socket.id})

        });
    });

    listGames = function(data, callback) {
        let isCreated = (game) ? true : false;
        callback(isCreated);
    };

}
