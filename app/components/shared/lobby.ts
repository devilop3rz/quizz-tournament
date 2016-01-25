import {Component,View} from 'angular2/core';
import {SocketService} from '../../services/socket.service';
import {RouteParams, Router} from 'angular2/router'

@View ({
	template: `
        <h1>Lobby</h1>
        <ul>
            <li *ngFor="#player of players">{{player.name}}!</li>
        </ul>

        <button [hidden]="!isCreator" (click)="startGame()">StartGame</button>
    `
})

@Component({
	selector: 'lobby'
})

export class Lobby {

    private socket;
    public players: any;
    public isCreator: boolean;

	constructor(private _socketService:SocketService, private _routerParams:RouteParams, private _router:Router) {

        this.isCreator = (this._routerParams.get('type') === 'creator') ? true : false;
        this.socket = this._socketService.getSocket();
        this.players = [];

        this.socket.emit('game.listPlayers', {}, (data) => {
            this.players = data;
        });

        this.socket.on('game.playerLeft', (data) => {
            console.log(this.players);
            console.log(data);
        });

        this.socket.on('game.playerJoined', (data) => {
            console.log(data)
            this.players.push(data);
        });

        this.socket.on('game.started', (data) => {
            if (this._routerParams.get('type') === 'host') {
                this._router.navigate(['GameScreen'])
            } else {
                this._router.navigate(['Gamepad'])
            }
        });
	}

	startGame() {
		console.log('Start the game')
		this.socket.emit('game.start', {});
	}
}