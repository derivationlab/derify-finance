import { FC, ReactNode } from 'react'

import Button from '@@/common/Button'
import Image from '@@/common/Image'

const list = [...new Array(10)]

const DEXaas: FC = () => {
  return (
    <>
      <section className="web-home-dexaas">
        <h2>
          DEXaas: <br />
          DEX-as-a-service
        </h2>
        <p>
          Derify is not operated by a centralized team but individual Brokers all over the world. Every user needs a
          Broker to access Derify, including but not limited to trading, mining, governance. etc. This is so-called
          DEXaas (DEX-as-a-Service) model. Brokers can use Derify Protocol to create a derivative DEX of their own and
          provide products and services to their users. Derify cores are shared with every Brokers' derivative DEX,
          including liquidity pool, insurance pool, risk control system and profit (30% of the total trading fees and
          DRF token rewards)
        </p>
        <aside>
          <Button dark to="https://docs.derify.finance/whitepaper/community-and-governance/broker">
            Learn More
          </Button>
          <Button to="https://derify.exchange/broker">Apply Broker</Button>
        </aside>
      </section>
      <section className="web-home-dexaas-logos">
        <ul>
          {list.map((_, index) => (
            <li key={index}>
              <Image src={`website/partner/${index + 1}.png`} alt="" />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default DEXaas
