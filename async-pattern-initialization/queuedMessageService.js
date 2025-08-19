import { EventEmitter } from 'events'

class MessageService extends EventEmitter {
  authenticated = false;
  commandsQueued = []

  async sendMessage(content) {
    if(!this.authenticated) {
      console.log(`Request queued: `, content);
      return new Promise((resolve, reject) => {
        const command = () => {
          this.sendMessage(content).then(resolve, reject);
        }
        this.commandsQueued.push(command);
      });
    }
    console.log(`Message sent: ${content}`);
  }

  async authenticate() {
    setTimeout(() => {
      this.authenticated = true;
      this.emit("authenticated");
      this.commandsQueued.forEach(command => command());
      this.commandsQueued = [];
    }, 1000);
  }
}

export const messageService = new MessageService();