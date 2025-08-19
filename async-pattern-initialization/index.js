import { messageService } from './state/fullStateMessage.service.js';

messageService.sendMessage('First message');
messageService.authenticate();

setTimeout(() => {
  messageService.sendMessage('Second message');
}, 1500);