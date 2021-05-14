const Index = require('../index');
const Employee = require('./Employee');
function Manager(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.icon = '<img class = "iconM" src="https://img.icons8.com/fluent-systems-filled/48/000000/coffee.png" width="30"; height="30">';
    this.roleManager = true;
    this.roleEngineer = false;
    this.roleIntern = false;


    //console.log(this);
}

module.exports = Manager;
