const inquirer = require('inquirer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Index = require('../index');
manager = true;
engineer = false;
intern = false;
const fs = require('fs');
function Employee(){

this.employeePayRoll = [];

};
Employee.generateHTML = function(){
    
}
Employee.prototype.promptEmployeeStats = function () {
    if(manager === true){
        if(!this.employeePayRoll.manager){
            this.employeePayRoll.manager = []
        }
    inquirer
    .prompt([
        {
            type:'input',
            message:'What is the name of the manager?',
            name:'yourName',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Cannot skip!');
                  return false;
                }
              }
            
        },
        {
            type:'input',
            name: 'iD',
            message:'Enter the manager ID number',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Cannot skip!');
                  return false;
                }
              }
        },
        {
            type:'input',
            name: 'email',
            message:'Enter the manager email address',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Cannot skip!');
                  return false;
                }
              }
        },
        {
            type:'input',
            name: 'office',
            message:'Enter the manager office number',
            validate: input => {
                if (input) {
                  return true;
                } else {
                  console.log('Cannot skip!');
                  return false;
                }
              }
        },
        {
        type:'list',
        message:'What is your next employee role?',
        name:'nextRole',
        choices:['Engineer', 'Intern', 'Finished']
        }
        
    ]).then(action => {
        manager = false;
        this.employeePayRoll.manager.push(new Manager(action.yourName, action.iD, action.email, action.office)); 
 
        if(action.nextRole === 'Finished'){
        console.log(this.employeePayRoll);
        }
        else if(action.nextRole === 'Engineer'){
        engineer = true;
        this.promptEmployeeStats();
        }
        else if(action.nextRole === 'Intern'){
        intern = true;
        this.promptEmployeeStats();

        }
    });
}
else if (engineer === true){
    if(!this.employeePayRoll.engineer){
        this.employeePayRoll.engineer = []
    }
        inquirer
        .prompt([
            {
                type:'input',
                message:'What is the name of the engineer?',
                name:'yourName',
                validate: input => {
                    if (input) {
                      return true;
                    } else {
                      console.log('Cannot skip!');
                      return false;
                    }
                  }
                
            },
            {
                type:'input',
                name: 'iD',
                message:'Enter the engineer employee ID',
                validate: input => {
                    if (input) {
                      return true;
                    } else {
                      console.log('Cannot skip!');
                      return false;
                    }
                  }
            },
            {
                type:'input',
                name: 'email',
                message:'Enter the engineer email address',
                validate: input => {
                    if (input) {
                      return true;
                    } else {
                      console.log('Cannot skip!');
                      return false;
                    }
                  }
            },
            {
                type:'input',
                name: 'gitHub',
                message:'Enter the engineer GitHub username',
                validate: input => {
                    if (input) {
                      return true;
                    } else {
                      console.log('Cannot skip!');
                      return false;
                    }
                  }
            },
            {
            type:'list',
            message:'What is your next employee role?',
            name:'nextRole',
            choices:['Engineer', 'Intern', 'Finished']
            }
            
        ]).then(action => {
            engineer = false;
            this.employeePayRoll.engineer.push(new Engineer(action.yourName,action.iD,action.email,action.gitHub))
            if(action.nextRole === 'Finished'){
            console.log(this.employeePayRoll);
            }
            else if(action.nextRole === 'Engineer'){
            engineer = true;
            this.promptEmployeeStats();

            }
            else if(action.nextRole === 'Intern'){
            intern = true;
            this.promptEmployeeStats();

            }
        });
    }
    else if (intern === true){
        if(!this.employeePayRoll.intern){
            this.employeePayRoll.intern = []
        }
            inquirer
            .prompt([
                {
                    type:'input',
                    message:'What is the name of the intern?',
                    name:'yourName',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Cannot skip!');
                          return false;
                        }
                      }
                    
                },
                {
                    type:'input',
                    name: 'iD',
                    message:'Enter the intern ID number',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Cannot skip!');
                          return false;
                        }
                      }
                },
                {
                    type:'input',
                    name: 'email',
                    message:'Enter the intern email address',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Cannot skip!');
                          return false;
                        }
                      }
                },
                {
                    type:'input',
                    name: 'school',
                    message:'Enter the intern school',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Cannot skip!');
                          return false;
                        }
                      }
                },
                {
                type:'list',
                message:'What is your next employee role?',
                name:'nextRole',
                choices:['Engineer', 'Intern', 'Finished']
                }
                
            ]).then(action => {
                intern = false;
                this.employeePayRoll.intern.push(new Intern(action.yourName,action.iD,action.email,action.school))
                if(action.nextRole === 'Finished'){
                console.log(this.employeePayRoll);
                
                }
                else if(action.nextRole === 'Engineer'){
                engineer = true;
                this.promptEmployeeStats();

                }
                else if(action.nextRole === 'Intern'){
                intern = true;
                this.promptEmployeeStats();

                }
            });
        }
    }

function writeFile(){
fs.writeFile('../dist/index.html', 'hello', function (err){
    if(err){
        return console.log(err);
    }
    console.log("the file was created");
});
}

module.exports = Employee;