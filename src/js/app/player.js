define("PlayerEntity", ['entity'], function(entity) {
	var player = function PlayerEntity(moveSpeed,spite) {
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

	return player;
});