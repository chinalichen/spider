class Task {
  constructor(name) {
    this.name = name || `t_${Math.ceil(Math.random() * 10000)}`;
  }
}

export default class LoadPageTask extends Task {
  constructor(name, url) {
    super(name);
    this.url = url;
  }
  async execute() {
    await this.func();
  }
}

export class TestTask extends Task {
  async execute() {
    return new Promise((resolve) => {
      console.log(new Date(), `start doing task[${this.name}]...`)
      setTimeout(() => {
        console.log(new Date(), `task[${this.name}] finished.`)
        resolve('done');
      }, 2000);
    });
  }
}
