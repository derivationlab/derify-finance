import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

const Roadmap: FC = () => {
  const { t } = useTranslation('Home')
  const list: { quarter: string; tag: string; item: string[] }[] = [
    {
      quarter: t('Roadmap.Name1'),
      tag: t('Roadmap.Name1Sub1'),
      item: [ t('Roadmap.Name1Sub2'), t('Roadmap.Name1Sub3'), t('Roadmap.Name1Sub4')]
    },
    {
      quarter: t('Roadmap.Name2'),
      tag: t('Roadmap.Name2Sub1'),
      item: [ t('Roadmap.Name2Sub2'), t('Roadmap.Name2Sub3'), t('Roadmap.Name2Sub4'), t('Roadmap.Name2Sub5')]
    },
    {
      quarter: t('Roadmap.Name4'),
      tag: t('Roadmap.Name4Sub1'),
      item: [
        t('Roadmap.Name4Sub2'),
        t('Roadmap.Name4Sub3'),
        t('Roadmap.Name4Sub4'),
        t('Roadmap.Name4Sub5'),
        t('Roadmap.Name4Sub6'),
      ]
    },
    {
      quarter: t('Roadmap.Name5'),
      tag: t('Roadmap.Name5Sub1'),
      item: [
        t('Roadmap.Name5Sub2'),
        t('Roadmap.Name5Sub3'),
        t('Roadmap.Name5Sub4'),
        t('Roadmap.Name5Sub5')
      ]
    },
    {
      quarter: t('Roadmap.Name6'),
      tag: t('Roadmap.Name6Sub1'),
      item: [
        t('Roadmap.Name6Sub2'),
        t('Roadmap.Name6Sub3'),
        t('Roadmap.Name6Sub4')
      ]
    },
    {
      quarter: t('Roadmap.Name7'),
      tag: t('Roadmap.Name7Sub1'),
      item: [
        t('Roadmap.Name7Sub2'),
        t('Roadmap.Name7Sub3')
      ]
    },
    {
      quarter: t('Roadmap.Name8'),
      tag: t('Roadmap.Name8Sub1'),
      item: [
        t('Roadmap.Name8Sub2'),
        t('Roadmap.Name8Sub3'),
        t('Roadmap.Name8Sub4')
      ]
    },
    {
      quarter: t('Roadmap.Name9'),
      tag: t('Roadmap.Name9Sub1'),
      item: [ t('Roadmap.Name9Sub2'), t('Roadmap.Name9Sub3'), t('Roadmap.Name9Sub4')]
    }
  ]
  return (
    <>
      <header className="web-home-roadmap-header">
        <h2>{t('Roadmap.Title')}</h2>
      </header>
      <section className="web-home-roadmap">
        <hr/>
        <main>
          {list.map(({ quarter,tag, item }, index) => (
            <section className="web-home-roadmap-item" key={quarter}>
              <h3>
                {quarter}
                <small>{tag}</small>
              </h3>
              <ul>
                {item.map((content) => (
                  <li key={content}>{content}</li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </section>
    </>
  )
}

export default Roadmap
