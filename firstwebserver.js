const readline = require('readline')
const fs = require('fs')
const http = require('http')

// CREATING A SIMPLE WEB SERVER
/*************************************/

const html = fs.readFileSync('./Template/index.html', 'utf-8')
// STEP 1 : CREATE A SERVER 

const server = http.createServer((request, response) => {
    // console.log('A new request has been recieved');
    // response.end(html)
    // console.log(response)
    let path = request.url;
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.end(html.replace('{{%content%}}', 'You are in Home Page'))
    }
    else if (path.toLocaleLowerCase() === '/about') {
        response.end(html.replace('{{%content%}}', 'You are in About Page'))
    }
    else if (path.toLocaleLowerCase() === '/contact') {
        response.end(html.replace('{{%content%}}', 'You are in Contact Page'))
    }
    else
        response.end(html.replace('{{%content%}}', 'Error 404: Page Not Found'))
});


// STEP 2 : START THE SERVER

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
})
// Here 8000 is the port which we have to specify
// 127.0.0.1 is the url for localhost 