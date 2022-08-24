import { FC, Fragment } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Marquee from "react-fast-marquee"

import Button from '@@/common/Button'
import Image from '@@/common/Image'
import AnimateBox from '@@/common/AnimateBox'

const list = [...new Array(10)]

const DEXaas: FC = () => {
  const { t } = useTranslation('Home')
  return (
    <>
      <section className="web-home-dexaas">
        <main>
          <AnimateBox tag="h2" type="fadeInLeft">
            <span dangerouslySetInnerHTML={{__html: t('DEXaas.Title')}} />
          </AnimateBox>
          <AnimateBox tag="p" type="fadeInLeft">{t('DEXaas.Info')}</AnimateBox>
          <AnimateBox tag="aside" type="fadeInLeft">
            <Button dark to="https://docs.derify.finance/whitepaper/community-and-governance/broker">
              {t('DEXaas.LearnMore')}
            </Button>
            <Button to="https://derify.exchange/broker">{t('DEXaas.ApplyBroker')}</Button>
          </AnimateBox>
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
