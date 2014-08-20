
define(function () {

	function ApplyGravity(entity,gravity,maxGravity) {
		if (entity.speed.y <= maxGravity)
			entity.speed.y += gravity;
	}

	return {
		applyGravity : ApplyGravity
	};
});