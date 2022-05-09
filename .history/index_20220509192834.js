//criando um servidor Web basico

const http = require('http');

let server = http.createServer((req, res) => {

    console.log("URL: ", req.url)
    console.log("METHOD:", req.method)

})

server.listen(3000, )