import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Button from '@@/common/Button'

const Banner: FC = () => {
  const { t } = useTranslation('Home')
  return (
    <section className="web-home-banner">
      <h2>{t('Banner.Title')}</h2>
      <p>{t('Banner.Info')}</p>
      <aside>
        <Button dark to="https://docs.derify.finance/whitepaper/introduction">
          {t('Banner.LearnMore')}
        </Button>
        <Button to="https://derify.exchange/">{t('Banner.LaunchApp')}</Button>
      </aside>
    </section>
  )
}

export default Banner
