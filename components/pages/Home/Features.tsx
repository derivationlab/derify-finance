import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '@@/common/ALink'
import AnimateBox from '@@/common/AnimateBox'

const Features: FC = () => {
  const { t } = useTranslation('Home')
  const list: { name: string; info: string; link: string; animate: string }[] = [
    {
      name: t('Features.Name1'),
      info: t('Features.Info1'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/position-mining',
      animate: 'fadeInTopLeft'
    },
    {
      name: t('Features.Name3'),
      info: t('Features.Info3'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/risk-control/position-change-fee',
      animate: 'fadeInLeft'
    },
    {
      name: t('Features.Name2'),
      info: t('Features.Info2'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/indexes',
      animate: 'fadeInTopRight'
    },
    {
      name: t('Features.Name6'),
      info: t('Features.Info6'),
      link: 'https://docs.derify.finance/derify-dao/overview',
      animate: 'fadeInBottomLeft'
    },
    {
      name: t('Features.Name4'),
      info: t('Features.Info4'),
      link: 'https://docs.derify.finance/whitepaper/mechanism/indexes',
      animate: 'fadeInRight'
    },
    {
      name: t('Features.Name5'),
      info: t('Features.Info5'),
      link: 'https://docs.derify.finance/whitepaper/implementation/side-chain-rollup-and-cross-chain',
      animate: 'fadeInBottomRight'
    }
  ]
  return (
    <section className="web-home-features">
      <div className="web-home-features-inner">
        <h2>{t('Features.Title')}</h2>
        <ul>
          {list.map(({ name, info, link, animate }, index) => (
            <AnimateBox tag="li" key={index} type={animate}>
              <main>
                <h4>{name}</h4>
                <p>{info}</p>
                <ALink to={link}>Go</ALink>
              </main>
            </AnimateBox>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
