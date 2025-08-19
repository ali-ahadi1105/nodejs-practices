import { EventEmitter } from 'events'
import { QueyingState } from './queyingState.js';
import { ReadyState } from './readyState.js';

class MessageService extends EventEmitter {
  authenticated = false;
  constructor() {
    super();
    this.state = new QueyingState(this);
  }

  async sendMessage(content) {
    await this.state.sendMessage(content);
  }

  async authenticate() {
    setTimeout(() => {
      this.authenticated = true;
      this.emit("authenticated");
      let prevState = this.state;
      this.state = new ReadyState();
      prevState.disable();
    }, 1000); 
  }

  
}

export const messageService = new MessageService();