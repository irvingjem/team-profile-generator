console.log("welcome to team profile generator....");

const inquirer = require('inquirer');
const fs = require('fs')


const managerQuestions =[
    {
        name: 'managerName', 
        message:'Please enter manager name:', 
        type:'input'
    },
    {
        name: 'managerID', 
        message:'Please enter manager name:', 
        type:'input'
    },
    {
        name: 'managerName', 
        message:'Please enter manager name:', 
        type:'input'
    },
    {
        name: 'managerName', 
        message:'Please enter manager name:', 
        type:'input'
    }
]; 

// I am prompted to enter the team manager’s name, employee ID, email address, and office number
inquirer.prompt(
   managerQuestions
).then(answer => {
    console.log(answer);
    //Ask for team members 
    //convert the answers int oCLass manager object
    const employeeOne = new Manager(answer.managerName, and);

    // console.log(employeeOne.id);
    // console.log(employeeOne.getRole())
    // console.log(employeeOne.getId()
    //presented with a menu with the option to add an engineer or an intern or to finish building my team
    userchoice(); 


})

function userchoice(){
    inquirer.prompt(
        {
            name: 'employeeType',
            message: 'Please choose employee type'
            type: 'list',
            choices: ['Engineer', 'Intern', 'None']
        }
     ).then(answer => {
     
         console.log(answer);


         if(answer.employeeType === "Engineer"){

         }
             //1. Engineer Questions 

    //2. Intern Questions 

    //3. Build HTML PAGE 
    else {
        //fs.writeFile()
    }
    
    //helper code and template.html 

     });
}