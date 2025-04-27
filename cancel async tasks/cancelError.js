export class CancelError extends Error {
  constructor() {
    super('Async task is canceled!!');
    this.name = 'CancelError';
  }
}