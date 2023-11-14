CREATE DATABASE "vistoria_porto";

USE vistoria_porto;

CREATE TABLE IF NOT EXISTS bicicleta (
    id BIGINT PRIMARY KEY,
    nota_fiscal VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    tamanho_quadro VARCHAR(255),
    numero_serie VARCHAR(255),
    tipo VARCHAR(255),
    cor VARCHAR(255),
    acessorios VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS usuario (
    id BIGINT PRIMARY KEY,
    primeiro_nome VARCHAR(255) NOT NULL,
    sobre_nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS solicitacao (
    id BIGINT PRIMARY KEY,
    dono_solicitacao BIGINT NOT NULL,
    pais VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    bicicleta BIGINT NOT NULL,
    aprovada TINYINT NOT NULL
);