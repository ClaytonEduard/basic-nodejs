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
let NeDB = require('nedb');
//criando o banco 
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

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

        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                })
            }else{
                res.
            }
        })
    })
};
