const base_proto = require('./base_prototype');

let pro1 = base_proto.clone();
pro1.name = "ali";
pro1.addItemsToList('mobile');

let pro2 = base_proto.clone();
pro2.name = "amin";
pro2.addItemsToList('laptop');

console.log(`${pro1.name}: ${pro1.cartItems}`);
console.log(`${pro2.name}: ${pro2.cartItems}`);


