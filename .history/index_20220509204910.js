const express = require('express');//carregando o modulo
//inportando os dados da rota Index e Usersf
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

//carreando dados da express
let app = express();

//usando as rotas
app.use(routesIndex);
// definindo um padrao para a rota user sendo '
app.use('/users',routesUsers);



//criando o servidor basico na unha e armazendo na variavel server
app.listen(3000, '127.0.0.1', () => {
    console.log("Servidor Online")
})