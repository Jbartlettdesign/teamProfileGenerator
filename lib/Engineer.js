const Index = require('../index');
const Employee = require('./Employee');
function Engineer(name, id, email, gitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
    this.icon = '<img class ="iconE" src="https://img.icons8.com/android/24/000000/engineering.png"/>';
    this.roleManager = false;
    this.roleEngineer = true;
    this.roleIntern = false;



    //this.role = engineerRole;

    //console.log(this);
}
module.exports = Engineer;
