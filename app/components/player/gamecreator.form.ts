import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common'
import {Game} from './game.class'
import {SocketService} from '../../services/socket.service'


@Component({
	selector: 'game-creator-form',

	template: `
		{{diagnostic}}
		<form (ngSubmit)="onSubmit()" #gameForm="ngForm">
	
		  <div class="form-group">
		    <label for="game-name">Game Name</label>
		    <input type="text" ngControl="name" class="form-control" required [(ngModel)]="model.name" id="game-name" placeholder="Game name">
		  </div>

		  <div class="form-group">
		    <label for="question-count">Question count</label>
		    <input type="number" ngControl="questionCount" id="question-count" required [(ngModel)]="model.questionCount">		    
		  </div>

		  <button type="submit"  [disabled]="!gameForm.form.valid" class="btn btn-default">Submit</button>
		</form>

	`
})

export class GameCreationForm {
	
	public model = new Game(10, 'QuizzTournament Default Game');
	
	private submitted:boolean = false;
    private socket;

	constructor(
	 	private _router:Router,
	 	private _socketService:SocketService
	 ) {
        this.socket = this._socketService.getSocket();
	}
	
	onSubmit() {
		this.submitted = true;
        this.socket.emit('game.create', this.model);
		this._router.navigate(['PlayerSettings', {type:'creator'}])
	}
}