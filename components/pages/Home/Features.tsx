import { FC, ReactNode } from 'react'

import ALink from '@@/common/ALink'

const list: { name: string; info: string; link: string }[] = [
  {
    name: 'Position Mining',
    info: 'Holding position is providing liquidity. Hold position to get mining rewards and DRF tokens.',
    link: 'https://docs.derify.finance/whitepaper/mechanism/position-mining'
  },
  {
    name: 'No Funding Fees',
    info: 'Unlike traditional CEX, no Funding Fee, holding positions no longer incur additional cost.',
    link: 'https://docs.derify.finance/whitepaper/mechanism/risk-control/position-change-fee'
  },
  {
    name: 'No Slippage',
    info: 'The visible price is the settled price, no price slippage or deviation cost.',
    link: 'https://docs.derify.finance/whitepaper/mechanism/indexes'
  },
  {
    name: 'DAO Operation',
    info: 'A decentralized derivative protocol that is created, operated and owned by DAO',
    link: 'https://docs.derify.finance/derify-dao/overview'
  },
  {
    name: 'No Price Manipulation',
    info: 'Price are provided by external oracles, no liquidity squeeze caused by the system',
    link: 'https://docs.derify.finance/whitepaper/mechanism/indexes'
  },
  {
    name: 'Fully Decentralized',
    info: 'All major functions run by smart contracts',
    link: 'https://docs.derify.finance/whitepaper/implementation/side-chain-rollup-and-cross-chain'
  }
]

const Features: FC = () => {
  return (
    <section className="web-home-features">
      <ul>
        {list.map(({ name, info, link }, index) => (
          <li key={index}>
            <h4>{name}</h4>
            <p>{info}</p>
            <ALink to={link}>Go</ALink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Features
