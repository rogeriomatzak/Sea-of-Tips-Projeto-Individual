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

module.exports = {
    mensagem,
    SelectQuiz,
    buscarQuiz,
    buscarUltimoQuiz,
    calcularMediaPontuacao,
    classificacao
};
