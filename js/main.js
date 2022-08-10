// const counter = () => {
// 	let sum = 0;
// 	return function sumArgs(value) {
// 		sum += value;
// 		console.log(sum);
// 	};
// };

// const funcCounter = counter();

// funcCounter(5);
// funcCounter(5);
// funcCounter(5);
//!second task--------------------------------------------------------------------
let arr1 = [];
arr1.push('sss');
arr1.push(5555);
arr1.push({ name: 'test' });
arr1 = [];

const counter = () => {
	let arr1 = [];
	return function sumArgs(value) {
		if (value) {
			arr1.push(value);
		} else {
			arr1 = [];
		}
		console.log(arr1);
	};
};

const sumArgs = counter();

sumArgs();
