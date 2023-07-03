const readline = require('readline')
const fs = require('fs')
const http = require('http');
const url = require('url')

// CREATING A SIMPLE WEB SERVER
/*************************************/

const html = fs.readFileSync('./Template/index.html', 'utf-8')
const products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
const productListHtml = fs.readFileSync('./Template/list.html', 'utf-8');
const productDetailHtml = fs.readFileSync('./Template/details.html', 'utf-8');


// const productHtmlArray = products.map((prod) => {
//     let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
//     output = output.replace('{{%NAME%}}', prod.name)
//     output = output.replace('{{%MODELNAME%}}', prod.modeName)
//     output = output.replace('{{%MODELNO%}}', prod.modelNumber)
//     output = output.replace('{{%SIZE%}}', prod.size)
//     output = output.replace('{{%CAMERA%}}', prod.camera)
//     output = output.replace('{{%PRICE%}}', prod.price)
//     output = output.replace('{{%COLOR%}}', prod.color)
//     output = output.replace('{{%ID%}}', prod.id)
//     return output
// })

const replaceHtml = require('./Modules/replaceHtml')

// function replaceHtml(template, product) {
//     let output = template.replace('{{%IMAGE%}}', product.productImage);
//     output = output.replace('{{%NAME%}}', product.name)
//     output = output.replace('{{%MODELNAME%}}', product.modeName)
//     output = output.replace('{{%MODELNO%}}', product.modelNumber)
//     output = output.replace('{{%SIZE%}}', product.size)
//     output = output.replace('{{%CAMERA%}}', product.camera)
//     output = output.replace('{{%PRICE%}}', product.price)
//     output = output.replace('{{%COLOR%}}', product.color)
//     output = output.replace('{{%ID%}}', product.id)
//     output = output.replace('{{%ROM%}}', product.ROM)
//     output =yehi ya output.replace('{{%DESC%}}', product.Description)
//     return output
// }

// STEP 1 : CREATE A SERVER 

// const server = http.createServer((request, response) => {
//     // let path = request.url;
//     let { query, pathname: path } = url.parse(request.url, true)

//     if (path === '/' || path.toLocaleLowerCase() === '/home') {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'My-Header': 'Hello, World!'
//         })
//         response.end(html.replace('{{%content%}}', 'You are in Home Page'))
//     }
//     else if (path.toLocaleLowerCase() === '/about') {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'My-Header': 'Hello, World!'
//         })
//         response.end(html.replace('{{%content%}}', 'You are in About Page'))
//     }
//     else if (path.toLocaleLowerCase() === '/contact') {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'My-Header': 'Hello, World!'
//         })
//         response.end(html.replace('{{%content%}}', 'You are in Contact Page'))
//     }
//     else if (path.toLocaleLowerCase() === '/products') {
//         if (!query.id) {
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod)
//             })
//             let productResponseHtml = html.replace('{{%content%}}', productHtmlArray.join(','))
//             response.writeHead(200, { 'Content-Type': 'text/html', })
//             response.end(productResponseHtml)
//         }
//         else {
//             let prod = products[query.id];
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod)
//             // response.end('This is product having id ' + query.id)
//             response.end(html.replace('{{%content%}}', productDetailResponseHtml))
//         }
//     }
//     else {
//         response.writeHead(404, {
//             'Content-Type': 'text/html',
//             'My-Header': 'Hello, World!'
//         })
//         response.end(html.replace('{{%content%}}', 'Error 404: Page Not Found'))
//     }
// });

const server = http.createServer();

server.on('request', (request, response) => {
    let { query, pathname: path } = url.parse(request.url, true)

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
        if (!query.id) {
            let productHtmlArray = products.map((prod) => {
                return replaceHtml(productListHtml, prod)
            })
            let productResponseHtml = html.replace('{{%content%}}', productHtmlArray.join(','))
            response.writeHead(200, { 'Content-Type': 'text/html', })
            response.end(productResponseHtml)
        }
        else {
            let prod = products[query.id];
            let productDetailResponseHtml = replaceHtml(productDetailHtml, prod)
            // response.end('This is product having id ' + query.id)
            response.end(html.replace('{{%content%}}', productDetailResponseHtml))
        }
    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text/html',
            'My-Header': 'Hello, World!'
        })
        response.end(html.replace('{{%content%}}', 'Error 404: Page Not Found'))
    }
})


// STEP 2 : START THE SERVER

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
})
// Here 8000 is the port which we have to specify
// 127.0.0.1 is the url for localhost 