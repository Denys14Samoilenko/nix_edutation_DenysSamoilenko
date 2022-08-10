const counter = () => {
	let str = '';
	return function addStr(value) {
		if (typeof value === 'string' && value.search(/\d/) === -1) {
			str = [...str, ...value].sort().join('');
			console.log(value.search(/\d/) === -1, 'search');
		} else {
			str = '';
		}
		console.log(str, 'StringCheck');
	};
};

const addStr = counter();

addStr('r');
addStr('gjkhrjkheru');
addStr('kgh4ui');
addStr('');
addStr('');
addStr('adasdasdas');
addStr('');
addStr('gjkhrjkheru');
addStr('gjkhrjkheru');
addStr(5566);
addStr(5566);
addStr({});
