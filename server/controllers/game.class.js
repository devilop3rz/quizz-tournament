
'use strict'

class Game {


    constructor(name, questionCount) {
        this.name = name;
        this.questionCount = questionCount;
        this.players = [];
        this.questions = [];
        this.currentQuestionId = 0;
    }

    addPlayer(data) {
        this.players.push(data);
    }

    getPlayers() {
        return this.players;
    }

    getQuestion() {
        if (currentQuestionId < this.questionCount) {
            currentQuestionId++;
            return this.questions[currentQuestionId];
        } else {
            return false;
        }
    }

    checkAnswers() {

    }
}

module.exports = Game;