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

create table usuario(
id int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkPeixe int ,
foreign key (fkPeixe) references peixes (idPeixe));