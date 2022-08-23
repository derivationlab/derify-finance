import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Button from '@@/common/Button'
import Image from '@@/common/Image'

const list = [...new Array(10)]

const DEXaas: FC = () => {
  const { t } = useTranslation('Home')
  return (
    <>
      <section className="web-home-dexaas">
        <h2>{t('DEXaas.Title')}</h2>
        <p>{t('DEXaas.Info')}</p>
        <aside>
          <Button dark to="https://docs.derify.finance/whitepaper/community-and-governance/broker">
            {t('DEXaas.LearnMore')}
          </Button>
          <Button to="https://derify.exchange/broker">{t('DEXaas.ApplyBroker')}</Button>
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
