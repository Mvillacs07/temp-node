// Commonjs, every file is module (by default)
//Modules - Encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')  //it ther's a function in the module it will work without assigning the import to a variable


console.log(names);
console.log(data);

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)