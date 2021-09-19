const mysql = require('mysql2');
const fs = require('fs');

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
});