const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./src/prompts');
const sqlquery = require('./src/query');
const { addDepartment } = require('./src/query');

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
    inquirer.prompt(prompts.menuPrompts)
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
        }
        
    });
};

promptAddDepartment = () => {
    inquirer.prompt(prompts.departmentPrompts)
    .then( department => {
        console.log(department);
        sqlquery.addDepartment(department, mysqlConn, promptMenu);
    });
};