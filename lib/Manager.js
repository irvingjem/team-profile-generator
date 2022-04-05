const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //set parent properties 
        super(name, id, email);
        //specific to this class 
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager'
    }

    // Overridden to return 'Manager'
}
// const managerOne = new Manager("Namita", 12, "@", 45);
// console.log(managerOne)



module.exports = Manager;