import { messageService } from "./message.service.js";
import { once } from 'events';

async function init() {
  messageService.authenticate();
  await once(messageService, "authenticated");
}

async function notifyUser() {
  await messageService.sendMessage("Hello, user!");
}

init().then(() => {
  notifyUser();
});