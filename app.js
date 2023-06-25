// console.log("Hello");
// console.log("This is my first Node JS app")


const readline = require('readline')
//The readline module provides us an interface to read inputs from the terminal  


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please Enter Your name: ", (name) => {
    console.log(`You Entered: ${name}`);
    rl.close();
    // the close() function is used to close the interface as soon as it is no longer needed.
})


rl.on('close', () => {
    console.log('Interface is closed');
    process.exit(0)
})
//The on method listens to an event, and in the second parameter we can pass a logic using callback function
//Like here we passed a message that the interface is closed in a close event.