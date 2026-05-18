var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");

router.post("/cadastrar/:idEquipe", function (req, res) {
    pokemonController.cadastrar(req, res);
})

router.get("/listar/:idEquipe", function(req, res){
    pokemonController.listarPorEquipe(req, res);
});

module.exports = router;