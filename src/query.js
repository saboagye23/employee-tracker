require("console.table");

class SQLQuery {

    executeViewQuery(conn, sql, callback){
        return conn.query(sql, (err, res) => {
            if (err) return console.error(err);
            
            console.log('\n\r');
            console.table(res);
            console.log('\n\r');
            callback();
        });
    }

    execute(conn, sql, callback){
        return conn.execute(sql, (err, res) => {
            if (err) return console.error(err);
            callback();
        });
    }

    // view all departments
    viewDepartments(conn, callback){
        const sql = 'SELECT id, name FROM department';
        return this.executeViewQuery(conn, sql, callback);
    }

    addDepartment(department, conn, callback){
        const sql = `INSERT INTO department (name) VALUES ('${department.name}')`;
        return this.execute(conn, sql, callback);
    }

    getDepartmentPromptJson(conn, promptCallback){
        const sql = 'SELECT id, name FROM department';
        conn.query(sql, (err, res) => {
            if (err) return [];
            const departChoices = res.map(({ id, name }) => ({
                value: id, name: name
            }));

            promptCallback(departChoices);
        });
    }

    viewRoles(conn, callback){
        const sql = `SELECT r.title, r.id, d.name, r.salary FROM role r INNER JOIN department d ON d.id = r.department_id`;
        return this.executeViewQuery(conn, sql, callback);
    }

    addRole(role, conn, callback){
        const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${role.title}', ${role.salary}, ${role.departmentId})`;
        return this.execute(conn, sql, callback);
    }

    getRolePromptJson(conn, promptCallback){
        const sql = 'SELECT id, title FROM role';
        conn.query(sql, (err, res) => {
            if (err) return [];
            const roleChoices = res.map(({ id, title }) => ({
                value: id, name: title
            }));

            promptCallback(roleChoices);
        });
    }

    viewEmployees(conn, callback){      
        const sql = `SELECT e.id, e.first_name, e.last_name, r.title, d.name as department, r.salary,
        (SELECT m.first_name FROM employee m 
        where e.manager_id IS NOT NULL AND m.id = e.manager_id) AS manager
        FROM employee e, role r, department d
        WHERE r.id = e.role_id AND d.id = r.department_id`;

        return this.executeViewQuery(conn, sql, callback);
    }

    addEmployee(employee, conn, callback){
        const sql = 
        `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${employee.firstName}', '${employee.lastName}', ${employee.roleId}, ${employee.managerId})`;
        return this.execute(conn, sql, callback);
    }

    updateEmployeeRole(employee, conn, callback){
        const sql = `UPDATE employee SET role_id = ${employee.roleId} WHERE id=${employee.id}`;
        return this.execute(conn, sql, callback);
    }

    getEmployeePromptJson(conn, promptCallback){
        const sql = 'SELECT id, first_name, last_name FROM employee';
        conn.query(sql, (err, res) => {
            if (err) return [];
            const employeeChoices = res.map(({ id, first_name, last_name }) => ({
                value: id, name: `${first_name} ${last_name}`
            }));

            promptCallback(employeeChoices);
        });
    }

}

module.exports=new SQLQuery();