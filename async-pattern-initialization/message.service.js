import { EventEmitter } from 'events'

class MessageService extends EventEmitter {
  authenticated = false;

  async authenticate() {
    setTimeout(() => this.emit("authenticated", (this.authenticated = true)), 1000); 
  }

  async sendMessage(content) {
    if(!this.authenticated) {
      throw new Error('You must first authenticate');
    }
    console.log(`Message sent: ${content}`);
  }
}

export const messageService = new MessageService();