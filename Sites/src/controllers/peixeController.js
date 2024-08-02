var peixeModel = require("../models/peixeModel");

function listar(req, res) {
  peixeModel.listar()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ mensagem: "Erro ao listar peixes" });
    });
}
module.exports = {
  listar,
};




