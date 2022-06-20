import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Link from 'next/link';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

interface IPost {
  data: {
    title: [];
    content: {
      type: string;
      text: string;
    }[];
  };
}

interface IPosts {
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    updatedAt: string;
  }[];
}

export default function Posts({ posts }: IPosts) {
  return (
    <>
      <Head>
        <title>Posts | Ignew</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    },
  );

  const posts = response.results.map(post => {
    const postType = post as IPost;
    return {
      slug: post.uid,
      title: RichText.asText(postType.data.title),
      excerpt:
        postType.data.content.find(content => content.type === 'paragraph')
          .text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });
  return {
    props: {
      posts,
    },
  };
};
