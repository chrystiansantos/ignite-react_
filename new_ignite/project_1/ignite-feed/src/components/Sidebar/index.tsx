import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images7.alphacoders.com/122/thumbbig-1226930.webp"
        alt="background"
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          source="https://avatars.githubusercontent.com/u/33062949?v=4"
        />
        <strong>Chrystian Santos</strong>
        <span>Full Stack Developer</span>
      </div>
      <footer>
        <a href="/">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
