import Head from 'next/head'
import Title from '../components/Title'
import styles from '@styles/Home.module.css'
import { Page } from '../types/page'
import TermPage from '@components/TermPage'

const page: Page = {
  title: 'Home',
  options: [
    {
      name: 'I am an option',
      path: 'path/to/nowhere'
    },
    {
      name: 'Projects',
      path: 'screens/projects'
    },
    {
      name: 'Memes',
      path: 'memes'
    },
    {
      name: 'Test',
      path: 'screens/test'
    }
  ]
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Webterm</title>
        <meta name="description" content="Welcome to webterm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <Title>Robco Industries TERMLINK PROTOCOL</Title>
        <TermPage page={page} />
      </div>
    </>
  )
}
