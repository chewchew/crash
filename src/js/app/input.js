
define(function(){
	var speed = 5;

	/* handleInput */
	return function handleInput(player,cursors) {
		if (cursors.right.isDown) {
			player.move('right');
		} else if (cursors.left.isDown) {
			player.move('left');
		} else {
			player.move('none');
		}
	}
})