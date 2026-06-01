var express = require("express");
var router = express.Router();

var equipeController = require("../controllers/equipeController");

router.post("/cadastrar/:idUsuario", function(req, res){
    equipeController.cadastrar(req, res);
})

router.get("/listar/:idUsuario", function(req, res){
    equipeController.listarPorUsuario(req, res);
})

router.delete("/deletar/:idEquipe", function(req, res){
    equipeController.deletar(req, res);
})

module.exports = router;