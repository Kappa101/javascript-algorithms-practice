console.log('~~~~~~~~~~~~~~~DEMO of accumulator style recursion~~~~~~~~~');
const memoize = (fnc) => {
	let cache = {};
	return (...args) => {
		let n = args[0];
		if (n in cache) {
			console.log(`${n} is cached already`);
			return cache[n];
		} else {
			console.log(`is caclulated first time`);
			const result = fnc(n);
			cache[n] = result;
			return result;
		}
	};
};

const factorial = memoize((num) => {
	if (num === 0) return 1;
	return num * factorial(num - 1);
});

console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(10));
