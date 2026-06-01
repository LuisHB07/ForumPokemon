CREATE DATABASE PokeTeam;
USE PokeTeam;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);
CREATE TABLE equipe (
	idEquipe INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    fkUsuario INT,
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);
CREATE TABLE pokemon (
	idPokemon INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    tipo1 VARCHAR(45) NOT NULL,
    tipo2 VARCHAR(45),
    fkEquipe INT,
    CONSTRAINT fkEquipe FOREIGN KEY (fkEquipe) REFERENCES equipe(idEquipe)
);
CREATE TABLE ataque(
	idAtaque INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    categoria VARCHAR(45) NOT NULL,
    CONSTRAINT chCategoria CHECK (categoria IN ('Especial', 'Status', 'Físico')),
    fkPokemon INT,
    CONSTRAINT fkPokemon FOREIGN KEY (fkPokemon) REFERENCES pokemon(idPokemon)
);
CREATE TABLE post (
    idPost INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    dataPost DATETIME DEFAULT NOW(),
    fkUsuario INT,
    fkEquipe INT,
    CONSTRAINT fk_post_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fk_post_equipe FOREIGN KEY (fkEquipe) REFERENCES equipe(idEquipe)
);

select * from usuario;