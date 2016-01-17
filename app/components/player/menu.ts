import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

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
						<li><a [routerLink]="['CreateGame']">Create Game</a></li>
						<li><a [routerLink]="['GameSelection']">Join Game</a></li>
					</ul>
				</div>
			</div>
		</section>
	`
})

export class Menu {

}