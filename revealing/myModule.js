class MyModule {
    #counter = 0;

    #incrementCounter = () => {
        this.#counter++;
    }

    getCounter = () => {
        return this.#counter;
    }

    incrementAndShow() {
        this.#incrementCounter();
        console.log(`The counter is now: ${this.#counter}`);
    }
}

const myModule = new MyModule();

console.log(myModule.getCounter());
// myModule.#incrementCounter();
myModule.incrementAndShow();
myModule.incrementAndShow();
myModule.incrementAndShow();
myModule.incrementAndShow();
myModule.incrementAndShow();
myModule.incrementAndShow();
console.log(myModule.getCounter());