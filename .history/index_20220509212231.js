const express = require('express');//carregando o modulo
//inportando os dados da rota Index e Usersf
/*let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users'); */

/*
//usando as rotas
app.use(routesIndex);
// definindo um padrao para a rota user sendo '/users'
app.use('/users',routesUsers); */

//carregando o body parser
const bodyParser = require('body-parser');


//carreando dados da express
let app = express();


// chamando o body parser, todos os dados via POST converta para JSON
app.use(bodyParser.urlencoded({express});
app.use(bodyParser.json());


//trabalhando com o congin
const consign = require('consign');
//o congin vai incluir todos os dados das routes no app
consign().include('routes').into(app);

//criando o servidor basico na unha e armazendo na variavel server
app.listen(3000, '127.0.0.1', () => {
    console.log("Servidor Online")
})