import { FC, useState } from 'react'
import classNames from 'classnames'
import useTranslation from 'next-translate/useTranslation'

import ALink from '@@/common/ALink'

const SiteMap: FC = () => {
  const { t } = useTranslation('Home')
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const list: { name: string; children: { name: string; url: string }[] }[] = [
    {
      name: t('Other.Resources'),
      children: [
        { name: t('Other.Whitepaper'), url: 'https://docs.derify.finance/whitepaper/introduction' },
        { name: t('Other.AuditReport'), url: '' },
        { name: t('Other.SourceCode'), url: 'https://github.com/derivationlab' }
      ]
    },
    {
      name: t('Other.Product'),
      children: [
        { name: t('Other.Tutorial'), url: 'https://docs.derify.finance/getting-started/tutorial' },
        { name: t('Other.BasicKnowledge'), url: 'https://docs.derify.finance/getting-started/basic-knowledge' },
        { name: t('Other.FAQ'), url: 'https://docs.derify.finance/getting-started/faq' },
        { name: t('Other.Support'), url: 'https://discord.com/channels/822422051099902053/827112242449350686' }
      ]
    },
    {
      name: t('Other.DRFToken'),
      children: [
        {
          name: t('Other.BlockchainBrowser'),
          url: 'https://bscscan.com/token/0x89C1Af791d7B4cf046Dca8Fa10a41Dd2298A6a3F'
        },
        { name: t('Other.HowToBuy'), url: 'https://docs.derify.finance/drf-token/basic-info#purchase-drf' },
        { name: t('Other.Stake'), url: 'https://docs.derify.finance/drf-token/basic-info#staking' },
        { name: t('Other.Tokenomics'), url: 'https://docs.derify.finance/v/cn/whitepaper/tokenomics' }
      ]
    },
    {
      name: t('Other.Cooperation'),
      children: [
        { name: 'Telegram', url: 'https://t.me/jack8135' },
        { name: 'Discord', url: 'https://discord.com/channels/822422051099902053/977454935484551218' },
        { name: 'Email', url: 'mailto:contact@derify.org' }
      ]
    }
  ]

  const onActiveChange = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }
  return (
    <section className="web-home-sitemap">
      <main>
        {list.map(({ name, children }, index) => (
          <dl key={name} className={classNames({ active: activeIndex === index })}>
            <dt onClick={() => onActiveChange(index)}>{name}</dt>
            {children.map(({ name: cName, url }) => (
              <dd key={cName}>
                <ALink to={url}>{cName}</ALink>
              </dd>
            ))}
          </dl>
        ))}
      </main>
    </section>
  )
}

export default SiteMap
