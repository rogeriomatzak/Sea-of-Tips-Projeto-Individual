var express = require("express");
var router = express.Router();

var peixeController = require("../controllers/peixeController");

// GET /peixe/listarpeixes
router.get("/listarpeixes", function (req, res) {
  peixeController.listarpeixes(req, res);
});

module.exports = router;
