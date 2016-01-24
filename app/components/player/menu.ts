import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {SocketService} from '../../services/socket.service'

@Component({
	selector: 'menu',
	directives: [ROUTER_DIRECTIVES],
	template: `
		<header>
			<div class="row">
				<div class="col-xs-12"><h3>Menu</h3></div>
			</div>
		</header>
		<section>
			<div class="row">
				<div class="col-xs-12">
					<ul>
						<li><a [routerLink]="['CreateGame']">Create Game!</a></li>
						<li [hidden]="!gameCreated"><a [routerLink]="['PlayerSettings', {type:'player'}]" >Join Game!</a></li>
					</ul>
				</div>
			</div>
		</section>
	`
})

export class Menu {

    private socket;
    public gameCreated: boolean;

    constructor(public _socketService: SocketService) {
        this.socket = this._socketService.getSocket();
       
        this.socket.emit('game.listGames', {}, (data) => {
            console.log('Gamestate:' + data);
            this.gameCreated = data;
        });

        this.socket.on('game.created', (data) => {
        	console.log('A game has been created')
			this.gameCreated = true;
        });
	}
}