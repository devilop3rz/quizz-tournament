
'use strict'

var data = require('../data/data.json');
var Player = require('./player.class');

class Game {


    constructor(gameData) {

        this.name = gameData.name;
        this.questionCount = gameData.questionCount;
        this.players = [];
        this.questions = this.generateQuestions(this.questionCount);
        this.answers = [];
        this.currentQuestionId = 0;
        this.currentQuestion = {};
        this.timer = 0;
    }

    generateQuestions(questionCount) {
        
        var currentCount = 0, 
            questions = [],
            lengthOfQuestionArray = data.length;

        while(currentCount < questionCount) {
            // Generate a random number between 0 and the number of questions
            let randomNumber = Math.floor(Math.random() * lengthOfQuestionArray);
            let questionData = data[randomNumber];

            questions.push({
                question: questionData.question,
                answers: [
                    questionData.answerA,
                    questionData.answerB,
                    questionData.answerC,
                    questionData.answerD
                ],
                correct: questionData.correct
            });
            currentCount++;
        }

        return questions;
    }

    start() {
        this.currentQuestion = this.getQuestion();
    }

    addPlayer(playerData) {
        this.players[playerData.socketId] = new Player(playerData);
    }

    removePlayer(data) {

    }
    
    getPlayers() {
        return this.players;
    }

    getQuestion() {
        var question;
        if (this.currentQuestionId < this.questionCount) {
            question = this.questions[this.currentQuestionId];
            this.currentQuestion = question;
            this.currentQuestionId++;
            return question;
        } else {
            return false;
        }
    }

    addAnswer(data, callback) {
        console.log(data)
        if(this.answers.length === this.players.length) {
            this.checkAnswers(callback);
        } else {
            this.answers.push(data);
        } 
    }

    checkAnswers(callback) {
        
        var solution = [];

        for( var answer of this.answers) {
            if (answer.answer === this.currentQuestion.correct) {
                players[id].score += 5;
                solution[id] = 5;
            } else {
                solution[id] = 0;
            }
        }
        callback(solution)
    }
}


module.exports = Game;