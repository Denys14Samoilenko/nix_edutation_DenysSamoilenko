//!Дескрипторы

// obj = { name: 'Denys' };
// obj.name = 'John';
// obj.age = 10;

// Object.defineProperty(obj, 'age', {
// 	writable: false,
// });
// obj.age = 15;
// console.log(obj);

window.a = 9;

getA = () => this.a;

let obj = {
	a: 5,
	getA,
};

obj.getA();
