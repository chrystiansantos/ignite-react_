import { InputHTMLAttributes } from "react";
import styles from './styles.module.css'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  task: string;
  onSetTask: (task: string) => void;
}

export function Input({ task, onSetTask, ...rest }: IInputProps) {
  return (
    <input
      className={styles.input}
      value={task}
      onChange={(event) => onSetTask(event.target.value)}
      {...rest} />
  )
}
