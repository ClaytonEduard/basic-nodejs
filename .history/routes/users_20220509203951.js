//buscando as dependencias do express
let express = require('express');
//habilitando a dependencia do 
let router = express.Router();


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
