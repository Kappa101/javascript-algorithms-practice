console.log('~~~~~~~~~~DEMO recursion using accumulators~~~~~~~~~~');

function accumulateFunc(startArray, joinString) {
	function recurseIt(index, result) {
		result += startArray[index];
		if (index === startArray.length - 1) {
			return result;
		} else {
			return recurseIt(index + 1, result + joinString);
		}
	}
	return recurseIt(0, '');
}

const arr = [ 's', 'cr', 't cod', ':)' ];
const joiner = 'e';
console.log(accumulateFunc(arr, joiner));
