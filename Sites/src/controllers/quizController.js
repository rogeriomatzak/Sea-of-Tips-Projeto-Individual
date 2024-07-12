var quizModel = require("../models/quizModel");

function mensagem(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    quizModel.mensagem(idUsuario, pontuacao)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function SelectQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    quizModel.SelectQuiz(idUsuario)
        .then(function (resultadoChamar_Quiz) {
            res.json({ resultadoChamar_Quiz });
        });
}

function buscarQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    quizModel.buscarQuiz(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarUltimoQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    quizModel.buscarUltimoQuiz(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function calcularMediaPontuacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    quizModel.calcularMediaPontuacao(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json({ mediaPercentual: resultado[0].mediaPercentual });
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao calcular a média de pontuação.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function classificacao(req, res) {
    quizModel.obterClassificacao()
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro ao obter classificação:', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
// Função para buscar a maior pontuação de um usuário--Alteraçãoes feitas no dia 3/07/2024
function buscarMaiorPontuacao(req, res) {
    // Extrai o ID do usuário a partir do corpo da requisição
    var idUsuario = req.body.idUsuarioServer;

    // Chama o método do modelo quizModel para buscar a maior pontuação do usuário
    quizModel.buscarMaiorPontuacao(idUsuario)
        .then(function (resultado) {
            // Se a busca retornar resultados
            if (resultado.length > 0) {
                // Retorna o primeiro resultado com status 200 (OK) em formato JSON
                res.status(200).json(resultado[0]);
            } else {
                // Se não houver resultados, retorna status 204 (No Content) com uma mensagem
                res.status(204).send("Nenhuma pontuação encontrada para o usuário.");
            }
        })
        .catch(function (erro) {
            // Em caso de erro na busca, loga o erro no console
            console.log(erro);
            console.log("Houve um erro ao buscar a maior pontuação.", erro.sqlMessage);
            // Retorna status 500 (Internal Server Error) com a mensagem de erro em formato JSON
            res.status(500).json(erro.sqlMessage);
        });
}
function buscarQuantidadeTentativas(req, res) {
    // Obtém o ID do usuário a partir  da requisição
    var idUsuario = req.body.idUsuarioServer;

    // Chama o  buscarQuantidadeTentativas no quizModel, passando o ID do usuário
    quizModel.buscarQuantidadeTentativas(idUsuario)
        .then(function (resultado) {
            // Se o resultado contiver pelo menos um registro
            if (resultado.length > 0) {
                // Envia o primeiro registro encontrado como resposta, com status 200 (OK)
                res.status(200).json(resultado[0]);
            } else {
                // Se não houver registros, envia uma resposta com status 204 (Sem Conteúdo) e uma mensagem
                res.status(204).send("Nenhuma tentativa encontrada para o usuário.");
            }
        })
        .catch(function (erro) {
            // Em caso de erro, loga o erro no console
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de tentativas.", erro.sqlMessage);
            // Envia uma resposta com status 500 (Erro Interno do Servidor) e a mensagem de erro
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    mensagem,
    SelectQuiz,
    buscarQuiz,
    buscarUltimoQuiz,
    calcularMediaPontuacao,
    classificacao,
    buscarMaiorPontuacao,
    buscarQuantidadeTentativas
};
