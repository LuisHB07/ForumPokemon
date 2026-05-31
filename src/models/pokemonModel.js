var database = require("../database/config")

function cadastrar(nome, tipo1, tipo2, idEquipe){
    var instrucaoSql = `
        INSERT INTO pokemon (nome, tipo1, tipo2, fkEquipe) VALUES 
        ('${nome}', '${tipo1}', '${tipo2}', '${idEquipe}' )
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarPorEquipe(idEquipe){
    var instrucaoSql = `
        SELECT idPokemon, nome, tipo1, tipo2 FROM pokemon WHERE fkEquipe = ${idEquipe}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar, 
    listarPorEquipe
}