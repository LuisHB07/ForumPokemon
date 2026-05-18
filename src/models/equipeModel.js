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

async function deletar(idEquipe) {
    var instrucaoSql1 = `
        DELETE ataque FROM ataque JOIN pokemon ON ataque.fkPokemon = pokemon.idPokemon WHERE pokemon.fkEquipe = ${idEquipe}
    `
    var instrucaoSql2 = `
        DELETE FROM pokemon WHERE fkEquipe = ${idEquipe}
    `
    var instrucaoSql3 = `
        DELETE FROM equipe WHERE idEquipe = ${idEquipe}
    `
    console.log("Executando a instrução SQL 1: \n")
    await database.executar(instrucaoSql1)

    console.log("Executando a instrução SQL 2: \n")
    await database.executar(instrucaoSql2)
    
    console.log("Executando a instrução SQL 3: \n")
    return database.executar(instrucaoSql3)
}

module.exports = {
    cadastrar,
    listarPorUsuario,
    deletar
}