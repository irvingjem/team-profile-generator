class Employee {
    //Parent Class 

    constructor(name, id, email) {
        //settup the inital value for the properties 
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return "this is my name" + this.name;
    }

    getId() {
        return "this is my id" + this.id;

    }

    getEmail() {
        return "this is my email" + this.email;

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