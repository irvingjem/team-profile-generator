console.log("welcome to team profile generator....");

// creating page
const templateHTML = require('./src/template.HTML')

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// employee array
const employees = [];

// node modules
const fs = require('fs')
const inquirer = require('inquirer');

// I am prompted to enter the team manager’s name, employee ID, email address, and office number
// Manager question array
const addManager = () => {
    return inquirer.prompt([
        {
            type:'input'
            name: 'managerName', 
            message:'Please enter manager name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            } 
            
        },
        {
            type:'input'
            name: 'managerID', 
            message:'Please enter manager ID:', 
            validate: idInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter a valid manager ID')
                    return false;
                } else {
                    return true;
                }
            }
            
        },
        {
            type:'input'
            name: 'managerEmail', 
            message:'Please enter manager Email:', 
            
        },
        {
            type:'input'
            name: 'managerOfficeNumber', 
            message:'Please enter manager Office Number:',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ]);



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
        //3. Build HTML PAGE 
         }else {
        fs.writeFile();
    };
    //helper code and template.html 

     });
}

function engineerQuestions(){
    inquirer.prompt({
        
    })
};

function internQuestions(){
    inquirer.prompt({

    })
};

