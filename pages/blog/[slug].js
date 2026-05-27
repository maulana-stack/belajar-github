import Layout from '../../components/Layout';
import { getPostSlugs, getPostBySlug, getSortedPostsData } from '../../lib/posts';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import styles from '../../styles/Post.module.css';

export default function Post({ post, otherPosts }) {
  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className={styles.notFound}>
          <h1>404 - Postingan tidak ditemukan</h1>
          <Link href="/">← Kembali ke beranda</Link>
        </div>
      </Layout>
    );
  }

  const { slug, frontmatter, content } = post;

  return (
    <Layout title={`${frontmatter.title} - My Blog`}>
      <article className={styles.post}>
        <header className={styles.header}>
          <h1>{frontmatter.title}</h1>
          <div className={styles.meta}>
            <time dateTime={frontmatter.date}>
              {format(parseISO(frontmatter.date), 'd MMMM yyyy', { locale: id })}
            </time>
            {frontmatter.author && <span>Oleh {frontmatter.author}</span>}
          </div>
          {frontmatter.excerpt && <p className={styles.excerpt}>{frontmatter.excerpt}</p>}
        </header>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>

      <nav className={styles.navigation}>
        <Link href="/">← Kembali ke beranda</Link>
      </nav>

      {otherPosts.length > 0 && (
        <aside className={styles.related}>
          <h3>Postingan Lainnya</h3>
          <ul>
            {otherPosts.slice(0, 3).map(({ slug, title }) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const allPostsData = getSortedPostsData();
  const otherPosts = allPostsData.filter((p) => p.slug !== params.slug);

  return {
    props: {
      post,
      otherPosts,
    },
    revalidate: 10,
  };
}
