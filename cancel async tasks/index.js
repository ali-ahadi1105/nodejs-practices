import { someFunctionTasks } from './someAsyncFunction.js';
import { CancelError } from './cancelError.js';

function cancelFunction(cancel) {
  if(cancel.reqCanceled) {
    throw new CancelError();
  }
}

export const cancelableFunction = async (cancel) => {
  const result1 = await someFunctionTasks("1");
  console.log(`Result 1 is: ${result1}`);
  cancelFunction(cancel);

  const result2 = await someFunctionTasks("2");
  console.log(`Result 2 is: ${result2}`);
  cancelFunction(cancel);

  const result3 = await someFunctionTasks("3");
  console.log(`Result 3 is: ${result3}`);
  cancelFunction(cancel);
}

let cancel = {
  reqCanceled: false
}

cancelableFunction(cancel);

setTimeout(() => {
  cancel.reqCanceled = true;
}, 300);