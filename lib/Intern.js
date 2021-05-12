const Index = require('../index');
const Employee = require('./Employee');
function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    console.log(this);
}
module.exports = Intern;