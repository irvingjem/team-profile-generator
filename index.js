// creating page
const generateHTML = require('./src/template.js')

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// employee array
const employeesArray = [];

// node modules
const fs = require('fs')
const inquirer = require('inquirer');

// I am prompted to enter the team manager’s name, employee ID, email address, and office number
// Manager question array
const addManager = () => {
    console.log('Time to build your teams profile.')
    return inquirer
        .prompt([{
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
                    if (idInput === '') {
                        console.log("Please enter the manager's ID number!");
                        return false;
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter manager Email:',
                validate: emailInput => {
                    if (emailInput === '') {
                        console.log("Please enter the manager's email address!");
                        return false;
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Please enter manager Office Number:',
                validate: officeNumberInput => {
                    if (officeNumberInput === '') {
                        console.log('Please enter the manager office number!')
                        return false;
                    }
                    return true;
                }
            }
        ])
        // managed created from answers
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            // push to array
            employeesArray.push(manager);
            console.log(manager);

            addEmployee();
        })
};

// adding employee
const addEmployee = () => {
    return inquirer
        .prompt([{
            type: 'list',
            name: 'userChoice',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "None"]
        }])
        .then((choice) => {
            switch (choice.userChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'None':
                    writeFile();
                    break;
            }
        });
};

// adding engineer 
const addEngineer = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput === '') {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's ID number?",
                validate: idInput => {
                    if (idInput === '') {
                        console.log("Please enter the engineer's ID number!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email address?",
                validate: emailInput => {
                    if (emailInput === '') {
                        console.log("Please enter the engineer's email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's Github username?",
                validate: githubInput => {
                    if (githubInput === '') {
                        console.log("Please enter the engineer's Github username!");
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then((answers) => {
            // create new engineer based off  answers
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            // push new engineer to employeeArray
            employeesArray.push(engineer);
            // call addEmployee function
            addEmployee();
        });
};

// adding intern
const addIntern = () => {
    return inquirer
        .prompt([{
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput === '') {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's ID number?",
                validate: idInput => {
                    if (idInput === '') {
                        console.log("Please enter the intern's ID number!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address?",
                validate: emailInput => {
                    if (emailInput === '') {
                        console.log("Please enter the intern's email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school name?",
                validate: schoolInput => {
                    if (schoolInput === '') {
                        console.log("Please enter the intern's school name!");
                        return false;
                    }
                    return true;
                }
            }
        ])
        .then((answers) => {
            // create new intern based off user's answers
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            // push new intern to EmployeeArray
            employeesArray.push(intern);
            // call addEmployee function
            addEmployee();
        });
};


// function to generate HTML
const writeFile = () => {
    fs.writeFile('./dist/template.html', generateHTML(employeesArray), err => {
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

// function to start over
addManager();





//refrence code 
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