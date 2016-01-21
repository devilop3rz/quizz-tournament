import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {Router} from 'angular2/router'
import {SocketService} from '../../services/socket.service'
import {CarouselSelect} from './carousel-select'


class Player {

	constructor(
		public name:string,
		public pic:string,
		public color:string
	) {}
}

@Component({
	selector: 'gamepad',
    providers: [SocketService],
    directives: [CarouselSelect],
	template: `
		{{diagnostic}}

		<h1>Setup your Player</h1>

		<form (ngSubmit)="onSubmit()">
			<div class="form-group">
				<label for="player-name">Name:</label>
				<input type="text" id="player-name" [(ngModel)]="player.name"/>
			</div>
			<div class="form-group">
				<label for="player-pic">Char:</label>
				<select name="player-pic" id="player-pic" [(ngModel)]="player.pic">
					<option>SpielerChar1</option>
					<option>SpielerChar2</option>
					<option>SpielerChar3</option>
				</select>
				<carousel-select></carousel-select>
			</div>
			<div class="form-group">
				<label for="player-color">Color:</label>
				<input type="color" id="player-color" [(ngModel)]="player.color"/>
			</div>
			<button type="submit">Ready</button>
		</form>
	`
})

export class PlayerSettings {

	public player:Player = new Player('Default', '', '#123456');

	constructor(public _router:Router, public _socket:SocketService){ 
        this._socket.init();
		this._socket.on('welcome',(data:any) => {
            console.log('WIlkommen mein nasenbär');
		})
	}

	onSubmit() {
		// Set the player settings and send them over to the server
		console.log('Set player setting:' + this.player.name);
		this._router.navigate(['/Lobby'])
	}

	get diagnostic() { return JSON.stringify(this.player); }

}