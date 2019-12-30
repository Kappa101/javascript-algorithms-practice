console.log('~~~~~~~~~CACHED SOLUTION~~~~~~~~~~~');

const multiplyByTen = (n) => n * 10;

const cache = {};
const cachedMultiply = (n) => {
	if (n in cache) {
		console.log(`${n} is in cache, utilizing cache solution as cache lookups are O(1)`);
		return cache[n];
	} else {
		console.log('${n} is not in cache , calculating first time');
		let result = multiplyByTen(n);
		cache[n] = result;
		return result;
	}
};

console.log(cachedMultiply(10));
console.log(cachedMultiply(10));
console.log(cachedMultiply(10));
console.log(cachedMultiply(10));
