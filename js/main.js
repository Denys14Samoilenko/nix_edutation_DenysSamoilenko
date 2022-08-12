Array.prototype.map1 = function (func) {
	const result = [...this];
	for (let i = 0; i < result.length; i++) {
		result[i] = func(result[i]);
	}
	return result;
};
const arr = [1, 2, 5, 8];
console.log(arr.map1(item => item * 15));
console.log(arr);
