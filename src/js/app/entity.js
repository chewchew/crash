
define(function() {
	/* === Entity === */
	var Entity = function() {
		this.moveAcceleration   = 0;
		this.moveDeacceleration = 0;
		this.moveSpeed = 0;
		this.position  = {
			x:0,
			y:0
		};

		this.sprite = null;
	}

	/* - move -
		left  - 'left,'l' 
		right - 'right','r' */
	Entity.prototype.move = function(direction) {
		if (direction == 'left' ||
			direction == 'l') {
			this.moveSpeed     -= this.moveAcceleration;
		} else if (direction == 'right' ||
				   direction == 'r') {
			this.moveSpeed     += this.moveAcceleration;
		} else if (this.moveSpeed != 0 && direction == 'none') {
			if (this.moveSpeed < 0)
				this.moveSpeed *= this.moveDeacceleration;
			else if (this.moveSpeed > 0)
				this.moveSpeed *= this.moveDeacceleration;
		}
		this.sprite.body.x += this.moveSpeed;
	}

	/* === Player === */
	var Player = function() {
		Entity.call(this);
	}
	Player.prototype = Object.create(Entity.prototype);

	return {
		entity : new Entity(),
		player : new Player()
	};
})