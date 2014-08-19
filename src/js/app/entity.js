
define(function() {
	/* === Entity === */
	var Entity = function() {
		this.moveSpeed = 0;
		this.position  = {
			x:0,
			y:0
		};
	}

	/* === Player === */
	var Player = function() {
		Entity.call(this);

		this.sprite = null;
	}

	/* - move -
		left  - 'left,'l' 
		right - 'right','r' */
	Player.prototype.move = function(direction) {
		if (direction == 'left' ||
			direction == 'l') {
			this.sprite.x -= this.moveSpeed;
		} else if (direction == 'right' ||
				   direction == 'r') {
			this.sprite.x += this.moveSpeed;
		}
	}

	return {
		entity : new Entity(),
		player : new Player()
	};
})