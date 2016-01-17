System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Player, PlayerSettings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Player = (function () {
                function Player(name, pic) {
                    this.name = name;
                    this.pic = pic;
                }
                return Player;
            })();
            PlayerSettings = (function () {
                function PlayerSettings() {
                    this.player = new Player('Default', '');
                }
                PlayerSettings.prototype.onsubmit = function () {
                    // Set the player settings and send them over to the server
                    console.log('Set player setting:' + this.player.name);
                };
                PlayerSettings = __decorate([
                    core_1.Component({
                        selector: 'gamepad',
                        template: "\n\t\t\n\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t<input type=\"text\" [(ngModel)]=\"player.name\"/>\n\t\t</form>\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayerSettings);
                return PlayerSettings;
            })();
            exports_1("PlayerSettings", PlayerSettings);
        }
    }
});
