import { TestTask } from './task';
import TaskManager from './processor';

const tm = new TaskManager({ interval: 1000, timeout: 1000 });

for (let i = 0; i < 10; i++) {
  tm.addTask(new TestTask(`test task ${i}`));
}

tm.start();
