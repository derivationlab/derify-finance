import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '@@/common/ALink'
import Image from '@@/common/Image'

const Dao: FC = () => {
  const { t } = useTranslation('Home')
  const list: { name: string; info: string; link: string }[] = [
    {
      name: t('Dao.Name1'),
      info: t('Dao.Info1'),
      link: 'https://docs.derify.finance/derify-dao/execution-committee/marketing-and-promotion#broker-bd'
    },
    {
      name: t('Dao.Name2'),
      info: t('Dao.Info2'),
      link: 'https://docs.derify.finance/derify-dao/execution-committee/marketing-and-promotion#community-manager-multi-language'
    },
    {
      name: t('Dao.Name3'),
      info: t('Dao.Info3'),
      link: 'https://docs.derify.finance/derify-dao/execution-committee/marketing-and-promotion#content-creation'
    },
    {
      name: t('Dao.Name4'),
      info: t('Dao.Info4'),
      link: 'https://docs.derify.finance/derify-dao/execution-committee'
    }
  ]
  return (
    <>
      <section className="web-home-dao">
        <h2>{t('Dao.Title')}</h2>
        <ul>
          {list.map(({ name, info, link }, index) => (
            <li key={index}>
              <ALink to={link}>
                <Image src={`website/dao/${index + 1}.svg`} alt={name} />
                <h4>{name}</h4>
                <p>{info}</p>
              </ALink>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Dao
