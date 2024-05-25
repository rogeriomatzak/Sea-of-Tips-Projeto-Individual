var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } 
    if (senha == undefined) {
        return res.status(400).send("Sua senha está indefinida!");
    } 

    usuarioModel.autenticar(email, senha)
        .then(resultadoAutenticar => {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

            if (resultadoAutenticar.length == 1) {
                const usuario = resultadoAutenticar[0];
                res.json({
                    id: usuario.idUsuario,
                    email: usuario.email,
                    nome: usuario.nome,
                    senha: usuario.senha,
                    fkPeixe: usuario.fkPeixe
                });
            } else if (resultadoAutenticar.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch(erro => {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkPeixe = req.body.fkPeixeServer;

    if (nome == undefined) {
        return res.status(400).send("Seu nome está undefined!");
    } 
    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } 
    if (senha == undefined) {
        return res.status(400).send("Sua senha está undefined!");
    } 
    if (fkPeixe == undefined) {
        return res.status(400).send("Seu peixe favorito está undefined!");
    } 

    usuarioModel.cadastrar(nome, email, senha, fkPeixe)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
