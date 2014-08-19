define(['app/input','app/entity'],function(input,entity) {
	var handleInput = input;

	var game;

	var cursors;

	/* preload */
	function preload() {
		cursors = game.input.keyboard.createCursorKeys();

		game.load.image('player','assets/player-base-sprite.png');
	}

	/* create */
	function create() {
		/* === Create player === */
		var playerSprite = game.add.sprite(200,200, 'player');
		player = entity.player;
		player.moveSpeed = 10;
		player.sprite 	 = playerSprite;
		player.move('right');
	}

	/* update */
	function update() {
		handleInput(player,cursors);
	}

	/* init */
	return function init(resolution) {
		game = new Phaser.Game(
				resolution[0], resolution[1], 
				Phaser.AUTO,
				'game',
				{ preload: preload, create: create, update: update });
	}
});