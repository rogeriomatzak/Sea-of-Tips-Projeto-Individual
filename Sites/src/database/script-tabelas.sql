create database seaoftipes;
use seaoftipes;

Create table peixes(
idPeixe int primary key auto_increment,
nome varchar(45));

insert into peixes value 
(default,'Dourado' ),
(default,'Pintado' ),
(default,'Pacu' ),
(default,'Tucunaré' ),
(default,'Carpa' ),
(default,'Pirarucu' ),
(default,'Peixe-Espada' ),
(default,'Robalo' );

select *from peixes;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkPeixe int ,
foreign key (fkPeixe) references peixes (idPeixe));

INSERT INTO usuario (nome, email, senha, fkPeixe) VALUES 
('Usuario1', 'usuario1@exemplo.com', 'senha1', 1),
('Usuario2', 'usuario2@exemplo.com', 'senha2', 2),
('Usuario3', 'usuario3@exemplo.com', 'senha3', 3),
('Usuario4', 'usuario4@exemplo.com', 'senha4', 4),
('Usuario5', 'usuario5@exemplo.com', 'senha5', 5),
('Usuario6', 'usuario6@exemplo.com', 'senha6', 6),
('Usuario7', 'usuario7@exemplo.com', 'senha7', 7),
('Usuario8', 'usuario8@exemplo.com', 'senha8', 8);



select *from usuario;
	
create table quiz(
idTentativa int primary key auto_increment,
fkUsuario int,
horario timestamp default current_timestamp,
pontuacao int,
constraint foreign key (fkUsuario) references usuario(idUsuario));

select *from quiz;

SELECT pontuacao
    FROM quiz
    JOIN usuario ON fkUsuario = idUsuario
    WHERE idUsuario =1
    GROUP BY pontuacao,horario
    ORDER BY horario;
    








