import { FC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  title?: string
  keywords?: string
  description?: string
  children?: ReactNode
}

const HeadMeta: FC<Props> = ({ title, keywords, description, children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
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
