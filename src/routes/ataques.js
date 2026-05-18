var express = require("express");
var router = express.Router();

var ataqueController = require("../controllers/ataqueController");

router.post("/cadastrar/:idPokemon", function (req, res) {
    ataqueController.cadastrar(req, res);
})

router.get("/listar/:idPokemon", function(req, res){
    ataqueController.listarPorPokemon(req, res);
});

module.exports = router;