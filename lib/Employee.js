const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
manager = true;
engineer = false;
intern = false;

function Employee(){
//this.htmlToUse = [];
this.employeePayRoll = [];

};

function finish(content){ 
  const managerArray = content.manager.filter(({roleManager}) => roleManager)
//console.log(array);
//console.log(content.manager[0].roleManager)
.map(({name, id, email, icon, office}) => {
  return`
  ${name}
  `
  }
  );
  if(content.manager[0].roleManager === true)
  {
    console.log("say hello");
  }
}


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
  const managerArray = fileContent.manager.filter(({roleManager}) => roleManager)
   .map(({name, id, email, icon, office}) => {
    return`
   <div class = 'column is-3 greyBack employeeBlock'>
      <div class = 'topPart'>
        <p class = 'name'>${name}</p>
        <p class = 'role'><${icon}>Manager</p>
   </div>
   <div class = 'bottomPart'>
       <p class = 'id'>${id}ID:</p>
       <p class = 'gmail'>${email}Gmail:</p>
       <p class = 'special'>${office}Special:</p>
  </div>` 
       
        
    });
   /* const engineerArray = fileContent.filter(({engineer}) =>
    engineer.map(({name, id, email, icon, gitHub}) => {
   return`
   <div class = 'column is-3 greyBack employeeBlock'>
      <div class = 'topPart'>
        <p class = 'name'>${name}</p>
        <p class = 'role'><${icon}>Engineer</p>
   </div>
   <div class = 'bottomPart'>
       <p class = 'id'>ID:${id}</p>
       <p class = 'gmail'>Gmail:${email}</p>
       <p class = 'special'>Special:${gitHub}</p>
  </div>` 
       
   }));
   const internArray = fileContent.filter(({manager}) =>
   manager.map(({name, id, email, icon, school}) => {
  return`
   <div class = 'column is-3 greyBack employeeBlock'>
      <div class = 'topPart'>
        <p class = 'name'>${name}</p>
        <p class = 'role'><${icon}>Intern</p>
   </div>
   <div class = 'bottomPart'>
       <p class = 'id'>ID:${id}</p>
       <p class = 'gmail'>Gmail:${email}</p>
       <p class = 'special'>Special:${school}</p>
   </div>` 
           ${engineerArray}
      ${internArray}
  }));*/
  
    return `
      ${managerArray}
  
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
        <section class = 'columns is-centered'>
            <section class = 'column is-three-quarters blue'>
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
        //finish(this.employeePayRoll);
        console.log(generator(this.employeePayRoll));
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