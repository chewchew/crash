var resolution = [900,600];
var game = null;

function preload() {
	game.load.spritesheet('player', 'assets/player_sketch-stand-sheet-resized.png', 102, 120);
}

function create() {
	this.game.stage.backgroundColor = '#DDDDDD';

	var player = game.add.sprite(resolution[0]/2,resolution[1]/2, 'player');
	player.animations.add('stand',[0,1,2,3,4,5],5,true);
	player.animations.play('stand');
}

function update() {
	
}

/* === init(wrap,gameContainer) ===
	wrap -------------------------- 	
		id of wrapping element 
		used for centering content
	gameContainer -----------------
		the element that should 
		contain the	game window 
   ================================ */
define(function(require) {
	// setup libraries
	require('phaser');
	require('jquery');

	game = new Phaser.Game(
		resolution[0], resolution[1], 
		Phaser.AUTO,
		'game',
		{ preload: preload, create: create, update: update })

	// set width of game window to center it
	$(wrap).css("width",resolution[0]);
});