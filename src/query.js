require("console.table");

class SQLQuery {

    executeQuery(conn, sql){
        return conn.query(sql, (err, res) => {
            if (err) throw err;
            
            console.log('\n\r');
            console.table(res);
            console.log('\n\r');
        });
    }

    // view all departments
    viewDepartments(conn){
        const sql = 'SELECT id, name FROM department';
        return this.executeQuery(conn, sql);
    }

    addDepartment(department){
        return `INSERT INTO department (name) VALUES ('${department.name}')`;
    }

    viewRoles(conn){
        const sql = `SELECT r.title, r.id, d.name, r.salary FROM role r INNER JOIN department d ON d.id = r.department_id`;
        return this.executeQuery(conn, sql);
    }

    addRole(role){
        return `INSERT INTO role (title, salary, department_id) VALUES ('${role.title}', ${role.salary}, ${role.departmentId})`;
    }

    viewEmployees(conn){      
        const sql = `SELECT e.id, e.first_name, e.last_name, r.title, d.name as department, r.salary,
        (SELECT m.first_name FROM employee m 
        where e.manager_id IS NOT NULL AND m.id = e.manager_id) AS manager
        FROM employee e, role r, department d
        WHERE r.id = e.role_id AND d.id = r.department_id`;

        return this.executeQuery(conn, sql);
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

module.exports=new SQLQuery();