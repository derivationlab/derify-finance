import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Marquee from "react-fast-marquee"

import Button from '@@/common/Button'
import Image from '@@/common/Image'

const list = [...new Array(10)]

const DEXaas: FC = () => {
  const { t } = useTranslation('Home')
  return (
    <>
      <section className="web-home-dexaas">
        <main>
          <h2 dangerouslySetInnerHTML={{__html: t('DEXaas.Title')}} />
          <p>{t('DEXaas.Info')}</p>
          <aside>
            <Button dark to="https://docs.derify.finance/whitepaper/community-and-governance/broker">
              {t('DEXaas.LearnMore')}
            </Button>
            <Button to="https://derify.exchange/broker">{t('DEXaas.ApplyBroker')}</Button>
          </aside>
        </main>
      </section>
      <section className="web-home-dexaas-logos">
          <Marquee gradient={false} pauseOnHover>
            {list.map((_, index) => (
              <Image key={index} src={`website/partner/${index + 1}.png`} alt="" />
            ))}
          </Marquee>
      </section>
    </>
  )
}

export default DEXaas
