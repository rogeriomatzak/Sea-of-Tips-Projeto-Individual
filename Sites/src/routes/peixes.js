var express = require("express");
var router = express.Router();
var peixeController = require("../controllers/peixeController");

router.get("/listar", function (req, res) {
  peixeController.listar(req, res);
});

module.exports = router;
