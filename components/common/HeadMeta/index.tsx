import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Script from 'next/script'

interface Props {
  title?: string
  keywords?: string
  description?: string
  children?: ReactNode
}

const HeadMeta: FC<Props> = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/font.css" />
        <link rel="stylesheet" href="/style.css" />
        {children}
      </Head>
      <Script src="/js/rem.js" />
    </>
  )
}

HeadMeta.defaultProps = {
  title: 'Derify protocol - Derivative Trading | Decentralized Exchange | the Next Generation derivative exchange',
  keywords:
    'Derify,Derify protocol,derivative,derivative trading,decentralized,exchange,leverage,long,short,liquidity,position,mining,yield,farming,yield farming',
  description:
    'The decentralized derivatives trading protocol for everything. Trade with leverage and guaranteed liquidity for all users and decentralized applications.'
}

export default HeadMeta
