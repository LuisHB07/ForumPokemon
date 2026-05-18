var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController")

router.post("/publicar/:idUsuario", function(req, res){
    postController.publicar(req, res)
})

router.get("/listar", function(req, res){
    postController.listar(req, res)
})

router.delete("/deletar/:idPost", function(req, res){
    postController.deletar(req, res)
})

module.exports = router