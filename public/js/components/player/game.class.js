System.register([], function(exports_1) {
    var Game;
    return {
        setters:[],
        execute: function() {
            Game = (function () {
                function Game(questionCount, name) {
                    this.questionCount = questionCount;
                    this.name = name;
                }
                return Game;
            })();
            exports_1("Game", Game);
        }
    }
});
