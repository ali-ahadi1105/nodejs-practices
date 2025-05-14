export function someAsyncTask(id) {
  console.log(`Async task with id: ${id} is started`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Async task with id: ${id} is done`);
      resolve(`Task resolve with message: yooooo`);
    }, 300);
  });
}