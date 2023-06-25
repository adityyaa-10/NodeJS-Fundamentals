// READING AND WRITING TO A FILE SYNCHRONOUSLY
/****************************************************/

// const readline = require('readline')
const fs = require('fs')


//Read file Sunchronously
let textIn = fs.readFileSync('./Files/sample.txt', 'utf-8');
console.log(textIn)

let content = `Data read from input.txt: ${textIn} \n Date created ${new Date()} `
// We read data from sample.txt and wrote it in output.txt

fs.writeFileSync('./Files/output.txt', content)
//NOTE: If output.txt is not present, Node will create a file named output.txt and then
//map the same content as provided