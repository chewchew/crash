
define(function() {
	var entity = function(moveSpeed) {
		this.moveSpeed = moveSpeed;
		this.position  = {
			x:0,
			y:0
		};
	}

	var player = function(moveSpeed,sprite) {
		entity.call(this,moveSpeed);

		this.sprite = sprite;
	}

	player.prototype = Object.create(entity.prototype);

	/* --- direction ---
		left  - 'left,'l' 
		right - 'right','r' */
	player.prototype.move = function(direction) {
		if (direction == 'left' ||
			direction == 'l') {
			this.sprite.x -= moveSpeed;
		} else if (direction == 'right' ||
				   direction == 'r') {
			this.position.x += moveSpeed;
		}
	}

	return {
		entity : entity,
		player : player
	};
})