import condidateArr from './candidates.js';
//!----1 task-------------------------------------------------------------
// const searchCandidatesByPhoneNumber = phone => {
// 	const result = condidateArr.filter(candidate => {
// 		return candidate.phone.indexOf(phone) !== -1;
// 	});
// 	return result;
// };

// console.log(searchCandidatesByPhoneNumber('42'));

//!----2 task-------------------------------------------------------------
// const getCandidateById = id => {
// 	const candidate = condidateArr.find(candidate => candidate._id === id);
// 	const data = new Date(candidate.registered);
// 	const newRegistered = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
// 	return { ...candidate, registered: newRegistered };
// };

// console.log(getCandidateById('5e216bc95983a76c8461f88f'));
//!----3 task-------------------------------------------------------------
// function sortCandidatesArr(order) {
// 	if (order === 'asc' || order === 'desc') {
// 		return [...condidateArr]
// 			.sort((a, b) => {
// 				const newA = Number(a.balance.slice(1).split(',').join(''));
// 				const newB = Number(b.balance.slice(1).split(',').join(''));
// 				return 'asc' === order ? newA - newB : newB - newA;
// 			})
// 			.map(item => `${item.balance}`);
// 	}
// 	return [...condidateArr].map(item => `${item.balance}`);
// }
// console.log(sortCandidatesArr(''));
//!----4 task-------------------------------------------------------------
// const result = {};
// condidateArr.map(candidate => {
// 	if (!result[candidate.eyeColor]) {
// 		result[candidate.eyeColor] = [candidate];
// 	} else {
// 		result[candidate.eyeColor].push(candidate);
// 	}
// });
// console.log(result);
