const inquirer = require('inquirer');
const employeePayRoll = [];
manager = true;
engineer = false;
intern = false;
promptEmployeeStats = function () {
    if(manager === true){
        if(!employeePayRoll.manager){
            employeePayRoll.manager = []
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
        console.log(action.nextRole);
        employeePayRoll.manager.push(action); 
        if(action.nextRole === 'Finished'){
        console.log(employeePayRoll);
        }
        else if(action.nextRole === 'Engineer'){
        engineer = true;
        promptEmployeeStats();
        }
        else if(action.nextRole === 'Intern'){
        intern = true;
        promptEmployeeStats();

        }
    });
}
else if (engineer === true){
    if(!employeePayRoll.engineer){
        employeePayRoll.engineer = []
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
                name: 'office',
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
            console.log(action.nextRole);
            employeePayRoll.engineer.push(action); 

            if(action.nextRole === 'Finished'){
            console.log(employeePayRoll);
            }
            else if(action.nextRole === 'Engineer'){
            engineer = true;
            promptEmployeeStats();

            }
            else if(action.nextRole === 'Intern'){
            intern = true;
            promptEmployeeStats();

            }
        });
    }
    else if (intern === true){
        if(!employeePayRoll.intern){
            employeePayRoll.intern = []
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
                    name: 'office',
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
                console.log(action.nextRole);
                employeePayRoll.intern.push(action); 
                if(action.nextRole === 'Finished'){
                console.log(employeePayRoll);
                
                }
                else if(action.nextRole === 'Engineer'){
                engineer = true;
                promptEmployeeStats();

                }
                else if(action.nextRole === 'Intern'){
                intern = true;
                promptEmployeeStats();

                }
            });
        }
    }

promptEmployeeStats();
