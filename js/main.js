// //HW_1 ex4
// const roomsOnFloor = 3;
// const floors = 9;
// const roomNumber = 456;

// function calcApartment(apartment, floors, roomsOnFloor) {
// 	let porch = apartment / floors / roomsOnFloor;
// 	let floor = apartment / floors - porch * floors;

// 	console.log('math ->', Math.floor(porch + 1));
// 	console.log('math ->', Math.floor(floor));
// 	console.log(String(porch).split('.')[0]);
// 	console.log(String(floor).split('.')[0]);
// 	debugger;
// }

// calcApartment(roomNumber, floors, roomNumber);

// function ex5(iter) {
// 	let row = iter;

// 	for (let i = 0; i < row; i++) {
// 		let item = iter;
// 		let line = [];
// 		for (let j = 0; j < iter; j++) {
// 			if (iter - item < j) {
// 				line.push('-');
// 			} else {
// 				line.push('#');
// 			}
// 		}
// 		console.log(line.join(''));
// 	}
// }

// ex5(10);
