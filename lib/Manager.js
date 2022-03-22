const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;

        this.role = 'Engineer'
    }

    getRole() {
        return this.github;
    }
    getOfficeNumber() {
        return this.role;
    }
}


module.exports = Manager;