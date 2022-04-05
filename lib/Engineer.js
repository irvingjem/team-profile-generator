const Employee = require("./Employee");

//Child Class that inherits from the parent using the extends keyword 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return "https://github.com/" + this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

// const engineerOne = new Engineer("jem", 12, "@", "github")
// console.log(engineerOne.getGithub())
module.exports = Engineer;