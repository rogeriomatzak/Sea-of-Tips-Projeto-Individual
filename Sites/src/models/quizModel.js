var database = require("../database/config")


function cadastrar(nome, email, senha,peixes ) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
   
    var instrucaoSql = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, horario, pontuacao) VALUES ('${nome}', '${email}', '${senha}','${peixes}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};