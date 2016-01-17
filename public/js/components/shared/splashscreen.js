System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var Splashscreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Splashscreen = (function () {
                function Splashscreen(_routeParams, _router) {
                    var _this = this;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    console.log(this._routeParams);
                    if (this._routeParams.get('type') === 'host') {
                        this.isHost = true;
                    }
                    else {
                        setTimeout(function () {
                            _this._router.navigate(['Menu']);
                        }, 2000);
                    }
                }
                Splashscreen = __decorate([
                    core_1.Component({
                        selector: 'splashscreen',
                        template: "\n\t\t<h1>Quizz Tournament</h1>\n\n\t\t<div *ngIf=\"isHost\">\n\t\t\t<h2>Waiting for game creation</h2>\n\t\t</div>\n\n\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], Splashscreen);
                return Splashscreen;
            })();
            exports_1("Splashscreen", Splashscreen);
        }
    }
});
