const readline = require('readline')
const fs = require('fs')
const http = require('http');

// CREATING A SIMPLE WEB SERVER
/*************************************/

const html = fs.readFileSync('./Template/index.html', 'utf-8')
const products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
const productListHtml = fs.readFileSync('./Template/list.html', 'utf-8');

const productHtmlArray = products.map((prod) => {
    let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
    output = output.replace('{{%NAME%}}', prod.name)
    output = output.replace('{{%MODELNAME%}}', prod.modeName)
    output = output.replace('{{%MODELNO%}}', prod.modelNumber)
    output = output.replace('{{%SIZE%}}', prod.size)
    output = output.replace('{{%CAMERA%}}', prod.camera)
    output = output.replace('{{%PRICE%}}', prod.price)
    output = output.replace('{{%COLOR%}}', prod.color)

    return output
})

// STEP 1 : CREATE A SERVER 

const server = http.createServer((request, response) => {
    // console.log('A new request has been recieved');
    // response.end(html)
    // console.log(response)
    let path = request.url;
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello, World!'
        })
        response.end(html.replace('{{%content%}}', 'You are in Home Page'))
    }
    else if (path.toLocaleLowerCase() === '/about') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello, World!'
        })
        response.end(html.replace('{{%content%}}', 'You are in About Page'))
    }
    else if (path.toLocaleLowerCase() === '/contact') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello, World!'
        })
        response.end(html.replace('{{%content%}}', 'You are in Contact Page'))
    }
    else if (path.toLocaleLowerCase() === '/products') {
        response.writeHead(200, { 'Content-Type': 'text/html', })
        response.end(html.replace('{{%content%}}', productHtmlArray.join(',')))

    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello, World!'
        })
        response.end(html.replace('{{%content%}}', 'Error 404: Page Not Found'))
    }
});


// STEP 2 : START THE SERVER

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
})
// Here 8000 is the port which we have to specify
// 127.0.0.1 is the url for localhost 