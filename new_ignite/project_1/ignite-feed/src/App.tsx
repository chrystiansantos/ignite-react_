import { Header } from './components/Header';

import styles from './app.module.css';

import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

interface Icontent {
  type: 'paragraph' | 'link';
  content: string;
}

interface IAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

interface IPost {
  id: number;
  author: IAuthor;
  publishedAt: Date;
  content: Icontent[];
}

export function App() {
  const posts: IPost[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/33062949?v=4',
        name: 'Chrystian Santos',
        role: 'Dev Pl CentralIt',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-06-14'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/6643122?v=4',
        name: 'Mayk Brito',
        role: 'Educator Rockeseat',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-06-10'),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
