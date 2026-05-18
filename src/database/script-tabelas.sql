-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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