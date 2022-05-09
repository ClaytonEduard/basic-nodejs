const express = require('express');//carregando o modulo
//carreando dados da express
let app = express();

//criando o servidor basico na unha e armazendo na variavel server


app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'Clayton',
            email: 'clayton@gmail.com',
            id: 1
        }]
    });
})

app.listen(3000, '127.0.0.1', () => {
    console.log("Servidor Online")
})