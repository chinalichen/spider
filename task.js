

export default class LoadPageTask {
  constructor(url) {
    this.func = func;
  }
  async execute() {
    await this.func();
  }
}

export default class TestTask {
  async execute() {
    return new Promise((resolve, reject) => {
      console.log(new Date(), 'start doing task...')
      setTimeout(() => {
        console.log(new Date(), 'task finished.')
        resolve('done');
      }, 2000);
    });
  }
}
