export default class TaskManager {
  constructor(settings) {
    const { interval = 1000, timeout = 60 * 1000, autoStart = true } = settings;
    this.settings = settings;
    this.tasks = [];
    this.running = false;
  }
  addTask(t) {
    this.tasks.push(t);
    if (this.settings.autoStart) {
      this.start();
    }
  }
  async start() {
    if (this.running) {
      return;
    }
    await this.run();
  }
  async run() {
    this.running = true;

    if (this.tasks.length === 0) {
      this.running = false;
      return;
    }

    const timer = setTimeout(async () => {
      await this.run();
    }, this.settings.timeout);

    try {
      const task = this.tasks.shift();
      await task.execute();
    } catch (e) {
      console.log("task execute error: ", e);
    }

    clearTimeout(timer);
    setTimeout(async () => {
      await this.run()
    });
  }
}
