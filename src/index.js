function max(array) {
	if (array === undefined) {
		return;
	}
	else {
		var maximum = array[0];
		for (var i = 0; i < array.length; i++) {
			if (maximum < array[i])
				maximum = array[i];
		}
	}
	return maximum;
}

function min(array) {
	if (array === undefined) {
		return;
	}
	else {
		var minimum;
		for (var i = 0; i < array.length; i++) {
			if (typeof (array[i]) == 'number') {
				if (minimum === undefined) {
					minimum = array[i]; continue;
				}
				if (minimum >= array[i]) {
					minimum = array[i];
				}
			}
		}
		return minimum;
	}
}

function sum() {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof (arguments[i]) != 'number') continue;
		result += arguments[i];
	}
	return result;
}
