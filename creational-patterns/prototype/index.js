let base_prototype = require('./base_prototype');

let codeliks = base_prototype.clone();
codeliks.name = 'codelicks';
codeliks.addItemsToList('product 5');

let nano = base_prototype.clone();
nano.name = 'nano';
nano.addItemsToList('product 6');

console.log(`${codeliks.name}: ${codeliks.cartItems}`);
console.log(`${nano.name}: ${nano.cartItems}`);
