System.register(['angular2/core', '../../services/socket.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, socket_service_1;
    var Gamepad;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            Gamepad = (function () {
                function Gamepad(_socketService) {
                    var _this = this;
                    this._socketService = _socketService;
                    this.socket = this._socketService.getSocket();
                    this.socket.emit('ready');
                    this.socket.on('game.question', function (data) {
                        _this.question = data;
                    });
                }
                Gamepad.prototype.sendAnswer = function (answer) {
                    console.log({ id: this.socket.id, answer: answer });
                    this.socket.emit('game.sendAnswer', { id: this.socket.id, answer: answer });
                };
                Gamepad = __decorate([
                    core_1.Component({
                        selector: 'gamepad',
                        template: "\n\n\t\t<header>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\"><h3>Gamepad</h3></div>\n\t\t\t</div>\n\t\t</header>\n\t\t<section>\n\t\t\t<div class=\"row\" *ngIf=\"question\">\n\t\t\t\t<div class=\"col-xs-12\" *ngFor=\"#answer of question.answers;#i = index\" >\n\t\t\t\t\t<button (click)=\"sendAnswer(i)\">{{answer}}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [socket_service_1.SocketService])
                ], Gamepad);
                return Gamepad;
            })();
            exports_1("Gamepad", Gamepad);
        }
    }
});
