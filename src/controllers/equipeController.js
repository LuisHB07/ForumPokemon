var equipeModel = require("../models/equipeModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer
    var idUsuario = req.params.idUsuario;

    if (nome == undefined) {
        res.status(400).send("O nome da equipe está undefined!")
    } else if (idUsuario == undefined){
        res.status(400).send("O id do usuário está undefined!")
    } else {
        equipeModel.cadastrar(nome, idUsuario)
            .then(function(resultado){
                res.json(resultado)
            })
            .catch(function(erro) {
                console.log(erro)
                res.status(500).json(erro.sqlMessage)
            })
    }
}

function listarPorUsuario(req, res){
    var idUsuario = req.params.idUsuario;

    equipeModel.listarPorUsuario(idUsuario)
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
function deletar(req, res){
    var idEquipe = req.params.idEquipe

    equipeModel.deletar(idEquipe)
        .then(function(resultado){
            res.json(resultado)
        })
        .catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
}

module.exports = {
    cadastrar,
    listarPorUsuario,
    deletar
}