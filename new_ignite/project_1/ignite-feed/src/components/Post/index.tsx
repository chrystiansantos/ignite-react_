// eslint-disable-next-line import/no-duplicates
import { format, formatDistanceToNow } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import ptBr from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

interface IContent {
  type: 'paragraph' | 'link';
  content: string;
}

interface IAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

interface IPostProps {
  author: IAuthor;
  publishedAt: Date;
  content: IContent[];
}

export function Post({ author, publishedAt, content }: IPostProps) {
  const [comments, setComment] = useState(['Post muito bacana hein !']);
  const [newCommentText, setNewCommentText] = useState('');

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComment([...comments, newCommentText]);
    setNewCommentText('');
  };

  const deleteComment = (commentToDelete: string) =>
    setComment(oldValue =>
      oldValue.filter(comment => comment !== commentToDelete),
    );

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>,
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  };

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm 'h'",
    { locale: ptBr },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const isNewCommentEmpty = !newCommentText.length;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder source={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="/">{line.content}</a>{' '}
              </p>
            );
          }
          return <p key={line.content}>{line.content}</p>;
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          required
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
