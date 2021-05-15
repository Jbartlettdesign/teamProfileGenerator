const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
manager = true;
engineer = false;
intern = false;

function Employee(){

this.employeePayRoll = [];

};
/*****************************************************/
Employee.prototype.getName = function(){
  return { name:this.name };
}

Employee.prototype.getId = function(){
  return { id:this.id };
}

Employee.prototype.getEmail = function(){
  return { email:this.email };
}

Employee.prototype.getRole = function(){
  return {roleManager: this.roleManager,
          roleEngineer:this.roleEngineer,
          roleIntern:this.roleIntern};
}
/*****************************************************/
const writeFile = function(printFile){
    fs.writeFile('./dist/index.html', printFile, function (err){
        if(err){
            return console.log(err);
        }
        console.log("the file was created");
    });
    }

const mapContent = (fileContent) => 
{
   //console.log(fileContent);
  const managerArray = fileContent.filter(({roleManager}) => roleManager)
   .map(({name, id, email, icon, office}) => {
    return`
   <div class = 'column is-3 greyBack employeeBlock'>
      <div class = 'topPart'>
          <p class = 'name'>${name}</p>
        <div class = 'columns'>
          <p>${icon}</p>
          <p class = 'role'>Manager</p>
        </div>
      </div>

      <div class = 'bottomPart'>
       <p class = 'id'>ID: ${id}</p>
       <p class = 'gmail'>Email: <a href = "mailto: ${email}">${email}</a></p>
       <p class = 'special'>Office: ${office}</p>
      </div>
  </div>` 
       
        
    }).join('');
   const engineerArray = fileContent.filter(({roleEngineer}) => roleEngineer)
   .map(({name, id, email, icon, gitHub}) => {
   return`
   <div class = 'column is-3 greyBack employeeBlock'>
      <div class = 'topPart'>
          <p class = 'name'>${name}</p>
        <div class = 'columns'>
          <p>${icon}</p>
          <p class = 'roleE'>Engineer</p>
        </div>
      </div>

      <div class = 'bottomPart'>
       <p class = 'id'>ID: ${id}</p>
       <p class = 'gmail'>Email: <a href = "mailto: ${email}">${email}</a></p>
       <p class = 'special'>GitHub: <a href="${gitHub}"target="_blank">${gitHub}</a></p>
      </div>
  </div>` 
       
   }).join('');
   const internArray = fileContent.filter(({roleIntern}) => roleIntern)
   .map(({name, id, email, icon, school}) => {
  return`
   <div class = 'column is-3 greyBack employeeBlock'>
        <div class = 'topPart'>
          <p class = 'name'>${name}</p>
        <div class = 'columns'>
          <p>${icon}</p>
          <p class = 'roleI'>Intern</p>
        </div>
        </div>
      <div class = 'bottomPart'>
       <p class = 'id'>ID: ${id}</p>
       <p class = 'gmail'>Email: <a href = "mailto: ${email}">${email}</a></p>       
       <p class = 'special'>School: ${school}</p>
      </div>
   </div>` 
          
  }).join('');
  
    return `
    
      ${managerArray}
      ${engineerArray}
      ${internArray}
  `
    }


const generator = (content) => {
    var info = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test Team Profile</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../src/style.css"></head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma-rtl.min.css">
    <body>
        <section class = 'red'>
          <h1 class = 'topFont'>My Team</h1>
        </section>
        <section class = 'columns is-centered'>
            <section class = 'column is-three-quarters'>
                <div class = 'columns is-centered' id = 'addNewSection'>
                ${mapContent(content)}  
                </div>
            </section>  
        </section>
    </body>
    </html>
    `
return info;
}


Employee.prototype.promptEmployeeStats = function () {
    if(manager === true){
        /*if(!this.employeePayRoll.manager){
            this.employeePayRoll.manager = []
        }*/
        
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
        this.employeePayRoll.push(new Manager(action.yourName, action.iD, action.email, action.office)); 
    
        if(action.nextRole === 'Finished'){
        //finish(this.employeePayRoll);
        writeFile(generator(this.employeePayRoll));
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
    /*if(!this.employeePayRoll.engineer){
        this.employeePayRoll.engineer = []
    }*/
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
            this.employeePayRoll.push(new Engineer(action.yourName,action.iD,action.email,action.gitHub))
            if(action.nextRole === 'Finished'){
              writeFile(generator(this.employeePayRoll));

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
        /*if(!this.employeePayRoll.intern){
            this.employeePayRoll.intern = []
        }*/
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
                this.employeePayRoll.push(new Intern(action.yourName,action.iD,action.email,action.school))
                if(action.nextRole === 'Finished'){
                  writeFile(generator(this.employeePayRoll));
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

module.exports = Employee;