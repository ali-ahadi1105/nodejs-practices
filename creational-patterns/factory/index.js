let personFactory = require('./personFactory');

let firtsPerson = personFactory('Ali', 500);
let secondPerson = personFactory("Sahand", 700, 'employee', 'john');

console.log(firtsPerson.toString());
console.log(secondPerson.toString());
