var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/mensagem", function (req, res) {
    quizController.mensagem(req, res);
});

router.post("/SelectQuiz", function (req, res) {
    quizController.SelectQuiz(req, res);
});

router.post("/buscarQuiz", function (req, res) {
    quizController.buscarQuiz(req, res);
});

router.post("/buscarUltimoQuiz", function (req, res) {
    quizController.buscarUltimoQuiz(req, res);
});

router.post("/calcularMediaPontuacao", function (req, res) {
    quizController.calcularMediaPontuacao(req, res);
});

router.get("/classificacao", function (req, res) {
    quizController.classificacao(req, res);
});
router.post("/buscarMaiorPontuacao", function (req, res) {
    quizController.buscarMaiorPontuacao(req, res);
});
router.post("/buscarQuantidadeTentativas", function (req, res) {
    quizController.buscarQuantidadeTentativas(req, res);
});
router.post("/calcularMediaGeral", function (req, res) {
    quizController.calcularMediaGeral(req, res);
});
router.post("/buscarMenorPontuacao", function (req, res) {
    quizController.buscarMenorPontuacao(req, res);
});
module.exports = router;
