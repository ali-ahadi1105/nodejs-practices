class Customer {
    constructor(name = "no name") {
        this._name = name;
        this._cartItems = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get cartItems() {
        return this._cartItems.join(',');
    }

    addItemsToList(value) {
        this._cartItems.push(value);
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        let cloned = Object.create(proto);

        cloned._name = this.name;
        cloned._cartItems = [...this._cartItems];

        return cloned;
    }
}

module.exports = Customer;