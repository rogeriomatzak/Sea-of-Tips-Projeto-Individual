var database = require("../database/config");

function listarpeixes() {
    var instrucao = `
        SELECT * FROM peixes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
        .then(function(resultado) {
            return resultado;
        })
        .catch(function(erro) {
            throw new Error('Erro ao listar peixes no banco de dados: ' + erro.message);
        });
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO peixes (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
        .then(function(resultado) {
            return resultado;
        })
        .catch(function(erro) {
            throw new Error('Erro ao cadastrar peixe no banco de dados: ' + erro.message);
        });
}

module.exports = {
    cadastrar,
    listarpeixes
};
