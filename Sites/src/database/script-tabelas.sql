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
(default,'Cascudo' ),
(default,'Tambaqui' ),
(default,'Pirarucu' ),
(default,'Peixe-Espada' ),
(default,'Pirara' ),
(default,'Traíra' ),
(default,'Bagre' ),
(default,'Robalo' );

select *from peixes;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkPeixe int ,
foreign key (fkPeixe) references peixes (idPeixe));

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
    






