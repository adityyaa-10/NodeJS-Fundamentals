const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf8')

writeFileSync('./Content/result-sync.txt',
    `Here is the result : ${first},${second}`,
    { flag: 'a' })

console.log('done with this task');

console.log('onto the next one');


const { readFile, writeFile } = require('fs');
console.log('Starting next task');
readFile('./Content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    const first = result;
    readFile('./Content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./Content/result-sync.txt',
            `Here is the result : ${first},${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('On to the next task');
            }
        )
    })
})

console.log('Starting 3rd task');