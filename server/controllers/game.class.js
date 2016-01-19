
'use strict'

class Game {

    var currentQuestionId;

    constructor(name, questionCount) {
        this.name = name;
        this.questionCount = questionCount;
        this.players = [];
        this.questions = [];
        currentQuestionId = 0;
    }

    addPlayer(data) {
        this.players.push(data);
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