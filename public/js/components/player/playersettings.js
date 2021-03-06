System.register(['angular2/core', 'angular2/router', './carousel-select', '../../services/socket.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, carousel_select_1, socket_service_1;
    var Player, PlayerSettings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (carousel_select_1_1) {
                carousel_select_1 = carousel_select_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            Player = (function () {
                function Player(name, pic, color) {
                    this.name = name;
                    this.pic = pic;
                    this.color = color;
                }
                return Player;
            })();
            PlayerSettings = (function () {
                function PlayerSettings(_router, _routeParams, _socketService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._socketService = _socketService;
                    this.player = new Player('Default', '', '#123456');
                    this.socket = this._socketService.getSocket();
                }
                PlayerSettings.prototype.onSubmit = function () {
                    // Set the player settings and send them over to the server
                    console.log('Set player setting:' + this.player.name);
                    this.socket.emit('game.join', this.player, function (data) {
                        console.log('WIlkommen mein nasenbär');
                    });
                    if (this._routeParams.get('type') === 'creator') {
                        this._router.navigate(['/Lobby', { type: 'creator' }]);
                    }
                    else {
                        this._router.navigate(['/Lobby', { type: 'player' }]);
                    }
                };
                Object.defineProperty(PlayerSettings.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.player); },
                    enumerable: true,
                    configurable: true
                });
                PlayerSettings = __decorate([
                    core_1.Component({
                        selector: 'gamepad',
                        directives: [carousel_select_1.CarouselSelect],
                        template: "\n\t\t{{diagnostic}}\n\n\t\t<h1>Setup your Player</h1>\n\n\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"player-name\">Name:</label>\n\t\t\t\t<input type=\"text\" id=\"player-name\" [(ngModel)]=\"player.name\"/>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"player-pic\">Char:</label>\n\t\t\t\t<select name=\"player-pic\" id=\"player-pic\" [(ngModel)]=\"player.pic\">\n\t\t\t\t\t<option>SpielerChar1</option>\n\t\t\t\t\t<option>SpielerChar2</option>\n\t\t\t\t\t<option>SpielerChar3</option>\n\t\t\t\t</select>\n\t\t\t\t<carousel-select></carousel-select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"player-color\">Color:</label>\n\t\t\t\t<input type=\"color\" id=\"player-color\" [(ngModel)]=\"player.color\"/>\n\t\t\t</div>\n\t\t\t<button type=\"submit\">Ready</button>\n\t\t</form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, socket_service_1.SocketService])
                ], PlayerSettings);
                return PlayerSettings;
            })();
            exports_1("PlayerSettings", PlayerSettings);
        }
    }
});
