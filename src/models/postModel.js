var database = require("../database/config");

function publicar(titulo, descricao, fkEquipe, idUsuario){
    var instrucaoSql = `
        INSERT INTO post (titulo, descricao, fkUsuario, fkEquipe) VALUES 
        ('${titulo}', '${descricao}', ${idUsuario}, ${fkEquipe});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(){
    var instrucaoSql = `
    SELECT p.idPost, p.titulo, p.descricao, p.fkEquipe, u.nome AS nomeUsuario, 
    e.nome AS nomeEquipe, u.idUsuario AS idUsuario FROM post p 
    JOIN usuario u ON p.fkUsuario = u.idUsuario 
    JOIN equipe e ON p.fkEquipe = e.idEquipe;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function deletar(idPost){
    var instrucaoSql = `
        DELETE FROM post WHERE idPost = ${idPost}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    publicar,
    listar,
    deletar
}