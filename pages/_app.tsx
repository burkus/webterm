import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Advent_Pro } from 'next/font/google'
import SoundProvider from '@context/SoundContext'

const adventPro = Advent_Pro({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={adventPro.className}>
      <SoundProvider>
        <Component {...pageProps} />
      </SoundProvider>
    </div>
  )
}
