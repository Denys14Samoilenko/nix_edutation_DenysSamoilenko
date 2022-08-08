import studentArr from './studentArr.js';

console.log(studentArr);

class Student {
	static #listOfStudents = [];
	static #id = 1;
	id;

	constructor(enrollee) {
		this.id = Student.#id++;
		Student.#listOfStudents.push({
			id: this.id,
			name: enrollee.name,
			surname: enrollee.surname,
			ratingPoint: enrollee.ratingPoint,
			schoolPoint: enrollee.schoolPoint,
			course: enrollee.course,
			isSelfPayment: !enrollee.ratingPoint >= 800,
		});
	}
	getId() {
		return this.id;
	}
	getListOfStudents() {
		return Student.#listOfStudents;
	}
	getNotPay() {
		let students = Student.#listOfStudents;
		let bestEnrollee = students.filter(
			student => student.isSelfPayment === false
		);
		return bestEnrollee
			.sort(function (a, b) {
				if (a.ratingPoint < b.ratingPoint) {
					return 1;
				}
				if (a.ratingPoint > b.ratingPoint) {
					return -1;
				}
				if (a.ratingPoint === b.ratingPoint) {
					if (a.schoolPoint < b.schoolPoint) {
						return 1;
					}
					if (a.schoolPoint > b.schoolPoint) {
						return -1;
					}
					return 0;
				}
			})
			.slice(0, 5);
	}
}

let student1 = new Student(studentArr[0]);
studentArr.forEach((student, index) => {
	if (index > 0) {
		new Student(student);
	}
});

console.log(student1.getNotPay());

class CustomString {
	constructor(reverse, ucFirst, ucWords) {
		this.revers = reverse;
	}
	get reverse() {
		return this.reverse();
	}
	reverse() {
		let str = 'qwerty';
		return str.split('').reverse().join('');
	}
}

const myString = new CustomString();

myString.reverse();
console.log(myString.reverse());
