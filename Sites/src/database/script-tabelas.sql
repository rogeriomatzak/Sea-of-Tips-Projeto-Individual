create database seaoftypes;
use seaoftypes;

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
id int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkPeixe int ,
foreign key (fkPeixe) references peixes (idPeixe));

select *from usuario;
	


create table quiz(
idQuiz int primary key auto_increment);

create table tentativa(
idTentativa int primary key auto_increment,
fkUsuario int,
fkQuiz int,
horario timestamp default current_timestamp,
qtd_pontos char(3),
constraint foreign key (fkQuiz) references  quiz (idQuiz),
constraint foreign key (fkUsuario) references usuario(id));


