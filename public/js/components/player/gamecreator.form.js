System.register(['angular2/core', 'angular2/router', './game.class', '../../services/socket.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, game_class_1, socket_service_1;
    var GameCreationForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (game_class_1_1) {
                game_class_1 = game_class_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            GameCreationForm = (function () {
                function GameCreationForm(_router, _socketService) {
                    this._router = _router;
                    this._socketService = _socketService;
                    this.model = new game_class_1.Game(10, 'QuizzTournament Default Game');
                    this.submitted = false;
                    this.socket = this._socketService.getSocket();
                }
                GameCreationForm.prototype.onSubmit = function () {
                    this.submitted = true;
                    this.socket.emit('game.create', this.model);
                    this._router.navigate(['PlayerSettings', { type: 'creator' }]);
                };
                GameCreationForm = __decorate([
                    core_1.Component({
                        selector: 'game-creator-form',
                        template: "\n\t\t{{diagnostic}}\n\t\t<form (ngSubmit)=\"onSubmit()\" #gameForm=\"ngForm\">\n\t\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"game-name\">Game Name</label>\n\t\t    <input type=\"text\" ngControl=\"name\" class=\"form-control\" required [(ngModel)]=\"model.name\" id=\"game-name\" placeholder=\"Game name\">\n\t\t  </div>\n\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"question-count\">Question count</label>\n\t\t    <input type=\"number\" ngControl=\"questionCount\" id=\"question-count\" required [(ngModel)]=\"model.questionCount\">\t\t    \n\t\t  </div>\n\n\t\t  <button type=\"submit\"  [disabled]=\"!gameForm.form.valid\" class=\"btn btn-default\">Submit</button>\n\t\t</form>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, socket_service_1.SocketService])
                ], GameCreationForm);
                return GameCreationForm;
            })();
            exports_1("GameCreationForm", GameCreationForm);
        }
    }
});
