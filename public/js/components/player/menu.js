System.register(['angular2/core', 'angular2/router', '../../services/socket.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, socket_service_1;
    var Menu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            Menu = (function () {
                function Menu(_socketService) {
                    var _this = this;
                    this._socketService = _socketService;
                    this.socket = this._socketService.getSocket();
                    this.socket.emit('game.listGames', {}, function (data) {
                        console.log('Gamestate:' + data);
                        _this.gameCreated = data;
                    });
                    this.socket.on('game.created', function (data) {
                        console.log('A game has been created');
                        _this.gameCreated = true;
                    });
                }
                Menu = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t<header>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\"><h3>Menu</h3></div>\n\t\t\t</div>\n\t\t</header>\n\t\t<section>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a [routerLink]=\"['CreateGame']\">Create Game!</a></li>\n\t\t\t\t\t\t<li [hidden]=\"!gameCreated\"><a [routerLink]=\"['PlayerSettings', {type:'player'}]\" >Join Game!</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t"
                    }), 
                    __metadata('design:paramtypes', [socket_service_1.SocketService])
                ], Menu);
                return Menu;
            })();
            exports_1("Menu", Menu);
        }
    }
});
