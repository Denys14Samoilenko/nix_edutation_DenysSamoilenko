//!!!!First task!!!!!!!!!!!/
for (let i = 1; i <= 10; i++) {
	if (i % 3 === 0) {
		console.log('fizBuz');
		continue;
	}
	if (i % 2 !== 0) {
		console.log('Buz');
		continue;
	}
	if (i % 2 === 0) {
		console.log('Fiz');
		continue;
	}
}
//!!!!Second task!!!!!!!!!!!
function factorial2(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	for (let index = n - 1; index >= 1; index--) {
		n *= index;
	}
	return n;
}

console.log(factorial2(10));

//!!!!Third task!!!!!!!!!!!
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const result = (consumptionPerWeek * weeksAmount) / sheetsInReamPaper;
console.log(result);
