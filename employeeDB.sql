DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int,
  active TINYINT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  role_id int not NULL AUTO_INCREMENT,
  title varchar(30),
  salary decimal,
  department_id int,
  primary key (role_id)
);

CREATE TABLE department (
  department_id int not NULL auto_increment,
  department_name varchar(30),
  primary key (department_id)
);

INSERT INTO employee (first_name, last_name, role_id, active, start_date, manager_id)
VALUES ("bobby", "hoffman", 1, 2, "2020-03-01", null),
		   ("mike", "fearnley", 1, 1, "2020-03-02", 1);
		 
INSERT INTO role (title, salary, department_id)
VALUES ("junior tech", 50000, 1),
		   ("senior tech", 100000, 1);

INSERT INTO department (department_name)
VALUES ("infotech");

SELECT (id, first_name, last_name, manager_id, active, start_date, end_date, title, salary, department_name)
FROM employee
INNER JOIN role ON employee.role_id
INNER JOIN department ON role.department_id
WHERE employee.active = 1
		 

		 