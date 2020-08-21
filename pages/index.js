import react from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PrimaryHeader } from '../components/typography';
import { PrimaryGrid } from '../components/gridSystem';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <PrimaryGrid
            
        >
            <PrimaryHeader
                color="navy"
                fontSize="xxLarge"
            >Not responsive text</PrimaryHeader>
            <PrimaryHeader
                color={{
                    xs: 'black',
                    sm: 'blue'
                }}
                fontSize={{
                    xs: 'small',
                    sm: 'medium',
                    md: 'large',
                    lg: 'xLarge'
                }}
                width={{
                    xs: 200,
                    sm: 400,
                    md: 600,
                    lg: 1000
                }}
                fontWeight='heading'
                fontFamily="heading"
            >Responsive text</PrimaryHeader>
        </PrimaryGrid>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
