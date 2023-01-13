// console.log('Hello World');

// console.log(global);

const os = require('os');
const path = require('path');
const {add,subtract} = require('./math')

console.log(subtract(9,3))


console.log(os.type());
console.log(os.version());
console.log(os.homedir());
// console.log(os.type());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));