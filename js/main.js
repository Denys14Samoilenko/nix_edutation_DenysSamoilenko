import emplyeeArr from './employeeArr.js';

console.log(emplyeeArr);

class Emploee {
	constructor(employee) {
		Object.assign(this, employee);
	}
	getId() {
		return this.id;
	}
	getName() {
		return this.name;
	}
	getSurname() {
		return this.surname;
	}
	getFullName() {
		return `${this.surname} ${this.name}`;
	}
	getSalary() {
		return this.salary;
	}
	getWorkExperience() {
		return this.workExperience;
	}
	getIsPrivileges() {
		return this.isPrivileges;
	}
	getGender() {
		return this.gender;
	}
}

let employee = {
	id: 1,
	name: 'Денис',
	surname: 'Хрущ',
	salary: 1010,
	workExperience: 10, /// стаж работы (1 = один месяц)
	isPrivileges: false, /// льготы
	gender: 'male',
};

const employeeObj = new Emploee(employee);
employeeObj.getFullName();
console.log(employeeObj.getFullName());
//!3 task-------------------------------------------------------------
let createEmployesFromArr = arr => {
	return arr.map(function (item) {
		return new Emploee(item);
	});
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);

// //!4 task-------------------------------------------------------------
const getFullNamesFromArr = arr => {
	return arr.map(function (item) {
		return item.getFullName();
	});
};

console.log(getFullNamesFromArr(emplyeeConstructArr));
// //!5 task-------------------------------------------------------------
const getMiddleSalary = arr => {
	let sum = arr.reduce((acc, value) => acc + value.getSalary(), 0);
	return (sum / arr.length).toFixed(1);
};

console.log(getMiddleSalary(emplyeeConstructArr), 'sum'); /// 1560
//!6 task-------------------------------------------------------------

const getRandomEmployee = arr => {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	return arr.find(item => item.id == getRandomInt(1, arr.length + 1));
};

console.log(getRandomEmployee(emplyeeConstructArr));
