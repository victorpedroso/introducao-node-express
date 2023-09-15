
// Instalando e testando o nodemon

// npm install -g nodemon

// nodemon <nome arquivo>
var http = require('http');

var server = http.createServer(function(req,res){
    var pagina = req.url;
    console.log(pagina);
    if(pagina === '/contato') {
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Aula01</title>
        </head>
        <body>
            <h1>Página de contato</h1>
        </body>
        </html>
    `);
    }
    else {
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Aula01</title>
        </head>
        <body>
            <h1>Pagina principal</h1>
        </body>
        </html>
    `);
    }

});

var porta = 3000;
server.listen(porta);
console.log('Servidor rodando na porta ' + porta);