console.log('~~~~~~~~Non-recursive solution~~~~~~~~~');
function computeFactorial(num) {
	console.log('computing factorial for num :', num);
	let factorial = 1;
	for (let i = num; i >= 1; i--) {
		console.log(`computing for i = ${i}`);
		// factorial *= i;
		factorial = factorial * i;
	}
	return factorial;
}

console.log(computeFactorial(5));

console.log('~~~~~~~FACTORIAL USING NORMAL METHOD AND THEN RECURSION~~~~~~');
function computeRecursiveFactorial(num) {
	if (num === 0) return 1;

	num = num * computeRecursiveFactorial(num - 1);
	return num;
}

console.log(computeRecursiveFactorial(5));
console.log(computeRecursiveFactorial(7));
