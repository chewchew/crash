
define("entity", function() {
	var entity = function Entity(moveSpeed) {
		this.moveSpeed = moveSpeed;
		this.position  = {
			x:0,
			y:0
		};
	}

	var player = function PlayerEntity(moveSpeed,sprite) {
		Entity.call(this,moveSpeed);

		this.sprite = sprite;
	}

	PlayerEntity.prototype = Object.create(Entity.prototype);

	/* --- direction ---
		left  - 'left,'l' 
		right - 'right','r' */
	PlayerEntity.prototype.move = function(direction) {
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