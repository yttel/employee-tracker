DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int,
  active TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  role_id int not NULL AUTO_INCREMENT,
  title varchar(30),
  salary decimal,
  dept_id int,
  primary key (role_id)
);

CREATE TABLE department (
  dept_id int not NULL auto_increment,
  dept_name varchar(30),
  primary key (dept_id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Letty","Bedard",9,0),

("Kimbra","Bragg",7,1),

("Pearl","Bowens",5,1),

("Lloyd","Segers",5,1),

("Marianna","Breckenridge",1,1),

("Tiera","Labombard",1,1),

("Sheridan","Frigo",1,1),

("May","Kuehl",3,1),

("Kenia","Wheat",3,1),

("Eldora","Caudillo",3,1),

("Chun","Hunnicutt",8,2),

("Franklyn","Ferris",8,2),

("Josue","Kluge",8,2),

("Yevette","Brisker",8,2),

("Cathern","Wagar",8,2),

("Annabel","Bertelsen",8,2),

("Cherish","Ram",6,3),

("Gennie","Tenenbaum",6,3),

("Amber","Ivory",6,3),

("Refugia","Bernabe",6,3),

("Darcy","Rogers",6,3),

("Yuki","Eichman",6,3),

("Georgiana","Messier",6,3),

("Maurine","Flinn",6,3),

("Dona","Haver",6,3),

("Nelson","Mayers",6,4),

("My","Gaut",6,4),

("Hassie","Michelle",6,4),

("Shandra","Mark",6,4),

("Adam","Allie",6,4),

("Brett","Rapoza",6,4),

("Evan","Swett",6,4),

("Addie","Lona",6,4),

("Haywood","Jarrard",6,4),

("Penni","Seman",4,8),

("Derick","Fish",4,8),

("Burt","Janusz",4,8),

("Maple","Spiegel",4,8),

("Randolph","Hotz",4,8),

("Marco","Zufelt",4,8),

("Alica","Mccallister",4,8),

("Herlinda","Schuessler",4,8),

("Jared","Folsom",4,9),

("Victor","Ellsworth",4,9),

("Wonda","Berrian",4,9),

("Alana","Angelos",4,9),

("Marcie","Cabiness",4,9),

("Cleo","Muldowney",4,9),

("Kasie","Campanelli",4,9),

("Fredia","Mallet",4,9),

("Sadie","Silcox",4,10),

("Tamara","Kenworthy",4,10),

("Leanna","Vanriper",4,10),

("Renaldo","Newhart",4,10),

("Vivan","Starks",4,10),

("Santiago","Aarons",4,10),

("Sabra","Harmon",4,10),

("Constance","Scoby",4,10),

("Bernadine","Bulter",4,10),

("Velvet","Lawhorn",2,5),

("Monty","Giuliani",2,5),

("Myriam","Manderscheid",2,5),

("Etha","Witherow",2,5),

("Tonda","Messerly",2,5),

("Aleshia","Garmany",2,5),

("Marva","Rendell",2,5),

("Alvin","Bold",2,5),

("Apryl","Arvizu",2,5),

("Marshall","Brasil",2,5),

("Juanita","Freeberg",2,5),

("Crystal","Vancleave",2,5),

("Zetta","Shealey",2,5),

("Bernie","Blackstone",2,5),

("Caterina","Durgin",2,6),

("Antwan","Goley",2,6),

("Bernadette","Daquila",2,6),

("Qiana","Martins",2,6),

("Akilah","Almaguer",2,6),

("Maragaret","Coffman",2,6),

("Shauna","Coniglio",2,6),

("Farah","World",2,6),

("Ulysses","Chaves",2,6),

("Tatiana","Tobler",2,6),

("Cherri","Ruiz",2,6),

("Charis","Dyer",2,6),

("Dominica","Kerlin",2,6),

("Jorge","Berman",2,6),

("Sofia","Thorne",2,7),

("Andreas","Helgeson",2,7),

("Karen","Dix",2,7),

("Donald","Spelman",2,7),

("Waneta","Basaldua",2,7),

("Mia","Talamantez",2,7),

("Robbie","Hendrick",2,7),

("Providencia","Jardin",2,7),

("Rikki","Ascencio",2,7),

("Seth","Vanderwal",2,7),

("Roseann","Etter",2,7),

("Hettie","Massingale",2,7),

("Ana","Villalpando",2,7),

("Lawana","Taing",2,7);

INSERT INTO role (title, salary, dept_id)
VALUES ("team mgr", 80000, 1),
		   ("adjuster", 45000, 1),
		   ("branch mgr", 110000, 2),
		   ("sales rep", 60000, 2),
		   ("regional mgr", 175000, 3),
		   ("compliance analyst", 80000, 3),
		   ("director", 150000, 4),
		   ("analyst", 90000, 4),
       ("CEO", 1000000, 5);

INSERT INTO department (dept_name)
VALUES ("claims"), ("sales"), ("product management"), ("research"), ("executive");

		 

		 