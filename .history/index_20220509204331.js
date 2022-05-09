const express = require('express');//carregando o modulo
//inportando os dados da rota Index
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');


//carreando dados da express
let app = express();

//criando o servidor basico na unha e armazendo na variavel server



app.listen(3000, '127.0.0.1', () => {
    console.log("Servidor Online")
})