import type { NextPage } from 'next'
import Header from '@@/common/Header'
import Footer from '@@/common/Footer'
import HeadMeta from '@@/common/HeadMeta'
import Banner from '@@/pages/Home/Banner'
import Features from '@@/pages/Home/Features'
import DEXaas from '@@/pages/Home/DEXaas'
import Dao from '@@/pages/Home/Dao'
import Roadmap from '@@/pages/Home/Roadmap'
import Partners from '@@/pages/Home/Partners'
import Community from '@@/pages/Home/Community'
import SiteMap from '@@/pages/Home/SiteMap'

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
      <Community />
      <SiteMap />
      <Footer />
    </>
  )
}

export default Home
