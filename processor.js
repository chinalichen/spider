export default class TaskManager {
  constructor(settings) {
    const { interval = 1000, timeout = 60 * 1000, autoStart = true } = settings;
    this.settings = settings;
    this.tasks = [];
    this.timer = null;
  }
  addTask(t) {
    this.tasks.push(t);
    if (this.settings.autoStart) {
      this.start();
    }
  }
  async start() {
    if (this.tasks.length === 0) {
      return;
    }

    const timer = setTimeout(async () => {
      await this.start();
    }, this.settings.timeout);

    try {
      const task = this.tasks.shift();
      const result = await task.execute();
    } catch (e) {
      console.log("task execute error: ", e);
    }

    clearTimeout(timer);
    setTimeout(async () => { await this.start() });
  }
}
