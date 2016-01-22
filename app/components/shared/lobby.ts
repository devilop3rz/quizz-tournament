import {Component,View} from 'angular2/core';
import {SocketService} from '../../services/socket.service';
import {RouteParams} from 'angular2/router'

@View ({
	template: `
        <h1>Lobby</h1>
        <ul>
            <li *ngFor="#player of players">{{player.name}}!</li>
        </ul>

        <button [hidden]="!isHost">StartGame</button>
    `
})

@Component({
	selector: 'lobby'
})

export class Lobby {

    private socket;
    public players: any;
    public isHost: boolean;

	constructor(private _socketService:SocketService, private _routerParams:RouteParams) {
        this.isHost = (this._routerParams.get('host') ? true : false;
        this.socket = this._socketService.getSocket() || this._socketService.init();
        this.players = [];

        this.socket.emit('game.listPlayers', {}, (data) => {
            console.log('Getting Gamelist')
            this.players = data;
        });

        this.socket.on('game.playerLeft', (data) => {
            console.log(this.players);
            console.log(data);
        });

        this.socket.on('game.playerJoined', (data) => {
            console.log('Player joined' + data.name);
            this.players.push(data);
        });
	}
}