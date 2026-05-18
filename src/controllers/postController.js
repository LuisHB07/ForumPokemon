var postModel = require("../models/postModel")
const { listarPorEquipe } = require("./pokemonController")

function publicar(req, res){
    var titulo = req.body.tituloServer
    var descricao = req.body.descricaoServer
    var fkEquipe = req.body.fkEquipeServer
    var idUsuario = req.params.idUsuario

    if(titulo == undefined){
        res.status(400).send("Titulo está undefined!")
    }else if(descricao == undefined){
        res.status(400).send("Descrição está undefined!")
    }else if(fkEquipe == undefined){
        res.status(400).send("Equipe está undefined!")
    } else {
        postModel.publicar(titulo, descricao, fkEquipe, idUsuario)
        .then(function(resultado){
            res.json(resultado)
        })
        .catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
    }
}

function listar(req, res){
    postModel.listar()
        .then(function(resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletar(req, res){
    var idPost = req.params.idPost

    postModel.deletar(idPost)
        .then(function(resultado){
            res.json(resultado)
        })
        .catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
}

module.exports = {
    publicar,
    listar,
    deletar
}