const menuPrompts = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would like to do?',
        choices:[
            {name: 'View All Departments', value:'VAD'},
            {name: 'View All Roles', value: 'VAR'},
            {name: 'View All Employees', value:'VAE'},
            {name: 'Add A Department', value:'AAD'},
            {name: 'Add A Role', value:'AAR'}, 
            {name: 'Add An Employee', value:'AAE'}, 
            {name: 'Update An Employee Role', value:'UER'}
        ]
    }
];

const departmentPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter department name: '
    }
];

rolePropmts = (choices) => [
    {
        type: "input",
        name: "title",
        message: "Enter role title: "
    },
    {
        type: "input",
        name: "salary",
        message: "What's the salary for the role? "
    },
    {
        type: "list",
        name: "departmentId",
        message: "Select department for this role: ",
        choices: choices
    }
];

employeePrompts = (roleChoices, managerChoices) => [
    {
        type: "input",
        name: "firstName",
        message: "Enter employee first name: "
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter employee last name: "
    },
    {
        type: "list",
        name: "roleId",
        message: "What is employee's role? ",
        choices: roleChoices
    },
    {
        type: "list",
        name: "managerId",
        message: "Who is employee's manager? ",
        choices: [
            {value: null, name: 'None' },
            ...managerChoices
        ]
    }
];

updateEmployeeRolePrompt = (roleChoices, managerChoices) => [
    {
        type: "list",
        name: "id",
        message: "Which employee do you want to update role?",
        choices: managerChoices
    },
    {
        type: "list",
        name: "roleId",
        message: "What is employee's new role? ",
        choices: roleChoices
    } 
];



module.exports = {
    menuPrompts,
    departmentPrompts,
    rolePropmts,
    employeePrompts
}