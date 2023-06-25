
// READING AND WRITING TO FILE ASYNCHRONOUSLY 
/********************************************/

const fs = require('fs')

fs.readFile('./Files/start.txt', 'utf-8', (err1, data1) => {
    console.log(data1)
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (err2, data2) => {
        console.log(data2);
        fs.readFile('./Files/append.txt', 'utf-8', (err3, data3) => {
            console.log(data3);
            fs.writeFile('./Files/output.txt', `${data2}\n\n ${data3} \n\n Date created ${new Date()}`, () => {
                console.log('File Written successfully');
            })
        })
    })
})
console.log('Reading File...')