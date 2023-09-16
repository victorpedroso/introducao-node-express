var db = require('../../config/db');

module.exports = function () {
    this.all = function (retorno) {
        var conexao = db();
        return conexao.query('SELECT * FROM curso_node.clientes', retorno);
    };
    return this;    
};