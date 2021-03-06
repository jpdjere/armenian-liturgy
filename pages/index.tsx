import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import YouTube, { Options } from 'react-youtube';
import { useState } from 'react';
import { Lyrics } from '../components/Lyrics';

const Home: NextPage = () => {
  const [time, setTime] = useState(0);
  const opts = {
    height: '515',
    width: '760',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: 2870,
      end: 2941
    },
  } as Options;
  const onPlay = (event: any) => {
    // access to player in all event handlers via event.target
    setInterval(() => {
      setTime(event.target.getCurrentTime());
    }, 300);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Armenian Liturgy</title>
        <meta name="description" content="Armenian Liturgy with synced lyrics in Armenian and English" />
        <link rel="icon" href="/church.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Armenian <a>Liturgy</a>
        </h1>

        <div className={styles.grid}>
          <YouTube videoId="I_sBYnCJW9s" opts={opts} onPlay={onPlay} className={styles.video}/>
          <div
            className={styles.card}
          >
            <Lyrics time={time}/>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
