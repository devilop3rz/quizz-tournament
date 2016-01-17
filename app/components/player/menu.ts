import {Component} from 'angular2/core'

@Component({
	selector: 'menu',
	template: `
		<div class="container">
			<header>
				<div class="row">
					<div class="col-xs-12"><h3>Menu</h3></div>
				</div>
			</header>
			<section>
				<div class="row">
					<div class="col-xs-12">
						<ul>
							<li><a [routerLink]="['GameCreator']">Create Game</a></li>
							<li><a [routerLink]="['GameSelection']">Join Game</a></li>
						</ul>
					</div>
				</div>
			</section>
		</div>	
	`
})
export class Menu {

}