CREATE DATABASE seaoftipes;
USE seaoftipes;

CREATE TABLE peixes (
    idPeixe INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

INSERT INTO peixes (nome) VALUES 
    ('Dourado'),
    ('Pintado'),
    ('Pacu'),
    ('Tucunaré'),
    ('Carpa'),
    ('Pirarucu'),
    ('Peixe-Espada'),
    ('Robalo');

SELECT * FROM peixes;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    fkPeixe INT,
    FOREIGN KEY (fkPeixe) REFERENCES peixes(idPeixe)
);

INSERT INTO usuario (nome, email, senha, fkPeixe) VALUES 
    ('Usuario1', 'usuario1@exemplo.com', 'senha1', 1),
    ('Usuario2', 'usuario2@exemplo.com', 'senha2', 2),
    ('Usuario3', 'usuario3@exemplo.com', 'senha3', 3),
    ('Usuario4', 'usuario4@exemplo.com', 'senha4', 4),
    ('Usuario5', 'usuario5@exemplo.com', 'senha5', 5),
    ('Usuario6', 'usuario6@exemplo.com', 'senha6', 6),
    ('Usuario7', 'usuario7@exemplo.com', 'senha7', 7),
    ('Usuario8', 'usuario8@exemplo.com', 'senha8', 8);

SELECT * FROM usuario;

CREATE TABLE quiz (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    horario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pontuacao INT CHECK (pontuacao BETWEEN 0 AND 10),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO quiz (fkUsuario, pontuacao) VALUES 
    (1, 8),
    (2, 7),
    (3, 9),
    (4, 6),
    (5, 10),
    (6, 5);

SELECT * FROM quiz;

SELECT pontuacao
FROM quiz
JOIN usuario ON fkUsuario = idUsuario
WHERE idUsuario = 1
GROUP BY pontuacao, horario
ORDER BY horario;
