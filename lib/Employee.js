class Employee {
    //Parent Class 

    constructor(name, id, email) {
            //settup the inital value for the properties 
            this.name = name;
            this.id = id;
            this.email = email;

        }
        // grabbing from input
    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }

    getEmail() {
        return this.email;

    }

    getRole() {
            return 'Employee'
        } // Returns 'Employee'
}


// Example test
// const employeeOne = new Employee("Namita", 12, "test@gmail.com");

// console.log(employeeOne.id);
// console.log(employeeOne.getRole())
// console.log(employeeOne.getId())
module.exports = Employee;