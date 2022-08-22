import { FC, ReactNode } from 'react'

import Button from '@@/common/Button'

const Banner: FC = () => {
  return (
    <section className="web-home-banner">
      <h2>
        Decentralized <br /> Perpetual Contracts
      </h2>
      <p>
        A perpetual contracts exchange that <br /> mining through holding positions
      </p>
      <aside>
        <Button dark to="https://docs.derify.finance/whitepaper/introduction">
          Learn More
        </Button>
        <Button to="https://derify.exchange/">Launch App</Button>
      </aside>
    </section>
  )
}

export default Banner
