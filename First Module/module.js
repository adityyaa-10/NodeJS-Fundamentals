//Common Js, every file is module (by default);
//Modules - Encapsulated code (Only share minimum);

// Importing modules

const sayHi = require('./utils');
const data = require('./alternateSyntax');
// const names = require('./names');

// console.log(data);
console.log(names);

require('./quiz');

sayHi('Ross');
sayHi(names.peter);
sayHi(names.john);
