import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/404.module.css';

export default function NotFound() {
  return (
    <Layout title="Halaman Tidak Ditemukan">
      <div className={styles.notFound}>
        <h1>404</h1>
        <p>Halaman yang Anda cari tidak ditemukan</p>
        <Link href="/">← Kembali ke beranda</Link>
      </div>
    </Layout>
  );
}
