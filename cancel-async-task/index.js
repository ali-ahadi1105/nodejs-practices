import { CancelError } from "./cancelError.js";
import { someAsyncTask } from "./someAsyncTask.js";
import { createCancalable } from "./createCancalable.js";

async function cancelableFunction(createCancalable) {
  const result1 = await createCancalable(someAsyncTask, "1");
  console.log(result1);
  const result2 = await createCancalable(someAsyncTask, "2");
  console.log(result2);
  const result3 = await createCancalable(someAsyncTask, "3");
  console.log(result3);
}

let { cancalableWraper, cancel } = createCancalable();

cancelableFunction(cancalableWraper).catch((err) => {
  if (err instanceof CancelError) {
    console.log('Task is canceled by user');
  } else {
    console.error(err);
  }
});

setTimeout(() => {
  cancel();
}, 200);
