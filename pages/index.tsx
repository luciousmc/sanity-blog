import Head from 'next/head'

import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Blogging Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroBanner />
    </div>
  )
}
