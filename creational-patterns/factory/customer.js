const Person = require('./person');

class Customer extends Person {
    constructor(name, funds=0) {
        super(name);
        this.funds = funds;
        this.employee = false;
    }
}

module.exports = Customer;