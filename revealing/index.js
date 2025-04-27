const myModule = (function () {
    // private member
    let privateCounter = 0;
    // private method
    function incrementCounter() {
        privateCounter++;
    }
    // public method
    function getCounter() {
        return privateCounter;
    }
    function incrementCounterAndShow() {
        incrementCounter();
        console.log(`The counter now is: ${privateCounter}`);
    }

    return {
        getCounter: getCounter,
        increment: incrementCounterAndShow
    }
})();

console.log(myModule.getCounter());
// console.log(myModule.incrementCounter());
myModule.increment()
myModule.increment()
myModule.increment()
myModule.increment()
console.log(myModule.getCounter());


