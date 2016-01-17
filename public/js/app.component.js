System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './components/shared/splashscreen', './components/shared/lobby', './components/player/menu', './components/player/gamepad', './components/player/gamecreator', './components/player/gamelist', './components/player/playersettings', './components/host/gamescreen'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, splashscreen_1, lobby_1, menu_1, gamepad_1, gamecreator_1, gamelist_1, playersettings_1, gamescreen_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (splashscreen_1_1) {
                splashscreen_1 = splashscreen_1_1;
            },
            function (lobby_1_1) {
                lobby_1 = lobby_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (gamepad_1_1) {
                gamepad_1 = gamepad_1_1;
            },
            function (gamecreator_1_1) {
                gamecreator_1 = gamecreator_1_1;
            },
            function (gamelist_1_1) {
                gamelist_1 = gamelist_1_1;
            },
            function (playersettings_1_1) {
                playersettings_1 = playersettings_1_1;
            },
            function (gamescreen_1_1) {
                gamescreen_1 = gamescreen_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titleName = "QUIZZ TORNAMENT";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'quizz-tournament'
                    }),
                    router_1.RouteConfig([
                        // Shared Routes
                        {
                            path: '/splash',
                            component: splashscreen_1.Splashscreen,
                            name: 'Splashscreen',
                            useAsDefault: true
                        }, {
                            path: '/splash/:type',
                            component: splashscreen_1.Splashscreen,
                            name: 'Splashscreen'
                        }, {
                            path: '/lobby',
                            component: lobby_1.Lobby,
                            name: 'Lobby'
                        },
                        //Host Routes
                        {
                            path: '/host/gamescreen',
                            component: gamescreen_1.GameSreeen,
                            name: 'GameScreen'
                        },
                        // Player Routes
                        {
                            path: '/player/menu',
                            component: menu_1.Menu,
                            name: 'Menu'
                        }, {
                            path: '/player/game-selection',
                            component: gamelist_1.GameList,
                            name: 'GameSelection'
                        }, {
                            path: '/player/settings',
                            component: playersettings_1.PlayerSettings,
                            name: 'PlayerSettings'
                        }, {
                            path: '/player/create-game',
                            component: gamecreator_1.GameCreator,
                            name: 'CreateGame'
                        }, {
                            path: '/player/gamepad',
                            component: gamepad_1.Gamepad,
                            name: 'Gamepad'
                        }
                    ]),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <div>\n    <nav>\n      <a>Navigation:</a>\n    \t<ul>\n    \t\t<li><a [routerLink]=\"['/Splashscreen', {type:'host'}]\">splash host</a></li>\n    \t\t<li><a [routerLink]=\"['/Splashscreen', {type:'player'}]\">splash player</a></li>\n    \t\t<li><a [routerLink]=\"['/Menu']\">Menu</a></li>\n    \t</ul>\n    </nav>\n \t<div class=\"container\">\n\t\t<router-outlet></router-outlet>\n \t</div>\n    \n  </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            browser_1.bootstrap(AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
