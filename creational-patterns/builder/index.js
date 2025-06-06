const PersonBuilder = require('./personBuilder');

const ali = new PersonBuilder("Ali").makeEmployee().makeManager(50).build();

const amin = new PersonBuilder("Amin").makeEmployee().makeManager(30).build();

const amir = new PersonBuilder("Amir").makeEmployee().build();

const nazi = new PersonBuilder("Nazi").withFounds(400).withShoppingList(["shoes", "shirts"]).build();

const sara = new PersonBuilder("Sara").withFounds(300).withShoppingList([]).build();

console.log(ali.toString());
// console.log(amin.toString());
console.log(nazi.toString());
