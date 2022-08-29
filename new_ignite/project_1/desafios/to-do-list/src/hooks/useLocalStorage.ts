import { ITask } from "../dtos/ITask";

export function useLocalStorage() {
  function setLocalStorage(task: ITask[]) {
    localStorage.setItem('tasks', JSON.stringify(task));
  }

  function getLocalStorage(): ITask[] {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    }
    return []
  }

  return {
    setLocalStorage,
    getLocalStorage
  }
}



