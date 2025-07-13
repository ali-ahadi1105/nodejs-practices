const Customer = require('./Customer');

const base = new Customer();

base.addItemsToList('product 1');
base.addItemsToList('product 2');
base.addItemsToList('product 3');
base.addItemsToList('product 4');

module.exports = base;

