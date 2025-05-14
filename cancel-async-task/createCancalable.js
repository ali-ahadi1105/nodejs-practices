import { CancelError } from "./cancelError";

export function createCancalable(func, ...args) {
  let reqCanceled = false;
  function cancel() {
    reqCanceled = true;
  }

  function cancelWrapper(func, ...args) {
    if (reqCanceled) {
      return new Promise.reject(new CancelError());
    }
    return func(...args);
  }

  return { cancelWrapper, cancel };
}