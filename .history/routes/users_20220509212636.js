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
// instalando o NeDB
let NeDB = require('')

//exportando o aquivos para a index
module.exports = (app) => {
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

    app.post('/users', (req, res) => {
        res.json(req.body);
    })
};
