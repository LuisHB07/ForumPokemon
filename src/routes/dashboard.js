var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/tipos/:idUsuario", function(req, res){
    dashboardController.buscarTipos(req, res);
});

router.get("/posts/:idUsuario", function(req, res){
    dashboardController.buscarPostsPorDia(req, res);
});

router.get("/categorias/:idUsuario", function(req, res){
    dashboardController.buscarCategorias(req, res);
});

router.get("/comunidade", function(req, res){
    dashboardController.buscarPokemonMaisUsado(req, res);
});

module.exports = router;