import { CancelError } from "./cancelError.js";
import { someAsyncTask } from "./someAsyncTask.js";
import { createCancalable } from "./createCancalable.js";

async function cancelableFunction(createCancalable) {
  const result1 = await someAsyncTask(1);
  console.log(result1);
  throwErrorIfCanceled(cancel);
  const result2 = await someAsyncTask(2);
  console.log(result2);
  throwErrorIfCanceled(cancel)
  const result3 = await someAsyncTask(3);
  console.log(result3);
}

const cancel = { reqCanceled: false };

cancelableFunction(cancel).catch((err) => {
  if (err instanceof CancelError) {
    console.log('Task is canceled by user');
  } else {
    console.error(err);
  }
});

setTimeout(() => {
  cancel.reqCanceled = true;
}, 100);
