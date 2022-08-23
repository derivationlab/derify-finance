import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

const Roadmap: FC = () => {
  const { t } = useTranslation('Home')
  const list: { quarter: string; item: string[] }[] = [
    {
      quarter: t('Roadmap.Name1'),
      item: [t('Roadmap.Name1Sub1'), t('Roadmap.Name1Sub2'), t('Roadmap.Name1Sub3'), t('Roadmap.Name1Sub4')]
    },
    {
      quarter: t('Roadmap.Name2'),
      item: [t('Roadmap.Name2Sub1'), t('Roadmap.Name2Sub2'), t('Roadmap.Name2Sub3'), t('Roadmap.Name2Sub4')]
    },
    {
      quarter: t('Roadmap.Name3'),
      item: [
        t('Roadmap.Name3Sub1'),
        t('Roadmap.Name3Sub2'),
        t('Roadmap.Name3Sub3'),
        t('Roadmap.Name3Sub4'),
        t('Roadmap.Name3Sub5')
      ]
    },
    {
      quarter: t('Roadmap.Name4'),
      item: [
        t('Roadmap.Name4Sub1'),
        t('Roadmap.Name4Sub2'),
        t('Roadmap.Name4Sub3'),
        t('Roadmap.Name4Sub4'),
        t('Roadmap.Name4Sub5'),
        t('Roadmap.Name4Sub6')
      ]
    },
    {
      quarter: t('Roadmap.Name5'),
      item: [
        t('Roadmap.Name5Sub1'),
        t('Roadmap.Name5Sub2'),
        t('Roadmap.Name5Sub3'),
        t('Roadmap.Name5Sub4'),
        t('Roadmap.Name5Sub5')
      ]
    },
    {
      quarter: t('Roadmap.Name6'),
      item: [t('Roadmap.Name6Sub1'), t('Roadmap.Name6Sub2'), t('Roadmap.Name6Sub3'), t('Roadmap.Name6Sub4')]
    },
    {
      quarter: t('Roadmap.Name7'),
      item: [t('Roadmap.Name7Sub1'), t('Roadmap.Name7Sub2'), t('Roadmap.Name7Sub3'), t('Roadmap.Name7Sub4')]
    }
  ]
  return (
    <section className="web-home-roadmap">
      <h2>{t('Roadmap.Title')}</h2>
      {list.map(({ quarter, item }, index) => (
        <section className="web-home-roadmap-item" key={quarter}>
          <header>{quarter}</header>
          <ul>
            {item.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}

export default Roadmap
