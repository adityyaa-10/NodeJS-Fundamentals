const http = require('http')
const server = http.createServer();
const fs = require('fs');
const { error } = require('console');

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
})

//SOLUTION 1 : WITHOUT USING READABLE STREAM
// server.on('request', (request, response) => {
//     fs.readFile('./Files/large-file.txt', (err, data) => {
//         if (err) {
//             response.end('Something Went Wrong')
//         }
//         response.end(data)
//     })
// })


//SOLUTION 2 : USING READABLE STREAM 
// server.on('request', (request, response) => {
//     let rs = fs.createReadStream('./Files/large-file.txt')

//     rs.on('data', (chunk) => {
//         response.write(chunk)
//     })

//     rs.on('end', () => {
//         response.end()
//     })

//     rs.on('error', (error) => {
//         response.end(error.message)
//     })
// })

//SOLUTION 3 : USING PIPE METHOD
server.on('request', (req, res) => {
    let rs = fs.createReadStream('./Files/large-file.txt')
    rs.pipe(res);
})