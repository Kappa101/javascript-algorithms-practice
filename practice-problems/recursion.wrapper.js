console.log('~~~~~DEMO~~~~');

function wrapperFnLoop(start, end) {
	// wrapper
	function recurse(i) {
		console.log(`looping from ${i} to ${end}`);
		if (i < end) {
			recurse(i + 1);
		}
	}
	recurse(start);
}

wrapperFnLoop(1, 4);
