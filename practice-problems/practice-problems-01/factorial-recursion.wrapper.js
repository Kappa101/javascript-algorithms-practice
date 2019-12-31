console.log(`~~~~~~~~~~~~~~~DEMO of wrapper style recursions~~~~~~~`);

function wrapperFactorial(number) {
	function recurse(i) {
		console.log(`$now i is ${i}`);
		if (i > 0) {
			const result = i * recurse(i - 1);
			return result;
		} else {
			return 1;
		}
	}
	return recurse(number);
}

console.log(wrapperFactorial(5));
