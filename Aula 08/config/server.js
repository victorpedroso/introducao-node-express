module.exports = function() {
    var express = require('express');

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    var rotas = require('../app/routes/web');
    rotas(app);

    var porta = 3000;
    app.listen(porta, function(){
        console.log('Servidor rodando na porta ' + porta);
    });

};