

'use strict';

class Player {

	constructor(playerData) {
		this.id = playerData.id;
		this.name = playerData.name;
		this.char = playerData.pic;
		this.color = playerData.color;
		this.score = 0;
		this.attack = '';
		console.log(playerData)
	}
}


module.exports  = Player;