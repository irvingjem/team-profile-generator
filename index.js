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
        message:'Please enter manager ID:', 
        type:'input'
    },
    {
        name: 'managerEmail', 
        message:'Please enter manager Email:', 
        type:'input'
    },
    {
        name: 'managerOfficeNumber', 
        message:'Please enter manager Office Number:', 
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
    const employeeOne = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber);

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

        //1. Engineer Questions 
         if(answer.employeeType === "Engineer"){
            return engineerQuestions();
        //2. Intern Questions
         } if (answer.employeeType === "Intern") {
             return internQuestions();
         }
    //3. Build HTML PAGE 
    else {
        fs.writeFile()
    }
    
    //helper code and template.html 

     });
}