INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

/*Lead Employee*/
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kate", "Mellor", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leen", "Hurst", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gary", "Leer",5, null);

/*Non Lead Employee*/
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Norah", "Rios", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Shiv", "Betts", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Cruise", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daisy", "Hooper", 3, 3);