import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import Image from '@@/common/Image'
import ALink from '@@/common/ALink'

const Community: FC = () => {
  const { t } = useTranslation('Home')
  const list = [...new Array(8)]
  return (
    <section className="web-home-community">
      <h2> {t('Community.Community')}</h2>
      <section>
        <header>{t('Community.FollowUs')}</header>
        <ul>
          <li className="twitter">
            <ALink to="https://twitter.com/DerifyProtocol">Twitter</ALink>
          </li>
          <li className="telegram">
            <ALink to="https://t.me/DerifyProtocol_Official">Telegram</ALink>
          </li>
          <li className="tiscord">
            <ALink to="https://discord.gg/kSR6tz2pdm">Discord</ALink>
          </li>
          <li className="tedium">
            <ALink to="https://derify.medium.com/">Medium</ALink>
          </li>
          <li className="tithub">
            <ALink to="https://github.com/derivationlab">Github</ALink>
          </li>
        </ul>
        <footer>
          <ALink to="https://discord.com/channels/822422051099902053/925690386104606720">{t('Community.Other')}</ALink>
        </footer>
      </section>
      <aside>
        <ul>
          {list.map((_, index) => (
            <li key={index}>
              <Image src={`website/comments/${index + 1}.jpg`} />
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default Community
