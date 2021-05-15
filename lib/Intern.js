const Index = require('../index');
const Employee = require('./Employee');
function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.icon = '<img class = "iconE" src="https://img.icons8.com/material/24/000000/student-male--v1.png"/>';
    //console.log(this);
    this.roleManager = false;
    this.roleEngineer = false;
    this.roleIntern = true;

}
Intern.prototype.getSchool = function(){
    return{school:this.school};
}
module.exports = Intern;