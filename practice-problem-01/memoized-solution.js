console.log('~~~~~~~MEMOIZED SOLUTION , more optimized [cache goes inside method , using closures]~~~~~~~~~');

const multiplyByTen = (n) => n * 10;
// NOTE: cache object is taken inside of method, os that we dont clutter up global scope [which here is Window object]
const memoizedMultiply = (callback) => {
	const cache = {};
	return (n) => {
		if (n in cache) {
			console.log(`${n} is in cache`);
			return cache[n];
		} else {
			console.log(`${n} is not in cache , calculating first time`);
			let result = callback(n);
			cache[n] = result;
			return result;
		}
	};
};

const memoizeByTen = memoizedMultiply(multiplyByTen);
console.log(memoizeByTen(9));
console.log(memoizeByTen(9));
console.log(memoizeByTen(9));
console.log(memoizeByTen(9));
console.log(memoizeByTen(9));
