var pokemonModel = require("../models/pokemonModel")

function cadastrar(req, res) {
    var nome = req.body.nomeServer
    var tipo1 = req.body.tipo1Server
    var tipo2 = req.body.tipo2Server
    var idEquipe = req.params.idEquipe

    if(nome == undefined) {
        res.status(400).send("O nome do pokemon está undefined!")
    }else if(tipo1 == undefined){
        res.status(400).send("O tipo1 está undefined!")
    }else {
        pokemonModel.cadastrar(nome, tipo1, tipo2, idEquipe)
            .then(function(resultado){
                res.json(resultado)
            })
            .catch(function(erro){
                console.log(erro)
                res.status(500).json(erro.sqlMessage)
            })
    }
}
function listarPorEquipe(req, res){
    var idEquipe = req.params.idEquipe

    pokemonModel.listarPorEquipe(idEquipe)
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
    listarPorEquipe
}