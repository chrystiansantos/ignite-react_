import styles from './styles.module.css';
import { Task } from '../Task';
import { ITask } from '../../dtos/ITask';

interface ITasksProps {
  tasks: ITask[];
  onRemoveTask: (id: string) => void;
  onFinishTaskChanged: (id: string, finish: boolean) => void;
}

export function Tasks({ tasks, onRemoveTask, onFinishTaskChanged }: ITasksProps) {
  const taskFinish = tasks.filter(task => task.finish).length;
  const labelProgress = taskFinish ? `${taskFinish} de ${tasks.length}` : '0';

  return (
    <>
      <header className={styles.headerTask}>
        <div className={styles.containerTaskInfo}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.containerTaskProgress}>
          <strong>Concluídas</strong>
          <span className={styles.rounded}>{labelProgress}</span>
        </div>
      </header>

      {tasks.length ?
        tasks.map(({ id, task, finish }) => (
          <Task
            key={id}
            id={id}
            task={task}
            finish={finish}
            onRemoveTask={onRemoveTask}
            onFinishTaskChanged={onFinishTaskChanged}
          />
        ))
        : (
          <div className={styles.contentEmpty}>
            <img src="/src/assets/clipboard.png" alt="list-empty" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
    </>
  )
}
