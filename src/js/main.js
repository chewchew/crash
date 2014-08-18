var resolution = [900,600];
var game = null;

/* === init(wrap,gameContainer) ===
	wrap -------------------------- 	
		id of wrapping element 
		used for centering content
	gameContainer -----------------
		the element that should 
		contain the	game window 
   ================================ */
function init(wrap,gameContainer) {
	game = new Phaser.Game(
		resolution[0], resolution[1], 
		Phaser.AUTO,
		gameContainer,
		{ preload: preload, create: create, update: update })

	// set width of game window to center it
	$(wrap).css("width",resolution[0]);
}

function preload() {
	
}

function create() {
	
}

function update() {
	
}