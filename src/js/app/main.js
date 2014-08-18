var resolution = [900,600];

var game;
var player;

var handleInput;
var cursors;

function preload() {
	cursors = game.input.keyboard.createCursorKeys();

	game.load.image('player','assets/player-base-sprite.png');
}

function create() {
	var playerSprite = game.add.sprite(resolution[0]/2,resolution[1]/2, 'player');
}

function update() {
	handleInput(player,cursors);
}

define(function(require) {
	// Set up libraries
	require('phaser');
	require('jquery');

	// Set up top-level game scripts
	// --- input ---
	handleInput = require('app/input');

	// Initialize game
	game = new Phaser.Game(
		resolution[0], resolution[1], 
		Phaser.AUTO,
		'game',
		{ preload: preload, create: create, update: update })

	// Set width of game window to center it
	$(wrap).css("width",resolution[0]);
});