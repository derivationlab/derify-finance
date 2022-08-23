import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '@@/common/ALink'

const Features: FC = () => {
  const { t } = useTranslation('Home')
  const list: { name: string; info: string; link: string; className: string }[] = [
    {
      name: t('Features.Name1'),
      info: t('Features.Info1'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/position-mining',
      className: 'animate__animated animate__fadeInTopLeft'
    },
    {
      name: t('Features.Name2'),
      info: t('Features.Info2'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/risk-control/position-change-fee',
      className: 'animate__animated animate__fadeInLeft'
    },
    {
      name: t('Features.Name3'),
      info: t('Features.Info3'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/indexes',
      className: 'animate__animated animate__fadeInTopRight'
    },
    {
      name: t('Features.Name4'),
      info: t('Features.Info4'),
      link: 'https://docs.derify.finance/derify-dao/overview',
      className: 'animate__animated animate__fadeInBottomLeft'
    },
    {
      name: t('Features.Name5'),
      info: t('Features.Info5'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/indexes',
      className: 'animate__animated animate__fadeInRight'
    },
    {
      name: t('Features.Name6'),
      info: t('Features.Info6'),
      link: 'https://docs.derify.finance/whitepaper/implementation/side-chain-rollup-and-cross-chain',
      className: 'animate__animated animate__fadeInBottomRight'
    }
  ]
  return (
    <section className="web-home-features">
      <div className="web-home-features-inner">
        <h2>{t('Features.Title')}</h2>
        <ul>
          {list.map(({ name, info, link, className }, index) => (
            <li key={index} className={className}>
              <main>
                <h4>{name}</h4>
                <p>{info}</p>
                <ALink to={link}>Go</ALink>
              </main>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
