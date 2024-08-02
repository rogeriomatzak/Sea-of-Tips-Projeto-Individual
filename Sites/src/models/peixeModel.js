var database = require("../database/config");

function listar() {
  var instrucao = "SELECT * FROM peixes";
  return database.executar(instrucao);
}
module.exports = {
  listar,
  
};
