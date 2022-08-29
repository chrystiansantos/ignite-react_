import { Trash } from 'phosphor-react';
import { ITask } from '../../dtos/ITask';

import style from './style.module.css';

interface ITaskProps extends ITask {
  onRemoveTask: (id: string) => void;
  onFinishTaskChanged: (id: string, finish: boolean) => void;
}

export function Task({
  id, finish, task, onRemoveTask, onFinishTaskChanged
}: ITaskProps) {
  return (
    <div className={style.container}>
      <div className={style.inputGroup}>
        <input
          id={id}
          type="checkbox"
          defaultChecked={finish}
          onClick={() => onFinishTaskChanged(id, !finish)} />
        <label htmlFor={id} />
      </div>
      <span className={finish ? style.taskFinish : ''}>{task}</span>
      <button onClick={() => onRemoveTask(id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}