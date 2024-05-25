var peixeModel = require("../models/peixeModel");

function listarpeixes(req, res) {
    peixeModel.listarpeixes()
        .then(function(resultado){
            res.status(200).json(resultado);
        })
        .catch(function(erro){
            res.status(500).json({ error: "Erro ao listar peixes", message: erro.message });
        });
}

function cadastrar(req, res) {
    var nome = req.body.nome;

    if (!nome) {
        return res.status(400).json({ error: "Nome não fornecido" });
    }

    peixeModel.cadastrar(nome)
        .then(function(){
            res.status(200).json({ message: "Peixe cadastrado com sucesso" });
        })
        .catch(function(erro){
            res.status(500).json({ error: "Erro ao cadastrar peixe", message: erro.message });
        });
}

module.exports = {
    listarpeixes,
    cadastrar
};
