import { defineStore } from "pinia";
import type { ITask } from "~/types";

export const useTasksStore = defineStore("task", {
  state: () => ({
    tasks: [] as ITask[],
    counter: 0,
  }),

  actions: {
    addTask(name: string) {
      this.tasks.push({ id: this.counter++, name, done: false });
    },
    removeTask(task: ITask) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
    toggleTask(task: ITask) {
      task.done = !task.done;
    },
  },
});
