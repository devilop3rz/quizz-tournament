System.register(['angular2/core', '../../services/socket.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, socket_service_1, router_1;
    var Lobby;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Lobby = (function () {
                function Lobby(_socketService, _routerParams, _router) {
                    var _this = this;
                    this._socketService = _socketService;
                    this._routerParams = _routerParams;
                    this._router = _router;
                    this.isCreator = (this._routerParams.get('type') === 'creator') ? true : false;
                    this.socket = this._socketService.getSocket();
                    this.players = [];
                    this.socket.emit('game.listPlayers', {}, function (data) {
                        console.log('Getting Playerlist');
                        console.log(data);
                        _this.players = data;
                    });
                    this.socket.on('game.playerLeft', function (data) {
                        console.log(_this.players);
                        console.log(data);
                    });
                    this.socket.on('game.playerJoined', function (data) {
                        console.log('Player joined: ' + data.name);
                        console.log(data);
                        _this.players.push(data);
                    });
                    this.socket.on('game.started', function (data) {
                        if (_this._routerParams.get('type') === 'host') {
                            _this._router.navigate(['GameScreen']);
                        }
                        else {
                            _this._router.navigate(['Gamepad']);
                        }
                    });
                }
                Lobby.prototype.startGame = function () {
                    console.log('Start the game');
                    this.socket.emit('game.start', {});
                };
                Lobby = __decorate([
                    core_1.View({
                        template: "\n        <h1>Lobby</h1>\n        <ul>\n            <li *ngFor=\"#player of players\">{{player.name}}!</li>\n        </ul>\n\n        <button [hidden]=\"!isCreator\" (click)=\"startGame()\">StartGame</button>\n    "
                    }),
                    core_1.Component({
                        selector: 'lobby'
                    }), 
                    __metadata('design:paramtypes', [socket_service_1.SocketService, router_1.RouteParams, router_1.Router])
                ], Lobby);
                return Lobby;
            })();
            exports_1("Lobby", Lobby);
        }
    }
});
