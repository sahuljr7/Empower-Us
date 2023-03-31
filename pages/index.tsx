import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InclusionSection from '../lib/inclusion';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Empower US</title>
        <meta name="description" content="Created for Hackathons: City and Empower" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InclusionSection />
    </div>
  )
}
