import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '@@/common/ALink'

const Features: FC = () => {
  const { t } = useTranslation('Home')
  const list: { name: string; info: string; link: string }[] = [
    {
      name: t('Features.Name1'),
      info: t('Features.Info1'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/position-mining'
    },
    {
      name: t('Features.Name2'),
      info: t('Features.Info2'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/risk-control/position-change-fee'
    },
    {
      name: t('Features.Name3'),
      info: t('Features.Info3'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/indexes'
    },
    {
      name: t('Features.Name4'),
      info: t('Features.Info4'),
      link: 'https://docs.derify.finance/derify-dao/overview'
    },
    {
      name: t('Features.Name5'),
      info: t('Features.Info5'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/indexes'
    },
    {
      name: t('Features.Name6'),
      info: t('Features.Info6'),
      link: 'https://docs.derify.finance/whitepaper/implementation/side-chain-rollup-and-cross-chain'
    }
  ]
  return (
    <section className="web-home-features">
      <h2></h2>
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
