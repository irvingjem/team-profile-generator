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
    return inquirer.prompt([{
                type: 'input',
                name: 'managerName',
                message: 'Please enter manager name:',
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
                type: 'input',
                name: 'managerID',
                message: 'Please enter manager ID:',
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
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter manager Email:'

            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Please enter manager Office Number:',
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('Please enter an office number!')
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(managerInput => {
            const { managerName, managerID, managerEmail, managerOfficeNumber } = managerInput;
            const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);

            employees.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: "Please choose your employee role",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "Name of the Employee?",
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter a valid employee ID'
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter employee email"
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username."
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: "Would you like to add another team member?",
                default: false
            }
        ])
        .then(employeeData => {
            let { name, id, email, role, school, confirmAddEmployee } = employeeData
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github)

                console.log(employee)
            } else if (role === "intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee)
            }

            employees.push(employees)

            if (confirmAddEmployee) {
                return addEmployee(employees);
            } else {
                return employees;
            }
        })
};

// inquirer.prompt(
//     managerQuestions
// ).then(answer => {
//     console.log(answer);
//Ask for team members 
//convert the answers int oCLass manager object
// const employeeOne = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber);

// console.log(employeeOne.id);
// console.log(employeeOne.getRole())
// console.log(employeeOne.getId()
//presented with a menu with the option to add an engineer or an intern or to finish building my team
// userchoice();


// })

// function userchoice() {
//     inquirer.prompt({
//         name: 'employeeType',
//         message: 'Please choose employee type',
//         type: 'list',
//         choices: ['Engineer', 'Intern', 'None']
//     }).then(answer => {

//         console.log(answer);

//         //1. Engineer Questions 
//         if (answer.employeeType === "Engineer") {
//             return engineerQuestions();
//             //2. Intern Questions
//         }
//         if (answer.employeeType === "Intern") {
//             return internQuestions();
//             //3. Build HTML PAGE 
//         } else {
//             fs.writeFile();
//         };
//         //helper code and template.html 

//     });
// }


// function to generate HTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // general error
        if (err) {
            console.log(err);
            return;
            // when successful 
        } else {
            console.log("Your team profile has been successfully created!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });