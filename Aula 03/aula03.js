var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Aula03</title>
        </head>
        <body>
            <h1>Página Home</h1>
        </body>
        </html>
    `
    )
});

app.get('/contato', function(req, res) {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Aula03</title>
        </head>
        <body>
            <h1>Página Contato</h1>
        </body>
        </html>
    `
    )
});

var porta = 3000;
app.listen(porta, function(){
    console.log('Servidor rodando na porta ' + porta);
});
