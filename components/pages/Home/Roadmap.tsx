import { FC, ReactNode } from 'react'

import Button from '@@/common/Button'

const Roadmap: FC = () => {
  const list: { quarter: string; item: string[] }[] = [
    {
      quarter: '2021.Q1 & Q2',
      item: [
        'Project Start',
        'Whitepaper V1 was released',
        'Received hundreds of thousands dollars in seed round',
        'Development started'
      ]
    },
    {
      quarter: '2021.Q3',
      item: [
        'Completed Alpha',
        'Completed the development of Alpha version',
        'Alpha version endured 10,000+ testing cases.',
        'Participated in Solana Hackathon and winning prize in Asian region'
      ]
    },
    {
      quarter: '2021.Q4',
      item: [
        'Beta version and Global Release',
        'Development of Beta version',
        'Started Beta version testing',
        'Started recruiting Genesis Brokers globally',
        'Start of community building'
      ]
    },
    {
      quarter: '2022.Q1 & Q2',
      item: [
        'IDO',
        'Launched IDO and began DRF token release in DEX',
        'DRF staking started',
        'Launched DAO v0.1',
        'Recruited brokers',
        'Started code auditing'
      ]
    },
    {
      quarter: '2022.Q3 & Q4',
      item: [
        'Mainnet Release',
        'Mainnet release on BNB chain',
        'UI 2.0 release',
        'Airdrop and begin the genesis mining',
        'DAO v0.3 and community governance'
      ]
    },
    {
      quarter: '2023. Q1 & 2',
      item: [
        'User growth',
        'Dive deep in BNB chain ecosystem',
        'Recruit more global brokers and organize continuous community activities',
        'Update the DAO'
      ]
    },
    {
      quarter: '2023. Q3 & Q4',
      item: [
        'Product 2.0',
        'Support multi-collateral as margin',
        'Achieve cross-chain compatibility',
        'Support more derivatives trading and higher leverage'
      ]
    }
  ]
  return (
    <section className="web-home-roadmap">
      <h2>Roadmap</h2>
      {list.map(({ quarter, item }, index) => (
        <section className="web-home-roadmap-item" key={quarter}>
          <header>{quarter}</header>
          <ul>
            {item.map((content) => (<li key={content}>{content}</li>))}
          </ul>
        </section>
      ))}
    </section>
  )
}

export default Roadmap
