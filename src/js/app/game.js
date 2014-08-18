define(['app/input','app/entity'],function(input,entity) {
	var handleInput = input;
	var player 		= entity.player;

	var game;

	var cursors;	

	function preload() {
		cursors = game.input.keyboard.createCursorKeys();

		game.load.image('player','assets/player-base-sprite.png');
	}

	function create() {
		var playerSprite = game.add.sprite(200,200, 'player');
	}

	function update() {
		handleInput(player,cursors);
	}

	return function init(resolution) {
		game = new Phaser.Game(
				resolution[0], resolution[1], 
				Phaser.AUTO,
				'game',
				{ preload: preload, create: create, update: update });
	}
});