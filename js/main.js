//!first task---------------------------------------------

const citiesAndCountries = {
	Киев: 'Украина',
	'Нью-Йорк': 'США',
	Амстердам: 'Нидерланды',
	Берлин: 'Германия',
	Париж: 'Франция',
	Лиссабон: 'Португалия',
	Вена: 'Австрия',
};

let result = [
	Object.keys(citiesAndCountries).map(
		key => `${key} - это ${citiesAndCountries[key]}`
	),
];

console.log(result);
//!second task-----------------------------------------------
const amount = 12;
let mass = [];
for (let i = 0; i < amount; i++) {
	if (i % 3 == 0) {
		arr = [];
		mass.push(arr);
	}
	arr.push(i + 1);
}
console.log(mass);
//!third task-----------------------------------------------
const namesOfDays = {
	ru: [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	],
	en: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	],
};

function getArrayName() {
	const lang = 'ru';
	const day = 3;
	console.log(namesOfDays[lang][day - 1]);
}

getArrayName();

// //!fourth task-----------------------------------------------
let arr1 = [10, 800, 3453000, 8010];

arr1.sort((el1, el2) => {
	if (el1 == el2) return 0;
	else if (el1 > el2) return 1;
	else if (el1 < el2) return -1;
});

console.log(arr1[0] + arr1[1]);
//!fifth task-----------------------------------------------
const getDoubleNumber = array => {
	const string = array.join('');
	return parseInt(string, 2);
};
getDoubleNumber([1, 1, 0, 0, 1]);
console.log(getDoubleNumber([1, 1, 0, 0, 1]));
