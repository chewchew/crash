
define(['require','phaser','jquery'], function(require,phaser,$) {
	var resolution = [900,600];

	// Set width of game window to center it
	$(wrap).css("width",resolution[0]);

	require(['app/game'], function(game) {
		game(resolution);
	});
});