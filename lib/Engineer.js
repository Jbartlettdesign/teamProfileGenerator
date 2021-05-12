const Index = require('../index');
const Employee = require('./Employee');
function Engineer(name, id, email, gitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
    console.log(this);
}
module.exports = Engineer;
