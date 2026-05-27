import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';

export default function Home({ allPostsData }) {
  return (
    <Layout title="Home - My Blog">
      <div className={styles.hero}>
        <h1>Selamat datang di Blog Saya</h1>
        <p>Berbagi pemikiran, pengetahuan, dan pengalaman programming</p>
      </div>

      <section className={styles.posts}>
        <h2>Postingan Terbaru</h2>
        {allPostsData.length === 0 ? (
          <p className={styles.empty}>Belum ada postingan. Segera buat postingan pertama Anda!</p>
        ) : (
          <div className={styles.grid}>
            {allPostsData.map(({ slug, title, date, excerpt, author }) => (
              <BlogCard
                key={slug}
                slug={slug}
                title={title}
                date={date}
                excerpt={excerpt}
                author={author}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
    revalidate: 10,
  };
}
