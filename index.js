const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./src/prompts');
const sqlquery = require('./src/query');
const { exit } = require('process');

//create mysql db connection
const mysqlConn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123test#',
    database: 'employeeTracker'
});

// test mysql server connection
mysqlConn.connect((err) => {
    if(err) throw err;

    console.log(`Connected to server ${mysqlConn.threadId}`);
    promptMenu();
});

promptMenu = () =>{
    return inquirer
    .prompt(prompts.menuPrompts)
    .then( ({ menu }) => {
        switch(menu){
            case 'VAD': //View All Departments
                sqlquery.viewDepartments(mysqlConn, promptMenu);
                break;
            case 'VAR': //View All Roles
                sqlquery.viewRoles(mysqlConn, promptMenu);
                break; 
            case 'VAE': //View All Employees
                sqlquery.viewEmployees(mysqlConn, promptMenu);
                break; 
            case 'AAD': // add department
                promptAddDepartment();
                break;
            case 'AAR': // add role
                promptAddRole();
                break;
            case 'AAE': // add employee
                promptAddEmployee();
                break; 
            case 'UER': // update employee role
                promptUpdateEmployeeRole();
                break;   
        }
        process.exit(0);
    });
};

promptAddDepartment = () => {
    inquirer.prompt(prompts.departmentPrompts)
    .then( department => {
        console.log(department);
        sqlquery.addDepartment(department, mysqlConn, promptMenu);
    });
};

promptAddRole = () => {
    sqlquery.getDepartmentPromptJson(mysqlConn, (choices)=>{
        inquirer.prompt(prompts.rolePropmts(choices))
        .then( role => {
            console.log(role);
            sqlquery.addRole(role, mysqlConn, promptMenu);
        });
    });
};

promptAddEmployee = () => {
    sqlquery.getRolePromptJson(mysqlConn, (roleChoices) => {
        sqlquery.getEmployeePromptJson(mysqlConn, (employeeChoices) =>{
            inquirer.prompt(prompts.employeePrompts(roleChoices, employeeChoices))
            .then( employee => {
                console.log(employee);
                sqlquery.addEmployee(employee, mysqlConn, promptMenu);
            });

        });
    });
};

promptUpdateEmployeeRole = () => {
    sqlquery.getRolePromptJson(mysqlConn, (roleChoices) => {
        sqlquery.getEmployeePromptJson(mysqlConn, (employeeChoices) =>{
            inquirer.prompt(prompts.employeeRolePrompt(roleChoices, employeeChoices))
            .then( employee => {
                console.log(employee);
                sqlquery.updateEmployeeRole(employee, mysqlConn, promptMenu);
            });

        });
    });
};