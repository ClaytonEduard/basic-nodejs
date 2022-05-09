//buscando as dependencias do express
let express = require('express');
//habilitando a dependencia do Router
let routes = express.Router();


routes.get('/users', (req, res) => {

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

routes.get('/users/admin', (req, res) => {

})


//exportando o aquivos para a index
module.exports = routes;
