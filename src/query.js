class SQLQuery{

    // view all departments
    viewDepartmens(){
        return 'SELECT id, name FROM department';
    }

    addDepartment(department){
        return `INSERT INTO department (name) VALUES ('${department.name}')`;
    }

    viewRoles(){
        return `SELECT r.title, r.id, d.name, r.salary FROM role r INNER JOIN department d ON d.id = r.department_id`;
    }

    addRole(role){
        return `INSERT INTO role (title, salary, department_id) VALUES ('${role.title}', ${role.salary}, ${role.departmentId})`;
    }

    viewEmployees(){      
        return`
        SELECT e.id, e.first_name, e.last_name, r.title, d.name as department, r.salary,
        (SELECT m.first_name FROM employee m 
        where e.manager_id IS NOT NULL AND m.id = e.manager_id) AS manager
        FROM employee e, role r, department d
        WHERE r.id = e.role_id AND d.id = r.department_id`;
    }

    addEmployee(employee){
        return `
        INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${employee.firstName}', '${employee.lastName}', ${employee.roleId}, ${employee.managerId})`;
    }

    updateEmployee(employee){
        return `UPDATE employee SET role_id = ${employee.id} WHERE id=${employee.roleId}`;
    }

}