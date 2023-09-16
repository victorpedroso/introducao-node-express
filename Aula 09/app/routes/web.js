var clienteModel = require('../models/clienteModel')();

module.exports = function(app) {
    app.get('/', function(req, res) {
        //console.log(clienteModel.all());
        clienteModel.all(function(err, resultado) {
            //console.log(resultado);
            res.render('site/home', { clientes: resultado });
        });

    });
    app.get('/contato', function(req, res) {
        res.render('site/contato');
    });
}