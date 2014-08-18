
define(['entity'],function(){
	var speed = 5;
	return function handleInput(player,cursors) {
		if (cursors.right.isDown) {
			player.x += speed;
		} else if (cursors.left.isDown) {
			player.x -= speed;
		}
	}
})