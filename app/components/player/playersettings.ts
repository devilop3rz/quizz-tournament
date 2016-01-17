import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'

class Player {

	constructor(
		public name: string,
		public pic: string
	) {}
	
}

@Component({
	selector: 'gamepad',
	template: `
		
		<form (ngSubmit)="onSubmit()">
			<input type="text" [(ngModel)]="player.name"/>
		</form>

	`
})

export class PlayerSettings {

	public player:Player = new Player('Default', '');

	onsubmit() {
		// Set the player settings and send them over to the server
		console.log('Set player setting:' + this.player.name);
	}

}