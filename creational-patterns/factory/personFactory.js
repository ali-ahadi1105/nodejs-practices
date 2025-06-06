const Employee = require('./employee');
const Customer = require('./customer');

let personFactory = (name, funds, type, employer) => {
    switch(type) {
        case 'employee':
            return new Employee(name, funds, employer);
        default:
            return new Customer(name, funds);
    }
}

module.exports = personFactory;