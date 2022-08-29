import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

interface ICommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(oldValue => oldValue + 1);
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        source="https://avatars.githubusercontent.com/u/33062949?v=4"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Chrystian Santos</strong>
              <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              type="button"
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} type="button">
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
