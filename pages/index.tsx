import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@@/common/Header'
import HeadMeta from '@@/common/HeadMeta'
import Banner from '@@/pages/Home/Banner'
import Features from '@@/pages/Home/Features'
import DEXaas from '@@/pages/Home/DEXaas'
import Dao from '@@/pages/Home/Dao'
import Roadmap from '@@/pages/Home/Roadmap'
import Partners from '@@/pages/Home/Partners'

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta />
      <Header />
      <Banner />
      <Features />
      <DEXaas />
      <Dao />
      <Roadmap />
      <Partners />
      <div className="web-home">2222</div>
    </>
  )
}

export default Home
