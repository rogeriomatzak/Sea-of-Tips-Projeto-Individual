var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/mensagem", function (req, res) {
    quizController.mensagem(req, res);
})
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


module.exports = router;

