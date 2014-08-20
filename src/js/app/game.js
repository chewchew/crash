define(['app/input','app/entity','app/physics'],function(input,entity,physics) {
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
		game.physics.startSystem(Phaser.Physics.Arcade);

		/* === Create player === */
		var playerSprite = game.add.sprite(200,200, 'player');
		player 		  	 = entity.player;
		player.sprite 	 = playerSprite;
		
		/* -- physics -- */
		game.physics.arcade.enable(playerSprite);
		playerSprite.body.gravity.y = 400;
		player.moveAcceleration   = 0.1;
		player.moveDeacceleration = 0.9;
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