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

module.exports = {
    menuPrompts
}