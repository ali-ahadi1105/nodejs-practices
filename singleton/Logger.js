class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

/* solution 1 => define a singleton class for single instance of logger */

// class SingletonLogger {
//   constructor() {
//     if(!SingletonLogger.instance) {
//       SingletonLogger.instance = new Logger();
//     }
//   }

//   getLogger() {
//     return SingletonLogger.instance;
//   }
// }

// solution 2 => The simplest way in nodejs for return a single instance of an class
module.exports = new Logger();
