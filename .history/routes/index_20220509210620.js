/*
//buscando as dependencias do express
let express = require('express');
//habilitando a dependencia do Router
let routes = express.Router();

routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Olá</h1>");
})
*/

module.exports = app=>{
    app.get('/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Olá</h1>");
    })
};