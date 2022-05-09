//criando um servidor Web basico

const http = require('http');//carregando o modulo

//criando o servidor e armazendo na variavel server
let server = http.createServer((req, res) => {

    console.log("URL: ", req.url)
    console.log("METHOD:", req.method)

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1>Olá</h1>");
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                
            }));

            break;
    }

})

server.listen(3000, '127.0.0.1', () => {
    console.log("Servidor Online")
})