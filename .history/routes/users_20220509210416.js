/* 

//buscando as dependencias do express
let express = require('express');
//habilitando a dependencia do Router
let routes = express.Router();
 routes.get('/', (req, res) => {

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

routes.get('/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });
})


*/


//exportando o aquivos para a index
module.exports = function (app) {
    app.get('/', (req, res) => {

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
    
    appF.get('/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: []
        });
    })
};
