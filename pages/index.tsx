import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@@/common/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Derify protocol - Derivative Trading | Decentralized Exchange | the Next Generation derivative exchange
        </title>
        <meta
          name="keywords"
          content="Derify,Derify protocol,derivative,derivative trading,decentralized,exchange,leverage,long,short,liquidity,position,mining,yield,farming,yield farming"
        />
        <meta
          name="description"
          content="The decentralized derivatives trading protocol for everything. Trade with leverage and guaranteed liquidity for all users and decentralized applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="web-home">2222</div>
    </>
  )
}

export default Home
