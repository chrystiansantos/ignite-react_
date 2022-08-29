import styles from './styles.module.css'
import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from 'phosphor-react'


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: IButtonProps) {

  return (
    <button className={styles.container} {...rest}>
      <span>{title}</span>
      <PlusCircle size={20} />
    </button>
  )
}
