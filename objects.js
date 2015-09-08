//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'River Merrill';
me.age = 16;
me['hair color'] = 'black';

//2. Iterate over the object to console.log the propery or key names. 

console.log(Object.keys(me));