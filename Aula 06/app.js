var app = require('./config/server');

app.get('/', function(req, res) {
    res.render('site/home');
});

app.get('/contato', function(req, res) {
    res.render('site/contato');
});

var porta = 3000;
app.listen(porta, function(){
    console.log('Servidor rodando na porta ' + porta);
});
