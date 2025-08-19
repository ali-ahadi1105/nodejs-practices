import { messageService } from './message.service.js';
import { once } from 'events';

messageService.authenticate();

async function notifyUser() {
  if(!messageService.authenticated) {
    await once(messageService, "authenticated")
  }
  await messageService.sendMessage("Damn bro wassup!!");
}

notifyUser()
setTimeout(() => {
  notifyUser();
}, 3000);
// notifyUser();