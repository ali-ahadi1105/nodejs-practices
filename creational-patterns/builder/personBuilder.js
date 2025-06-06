const Customer = require('./customer');

class PersonBuilder {
    constructor(name) {
        this.name = name;
    }

    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    makeManager(hours=40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    withFounds(money) {
        this.money = money;
        return this;
    }

    withShoppingList(list = []) {
        this.shoppingList = list;
        return this;
    }

    build() {
        return new Customer(this);
    }
}

module.exports = PersonBuilder;