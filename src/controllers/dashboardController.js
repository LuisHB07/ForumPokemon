var dashboardModel = require("../models/dashboardModel")

function buscarTipos(req, res){
    var idUsuario = req.params.idUsuario

    dashboardModel.buscarTipo1(idUsuario)
        .then(function(resultado1){
            dashboardModel.buscarTipo2(idUsuario)
                .then(function(resultado2){
                    var listaTipos = []

                    for(let i = 0; i < resultado1.length; i++){
                        listaTipos.push(resultado1[i])
                    }

                    for(let i = 0; i < resultado2.length; i++){
                        listaTipos.push(resultado2[i])
                    }

                    res.status(200).json(listaTipos)
                })
        })
        .catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
}

function buscarPostsPorDia(req, res){
    var idUsuario = req.params.idUsuario

    dashboardModel.buscarPostsPorDia(idUsuario)
        .then(function(resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado)
            } else {
                res.status(204).json([])
            }
        }).catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        });
}

function buscarCategorias(req, res){
    var idUsuario = req.params.idUsuario

    dashboardModel.buscarCategorias(idUsuario)
        .then(function(resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado)
            } else {
                res.status(204).json([])
            }
        }).catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
}

function buscarPokemonMaisUsado(req, res){
    dashboardModel.buscarPokemonMaisUsado().then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado)
        } else {
            res.status(204).json([])
        }
    }).catch(function(erro){
        console.log(erro)
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    buscarTipos,
    buscarPostsPorDia,
    buscarCategorias,
    buscarPokemonMaisUsado
}