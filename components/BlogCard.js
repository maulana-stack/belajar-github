import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import styles from '../styles/BlogCard.module.css';

export default function BlogCard({ slug, title, date, excerpt, author }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h2>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <div className={styles.meta}>
          <time dateTime={date}>
            {format(parseISO(date), 'd MMMM yyyy', { locale: id })}
          </time>
          {author && <span className={styles.author}>By {author}</span>}
        </div>
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        <Link href={`/blog/${slug}`} className={styles.readMore}>
          Baca selengkapnya →
        </Link>
      </div>
    </article>
  );
}
