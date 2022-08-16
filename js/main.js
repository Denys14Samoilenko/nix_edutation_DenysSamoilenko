import condidateArr from './candidates.js';

// //!-------------1 task----------------------------------------------------------------------

// const arr = ['Vasya', 'Petya', 'Alexey'];
// let removeUser = (arr, i) => arr.splice(i, 1);
// removeUser(arr, 1);
// console.log(arr);
//!------------2 task----------------------------------------------------------------------
// const obj = { name: 'Vasya', age: 1 };

// function getAllKeys(obj) {
// 	return Object.keys(obj);
// }
// getAllKeys(obj); /// ["name", "age"]
// console.log(getAllKeys(obj));
//!------------3 task----------------------------------------------------------------------

// const obj = { name: 'Vasya', age: '1' };
// function getAllValues(obj) {
// 	let getAllValues = Object.values(obj);
// 	return getAllValues;
// }
// getAllValues(obj);
// console.log(getAllValues(obj));
//!------------4 task----------------------------------------------------------------------
// const obj = {
// 	id: 3,
// 	name: 'Vasya',
// };

// const secondObj = {
// 	id: 4,
// 	name: 'Katya',
// };

// const arr = [
// 	{
// 		id: 1,
// 		name: 'Kolya',
// 	},
// 	{
// 		id: 2,
// 		name: 'Petya',
// 	},
// ];

// insertIntoarr(obj, 2);

// // insertIntoarr(secondObj, 1);
// // console.log(arr);

// function insertIntoarr(obj, id) {
// 	let itemIndex = 0;
// 	arr.find((item, index) => {
// 		if (item.id === id) {
// 			itemIndex = index;
// 		}
// 	});
// 	arr.splice(itemIndex, 0, obj);
// 	console.log(arr);
// }

//!------------5 task----------------------------------------------------------------------

// class Condidate {
// 	constructor(condidate) {
// 		Object.assign(this, condidate);
// 	}
// 	getState() {
// 		return this.address.split(',')[2];
// 	}
// }

// const condidateObj = new Condidate(condidateArr[0]);
// condidateObj.getState();
// console.log(condidateObj.getState());
//!------------6 task----------------------------------------------------------------------
// function getCompanyNames(array) {
// 	let companyArray = array.map(item => item.company);
// 	return [...new Set(companyArray)];
// }
// console.log(getCompanyNames(condidateArr));
//!------------7 task----------------------------------------------------------------------
// function getUsersByYear(year) {
// 	let candidatId = condidateArr.filter(item => {
// 		if (new Date(item.registered.split(' ')[0]).getFullYear() === year) {
// 			return item;
// 		}
// 	});
// 	return candidatId.map(item => item._id);
// }

// console.log(getUsersByYear(2015));
//!------------8 task----------------------------------------------------------------------
// function getCondidatesByUnreadMsg(message) {
// 	let filteredResult = condidateArr.filter(
// 		({ greeting }) => parseInt(greeting.match(/\d+/)) <= message
// 	);
// 	return filteredResult.map(item => new Condidate(item));
// }

// console.log(getCondidatesByUnreadMsg(5));
//!------------9 task----------------------------------------------------------------------
// function getCondidatesByGender(sex) {
// 	let filteredResult = condidateArr.filter(({ gender }) => gender === sex);
// 	return filteredResult.map(item => new Condidate(item));
// }

// console.log(getCondidatesByGender('male'));
