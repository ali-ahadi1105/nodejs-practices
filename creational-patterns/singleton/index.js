let logger = require("./Logger");
let Customer = require("./Customer");
let Product = require("./Product");

logger.log("starting app...");

let codelicks = new Customer("Codelicks", 600);
let book_product = new Product("Some books", [
  {
    item: "Book1",
    qty: 5,
    price: 200,
  },
  {
    item: "Book2",
    qty: 20,
    price: 39,
  },
]);

logger.log("finished setup...");

console.log(`${logger.count} total logs`);
logger.logs.map((log) => console.log(`   ${log.message}`));
