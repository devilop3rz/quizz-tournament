import {Component} from 'angular2/core'
import {GameCreationForm} from './gamecreator.form'


@Component({
	selector: 'game-creator',
	directives: [GameCreationForm],
	template: `
		<header>
			<div class="row">
				<div class="col-xs-12"><h3>Create Game!</h3></div>
			</div>
		</header>
		<game-creator-form></game-creator-form>

	`
})

export class GameCreator {
	
	constructor() {
		console.log('GAME CRAETOR')
	}
	
}