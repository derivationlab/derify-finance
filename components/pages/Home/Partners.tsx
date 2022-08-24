import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Image from '@@/common/Image'
import AnimateBox from '@@/common/AnimateBox'

const Partners: FC = () => {
  const { t } = useTranslation('Home')
  const list = [...new Array(15)]
  return (
    <section className="web-home-partners">
      <h2>{t('Partners')}</h2>
      <ul>
        {list.map((_, index) => (
          <AnimateBox tag="li" type="fadeInUp" key={index}>
            <Image src={`website/partner/friends/${index + 1}.png`} />
            <Image src={`website/partner/friends/${index + 1}-active.png`} />
          </AnimateBox>
        ))}
      </ul>
    </section>
  )
}

export default Partners
