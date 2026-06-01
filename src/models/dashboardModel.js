var database = require("../database/config")

function buscarTipo1(idUsuario){
    var instrucaoSql = `
        SELECT tipo1 AS tipo, COUNT(*) AS quantidade
        FROM pokemon p
        JOIN equipe e ON p.fkEquipe = e.idEquipe
        WHERE e.fkUsuario = ${idUsuario}
        AND tipo1 != ''
        GROUP BY tipo1
        ORDER BY quantidade DESC
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function buscarTipo2(idUsuario){
    var instrucaoSql = `
        SELECT tipo2 AS tipo, COUNT(*) AS quantidade
        FROM pokemon p
        JOIN equipe e ON p.fkEquipe = e.idEquipe
        WHERE e.fkUsuario = ${idUsuario}
        AND tipo2 != ''
        GROUP BY tipo2
        ORDER BY quantidade DESC
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function buscarPostsPorDia(idUsuario){
    var instrucaoSql = `
        SELECT DAYNAME(dataPost) AS dia, COUNT(*) AS quantidade
        FROM post
        WHERE fkUsuario = ${idUsuario}
        GROUP BY dia
        ORDER BY MIN(WEEKDAY(dataPost))
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function buscarCategorias(idUsuario){
    var instrucaoSql = `
        SELECT a.categoria, COUNT(*) AS quantidade
        FROM ataque a
        JOIN pokemon p ON a.fkPokemon = p.idPokemon
        JOIN equipe e ON p.fkEquipe = e.idEquipe
        WHERE e.fkUsuario = ${idUsuario}
        GROUP BY a.categoria
        ORDER BY quantidade DESC
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function buscarPokemonMaisUsado(){
    var instrucaoSql = `
        SELECT nome, COUNT(*) AS quantidade
        FROM pokemon
        GROUP BY nome
        ORDER BY quantidade DESC
        LIMIT 1
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    buscarTipo1,
    buscarTipo2,
    buscarPostsPorDia,
    buscarCategorias,
    buscarPokemonMaisUsado
}