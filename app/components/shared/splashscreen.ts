import {Component,View} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router'

@Component({
	
	selector: 'splashscreen',
	template: `
		<h1>Quizz Tournament</h1>

		<div *ngIf="isHost">
			<h2>Waiting for game creation</h2>
		</div>


	`
})
export class Splashscreen {

	private isHost:Boolean;

	constructor(private _routeParams:RouteParams, private _router:Router) {
		console.log(this._routeParams);
		if (this._routeParams.get('type') === 'host') {
			this.isHost = true;
		} else {
			setTimeout(() => {
				this._router.navigate(['Menu']);
			}, 2000)
		}
	}
}