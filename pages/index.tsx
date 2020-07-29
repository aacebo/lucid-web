import Head from 'next/head';
import Link from 'next/link';
import { Button, Card, CardContent, CardMedia } from '@material-ui/core';
import { BuildOutlined, ShareOutlined, VisibilityOutlined, DoubleArrow } from '@material-ui/icons';

import AppIcon from '../components/app-icon/app-icon';

import styles from './index.module.scss';

export default function Index() {
  const click = () => {
    console.log('clicked');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: Welcome</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.toolbar}>
          <div>
            <AppIcon size="sm" />
          </div>
          <div className={styles.spacer}></div>
          <div>
            <Link href="/sign-up">
              <Button color="primary">Sign Up</Button>
            </Link>

            <Link href="/login">
              <Button color="primary">Login</Button>
            </Link>
          </div>
        </div>

        <div className={styles.content}>
          <h1>A new way to build your résumé</h1>

          <Link href="/sign-up">
            <Button
              className={styles['get-started-btn']}
              variant="contained"
              color="primary"
              size="large"
            >
              Get Started &nbsp;
              <DoubleArrow></DoubleArrow>
            </Button>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <Card className={styles['main-card']} variant="outlined">
          <CardMedia color="primary" className={styles['icon-fab']} component={BuildOutlined}></CardMedia>
          <CardContent>
            Build and save in one location, pain free.
          </CardContent>
        </Card>

        <Card className={styles['main-card']} variant="outlined">
          <CardMedia color="primary" className={styles['icon-fab']} component={ShareOutlined}></CardMedia>
          <CardContent>
            Share easily with anyone.
          </CardContent>
        </Card>

        <Card className={styles['main-card']} variant="outlined">
          <CardMedia color="primary" className={styles['icon-fab']} component={VisibilityOutlined}></CardMedia>
          <CardContent>
            Visualize your professional timeline.
          </CardContent>
        </Card>
      </main>

      <footer className={styles.footer} onClick={click}>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}
