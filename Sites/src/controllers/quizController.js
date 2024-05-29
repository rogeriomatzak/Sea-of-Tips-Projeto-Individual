var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var idUsuario = req.body.idUsuario;
  var idQuiz = req.body.idQuiz;
  var pontuacao = req.body.pontuacao;

  if (idUsuario == undefined) {
    res.status(400).send("Seu IDQUiz está undefined!");
  } else if (idQuiz == undefined) {
    res.status(400).send("Seu Quiz está undefined!");
  } else if (pontuacao == undefined) {
    res.status(400).send("Sua pontuacao está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel
      .cadastrar(nome, email, senha, peixes)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar,
};
