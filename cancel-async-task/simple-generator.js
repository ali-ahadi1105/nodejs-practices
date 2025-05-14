// generator function
function* myFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let generator = myFunction();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
