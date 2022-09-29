import { NextPage } from 'next'
import {useEffect, useState} from 'react'

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
import Loading from '@@/pages/Home/Loading'

const Home: NextPage = () => {
  const [visibility, setVisibility] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true)
    }, 2000)
  }, [])

  return (
    <>
      <Loading display={!visibility} />
      <div style={{ visibility: visibility ? 'visible' : 'hidden' }}>
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
      </div>
    </>
  )
}

export default Home
