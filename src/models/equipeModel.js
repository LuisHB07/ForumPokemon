var database = require("../database/config")

function cadastrar(nome, idUsuario) {
    var instrucaoSql = `
        INSERT INTO equipe (nome, fkUsuario) VALUES ('${nome}', '${idUsuario}')
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}
function listarPorUsuario(idUsuario){
    var instrucaoSql = `
        SELECT idEquipe, nome FROM equipe WHERE fkUsuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function deletar(idEquipe) {
    var instrucaoSql1 = `
    DELETE ataque FROM ataque 
    JOIN pokemon ON ataque.fkPokemon = pokemon.idPokemon 
    WHERE pokemon.fkEquipe = ${idEquipe}
    `
    var instrucaoSql2 = `
    DELETE FROM pokemon WHERE fkEquipe = ${idEquipe}
    `
    var instrucaoSql3 = `
    DELETE FROM post WHERE fkEquipe = ${idEquipe}
    `
    var instrucaoSql4 = `
    DELETE FROM equipe WHERE idEquipe = ${idEquipe}
    `

    return database.executar(instrucaoSql1)
        .then(function(){
            return database.executar(instrucaoSql2)
        })
        .then(function(){
            return database.executar(instrucaoSql3)
        })
        .then(function(){
            return database.executar(instrucaoSql4)
        })
}


module.exports = {
    cadastrar,
    listarPorUsuario,
    deletar
}