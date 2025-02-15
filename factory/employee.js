const Customer = require('./customer');

class Employee extends Customer {
    constructor(name, funds=0, employer="") {
        super(name, funds);
        this.funds = funds;
        this.employee = true;
        this.employer = employer;
    }

    payDay(funds = 0) {
        return this.funds += funds;
    }
}

module.exports = Employee;