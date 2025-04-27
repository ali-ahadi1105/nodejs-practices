export const someFunctionTasks = (id) => {
  console.log(`Async task with id: ${id} started.`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Async task with id: ${id} is done.`);
      resolve('Result is something!!');
    }, 200);
  });
}