var mysql = require('mysql2');

var conexao = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2580Vic@.',
        database: 'curso_node'
    });
};


module.exports = conexao;