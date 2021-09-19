CREATE DATABASE IF NOT EXISTS employeeTracker;

USE employeeTracker;

CREATE TABLE IF NOT EXISTS department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10.3) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);
