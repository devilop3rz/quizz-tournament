import {Component} from 'angular2/core'
import {SocketService} from '../../services/socket.service'

interface Question {
	question: string,
	answers: any,
	correct: number
}

@Component({
	selector: 'gamepad',
	template: `

		<header>
			<div class="row">
				<div class="col-xs-12"><h3>Gamepad</h3></div>
			</div>
		</header>
		<section>
			<div class="row" *ngIf="question">
				<div class="col-xs-12" *ngFor="#answer of question.answers;#i = index" >
					<button (click)="sendAnswer(i)">{{answer}}</button>
				</div>
			</div>
		</section>

	`
})
export class Gamepad {

	private socket;
	private question: Question;

	constructor(private _socketService:SocketService) {
		this.socket = this._socketService.getSocket();
		this.socket.emit('ready');
		this.socket.on('game.question', (data) => {
			this.question = data;
		})
	}

	sendAnswer(answer) {
		console.log({ id: this.socket.id, answer: answer });
	
		this.socket.emit('game.sendAnswer', { id: this.socket.id, answer:answer});
	}

}