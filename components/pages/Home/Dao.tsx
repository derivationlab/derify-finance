import { FC, ReactNode } from 'react'

import ALink from '@@/common/ALink'
import Image from '@@/common/Image'

const list: { name: string; info: string; link: string }[] = [
  {
    name: 'Broker BD',
    info: 'Find and recruit more brokers',
    link: 'https://docs.derify.finance/derify-dao/execution-committee/marketing-and-promotion#broker-bd'
  },
  {
    name: 'Community Manager',
    info: 'Maintain the community order in different language channels, and create a positive & active atmosphere',
    link: 'https://docs.derify.finance/derify-dao/execution-committee/marketing-and-promotion#community-manager-multi-language'
  },
  {
    name: 'Content Creator',
    info: 'Provide materials and contents for branding',
    link: 'https://docs.derify.finance/derify-dao/execution-committee/marketing-and-promotion#content-creation'
  },
  {
    name: 'More',
    info: 'Arbitrager, liquidator and other community developer to maintain system stability',
    link: 'https://docs.derify.finance/derify-dao/execution-committee'
  }
]

const Dao: FC = () => {
  return (
    <>
      <section className="web-home-dao">
        <h2>
          Other Contributors <br />
          in Derify DAO
        </h2>
        <ul>
          {list.map(({ name, info, link }, index) => (
            <li key={index}>
              <ALink to={link}>
                <Image src={`website/dao/${index + 1}.svg`} alt={name} />
                <h4>{name}</h4>
                <p>{info}</p>
              </ALink>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Dao
