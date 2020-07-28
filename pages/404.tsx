import Head from 'next/head';

import styles from './404.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Page not found!</h1>
      </main>
    </div>
  );
}
