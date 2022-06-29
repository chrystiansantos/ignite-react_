import { FormEvent, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Tasks } from "./components/Tasks";
import { ITask } from "./dtos/ITask";

import styles from './app.module.css'
import { useLocalStorage } from "./hooks/useLocalStorage";

export function App() {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const taskCreated = getLocalStorage();
    if (taskCreated.length) setTasks(taskCreated);
  }, [])


  const handleSubmitTask = (event: FormEvent) => {
    event.preventDefault();
    const newsTasks = [...tasks, {
      id: new Date().getTime().toString(),
      task: task,
      finish: false
    }]
    setLocalStorage(newsTasks);
    setTasks(newsTasks);
    setTask('')
  }

  const handleRemoveTask = (id: string) => {
    setTasks(oldValue => oldValue.filter(task => task.id !== id));
  }

  const handleFinishTask = (id: string, finish: boolean) => {
    const newTaksFinishes = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          finish: finish
        }
      }
      return task;
    })
    setLocalStorage(newTaksFinishes);
    setTasks(newTaksFinishes);
  }


  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <form onSubmit={handleSubmitTask} className={styles.formContent}>
          <Input
            task={task}
            onSetTask={setTask}
            placeholder="Adicione uma nova tarefa"
          />
          <Button type="submit" title="Criar" disabled={!task} />
        </form>
        <Tasks
          tasks={tasks}
          onRemoveTask={handleRemoveTask}
          onFinishTaskChanged={handleFinishTask}
        />
      </div>
    </>
  )
}