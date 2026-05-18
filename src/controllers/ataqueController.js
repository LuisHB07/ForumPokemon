var ataqueModel = require("../models/ataqueModel")

function cadastrar(req, res){
    var nome = req.body.nomeServer
    var tipo = req.body.tipoServer
    var categoria = req.body.categoriaServer
    var idPokemon = req.params.idPokemon

    if(nome == undefined){
        res.status(400).send("O nome do ataque está undefined!")
    }else if(tipo == undefined){
        res.status(400).send("O tipo está undefined!")
    }else if(categoria == undefined){
        res.status(400).send("A categoria está undefined!")
    }else {
        ataqueModel.cadastrar(nome, tipo, categoria, idPokemon)
            .then(function(resultado){
                res.json(resultado)
            })
            .catch(function(erro){
                console.log(erro)
                res.status(500).json(erro.sqlMessage)
            })
    }
}

function listarPorPokemon(req, res){
    var idPokemon = req.params.idPokemon

    ataqueModel.listarPorPokemon(idPokemon)
        .then(function(resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado)
            }else {
                res.status(204).json([])
            }
        })
        .catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
}

module.exports = {
    cadastrar, 
    listarPorPokemon
}