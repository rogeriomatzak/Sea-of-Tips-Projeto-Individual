var database = require("../database/config")


function mensagem(idUsuario, pontuacao) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mensagem():", idUsuario, pontuacao);


    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, pontuacao) VALUES ('${idUsuario}',  '${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function SelectQuiz(idUsuario, pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, pontuacao)
    var instrucao = `SELECT pontuacao
    FROM quiz
    JOIN usuario ON fkUsuario = idUsuario
    WHERE idUsuario =${idUsuario}
    GROUP BY pontuacao,horario
    ORDER BY horario;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function buscarQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucaoSql = `SELECT pontuacao
    FROM quiz
    JOIN usuario ON fkUsuario = idUsuario
    WHERE idUsuario =${idUsuario}
    GROUP BY pontuacao,horario
    ORDER BY horario;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimoQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucaoSql = `SELECT pontuacao
    FROM quiz
    JOIN usuario ON fkUsuario = idUsuario
    WHERE idUsuario =${idUsuario}
    GROUP BY pontuacao,horario
    ORDER BY horario;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function calcularMediaPontuacao(idUsuario) {
    console.log("Calculando média de pontuação para o usuário:", idUsuario);

    var instrucaoSql = `
        SELECT 
        (AVG(pontuacao) / 10) * 100 AS mediaPercentual
    FROM quiz
    WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function obterClassificacao() {
    const instrucaoSql = `
        SELECT u.nome, q.pontuacao
FROM usuario u
JOIN (
    SELECT fkUsuario, MAX(pontuacao) as pontuacao
    FROM quiz
    GROUP BY fkUsuario
) q ON u.idUsuario = q.fkUsuario
ORDER BY q.pontuacao DESC;
    `;
    return database.executar(instrucaoSql);
}
module.exports = {
    mensagem,
    SelectQuiz,
    buscarQuiz,
    buscarUltimoQuiz,
    calcularMediaPontuacao,
    obterClassificacao
};