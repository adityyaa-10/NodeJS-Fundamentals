const amount = 9;

if (amount < 10) {
    console.log('Small Number');
}
else {
    console.log('Large Number');
}

console.log(`This is my first node app`);  //Codes '' and template stirng `` both works fine!!

//Global - No Window!!

// __dirname - path to current directory
// __filename - file name 
// require - function to use modules (Commands)
// module - info about current module (file)
// process - info about environment where the program is being executed

console.log(`Current directory is ${__dirname}`);