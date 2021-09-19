const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./src/prompts');
const sqlquery = require('./src/query');

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
    startApplication();
});

startApplication = () =>{
    inquirer.prompt(prompts.menuPrompts)
    .then( ({ menu }) => {
        let r;
        switch(menu){
            case 'VAD': //View All Departments
                r = sqlquery.viewDepartments(mysqlConn);
                break;
            case 'VAR': //View All Roles
                r = sqlquery.viewRoles(mysqlConn);
                break; 
            case 'VAE': //View All Employees
                r = sqlquery.viewEmployees(mysqlConn);
            break; 
        }
       
        // Go back to menu
        if(r){
            r.on('end', (err)=>{
                if(err) console.error(err);

                startApplication();
            });
        }else{
            startApplication();
        }
        
    });
};