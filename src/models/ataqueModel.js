var database = require("../database/config")

function cadastrar(nome, tipo, categoria, idPokemon){
    var instrucaoSql = `
        INSERT INTO ataque (nome, tipo, categoria, fkPokemon) VALUES 
        ('${nome}', '${tipo}', '${categoria}', '${idPokemon}' )
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarPorPokemon(idPokemon){
    var instrucaoSql = `
        SELECT idAtaque, nome, tipo, categoria FROM ataque 
        WHERE fkPokemon = ${idPokemon}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar, 
    listarPorPokemon
}