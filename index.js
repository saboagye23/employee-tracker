const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./src/prompts');

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
    .then(menu => {
        console.log(menu);
    });
};