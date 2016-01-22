import {bootstrap}    from 'angular2/platform/browser'
import {Component, View} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES}  from 'angular2/router';

import {Splashscreen} from './components/shared/splashscreen'
import {Lobby} from './components/shared/lobby'
import {Menu} from './components/player/menu'
import {Gamepad} from './components/player/gamepad'
import {GameCreator} from './components/player/gamecreator'
import {GameList} from './components/player/gamelist'
import {PlayerSettings} from './components/player/playersettings'
import {GameSreeen} from './components/host/gamescreen'
import {SocketService} from './services/socket.service'

@Component({
   
    selector: 'quizz-tournament'
})

@RouteConfig([

	// Shared Routes
    { 
    	path: '/splash', 
    	component: Splashscreen, 
    	name: 'Splashscreen',
    	useAsDefault: true
    },{ 
    	path: '/splash/:type', 
    	component: Splashscreen, 
    	name: 'Splashscreen'
    },{ 
    	path: '/lobby', 
    	component: Lobby, 
    	name: 'Lobby'
    },

    //Host Routes
  	{ 
    
    	path: '/host/gamescreen',
    	component: GameSreeen,
    	name: 'GameScreen'
    },

    // Player Routes
    {
      	path: '/player/menu', 
    	component: Menu, 
    	name: 'Menu'
    },{
      	path: '/player/game-selection', 
    	component: GameList, 
    	name: 'GameSelection'
    },{
      	path: '/player/settings', 
    	component: PlayerSettings, 
    	name: 'PlayerSettings'
    },{ 
    	path: '/player/create-game', 
    	component: GameCreator, 
    	name: 'CreateGame'
    },{ 
    	path: '/player/gamepad', 
    	component: Gamepad, 
    	name: 'Gamepad'
    }
])

@View({
  directives: [ROUTER_DIRECTIVES], 
  template: `
  <div>
    <nav>
      <a>Navigation:</a>
    	<ul>
    		<li><a [routerLink]="['/Splashscreen', {type:'host'}]">splash host</a></li>
    		<li><a [routerLink]="['/Splashscreen', {type:'player'}]">splash player</a></li>
    		<li><a [routerLink]="['/Menu']">Menu</a></li>
    	</ul>
    </nav>
 	<div class="container">
		<router-outlet></router-outlet>
 	</div>
    
  </div>
 ` 
})

class AppComponent {
    titleName: string
    constructor() {
        this.titleName = "QUIZZ TORNAMENT"
    }

}

bootstrap(AppComponent, [ROUTER_PROVIDERS, SocketService]);
