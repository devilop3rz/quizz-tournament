System.register(['angular2/core', './gamecreator.form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, gamecreator_form_1;
    var GameCreator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gamecreator_form_1_1) {
                gamecreator_form_1 = gamecreator_form_1_1;
            }],
        execute: function() {
            GameCreator = (function () {
                function GameCreator() {
                    console.log('GAME CRAETOR');
                }
                GameCreator = __decorate([
                    core_1.Component({
                        selector: 'game-creator',
                        directives: [gamecreator_form_1.GameCreationForm],
                        template: "\n\t\t<header>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\"><h3>Create Game!</h3></div>\n\t\t\t</div>\n\t\t</header>\n\t\t<game-creator-form></game-creator-form>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GameCreator);
                return GameCreator;
            })();
            exports_1("GameCreator", GameCreator);
        }
    }
});
