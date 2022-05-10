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

    let route = app.route('/users');

    route.get((req, res) => {

        //listando os dados do banco
        db.find({}).sort({ name: 1 }).exec((err, users) => {

            if (err) {
                /* console.error(`error: ${err}`);
                res.status(400).json({
                    error: err
                }) */

                app.utils.error.send(err, req, res);

            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
            }
        })


    })

    route.post((req, res) => {

        if (!app.utils.validator.user(app, req, res)) return false;
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user)
            }
        })
    });

    // filtrando soment um user
    let routeId = app.route('/users/:id');

    routeId.get((req, res) => {
        db.findOne({ _id: req.params.id }).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user)
            }
        })
    })

    // metodo editar por codigo
    routeId.put((req, res) => {
        if (!app.utils.validator.user(app, req, res)) return false;
        db.update({ _id: req.params.id }, req.body, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                //object.assign(junta os dois dados)
                res.status(200).json(Object.assign(req.params, req.body))
            }
        })
    })


    // metodo delete
    routeId.delete((req, res) => {
        db.remove({ _id: req.params.id }, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                //object.assign(junta os dois dados)
                res.status(200).json(req.params)
            }
        })
    })

};
