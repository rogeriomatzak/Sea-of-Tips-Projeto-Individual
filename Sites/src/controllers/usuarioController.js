var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    const usuario = resultadoAutenticar[0];
                    res.json({
                        idUsuario: usuario.idUsuario,
                        email: usuario.email,
                        nome: usuario.nome,
                        senha: usuario.senha

                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
            );
    }
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var peixes=req.body.peixesServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha,peixes)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// Função para obter os peixes favoritos de um usuário -- Alteraçãoes do dia 30/08
function obterPeixesFavoritos(req, res) {
    // Chama o método obterPeixesFavoritos do modelo de usuário (usuarioModel)
    usuarioModel.obterPeixesFavoritos()
    .then(function(resultado) {
        // Envia o resultado como uma resposta JSON
        res.json(resultado);
    })
    // Se houver um erro ao obter os peixes favoritos
    .catch(function(erro) {
        // Imprime uma mensagem de erro no console
        console.log("\nHouve um erro ao obter os peixes favoritos! Erro: ", erro.sqlMessage);
        // Responde com status 500 (erro do servidor) e a mensagem de erro em formato JSON
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    autenticar,
    cadastrar,
    obterPeixesFavoritos
};

