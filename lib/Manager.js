const Index = require('../index');
const Employee = require('./Employee');
function Manager(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.icon = '<img src="https://img.icons8.com/fluent-systems-filled/48/000000/coffee.png"/>';
    this.roleManager = true;
    

    //console.log(this);
}

module.exports = Manager;
