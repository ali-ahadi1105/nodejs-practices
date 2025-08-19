const funcsArray = ["sendMessage"];

export class QueyingState {
  constructor(service) {
    this.service = service;
    this.commandQueued = [];

    funcsArray.forEach(methodName => {
      this[methodName] = (...args) => {
        console.log(`Command Queued: `, methodName, args);
        return new Promise((resolve, reject) => {
          const command = () => {
            service[methodName](...args).then(resolve, reject);
          }
          this.commandQueued.push(command);
        });
      };
    });
  }

  disable() {
    this.commandQueued.forEach(command => command());
    this.commandQueued = [];
  }
}