import { FC, useState, useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import Image from '@@/common/Image'
import ALink from '@@/common/ALink'

const Community: FC = () => {
  const { t } = useTranslation('Home')
  const [init, setInit] = useState(true)
  const list: string[] = [
    'https://twitter.com/saeed_rhm/status/1530426745408655361',
    'https://twitter.com/NikkiBrothers14/status/1532215744192290816',
    'https://twitter.com/jayjang0901/status/1504663741190787075',
    'https://twitter.com/AndChoki/status/1502921067903344641',
    'https://twitter.com/prajnamita4/status/1502933654288277508',
    'https://t.me/DerifyProtocol_Official/29160',
    'https://t.me/DerifyProtocol_Official/27866',
    'https://t.me/DerifyProtocol_Official/27133'
  ]

  const swiperJsx = useMemo(() => {
    if (init) {
      return (
        <Swiper modules={[Pagination, Autoplay]} autoplay pagination>
          {list.map((url, index) => (
            <SwiperSlide key={index}>
              <ALink to={url}>
                <Image src={`website/comments/${index + 1}.jpg`} alt="Community" />
              </ALink>
            </SwiperSlide>
          ))}
        </Swiper>
      )
    }
    return null
  }, [init])

  return (
    <section className="web-home-community">
      <h2> {t('Community.Community')}</h2>
      <main>
        <section>
          <header>{t('Community.FollowUs')}</header>
          <ul>
            <li className="twitter">
              <ALink to="https://twitter.com/DerifyProtocol">Twitter</ALink>
            </li>
            <li className="telegram">
              <ALink to="https://t.me/DerifyProtocol_Official">Telegram</ALink>
            </li>
            <li className="discord">
              <ALink to="https://discord.gg/kSR6tz2pdm">Discord</ALink>
            </li>
            <li className="medium">
              <ALink to="https://derify.medium.com/">Medium</ALink>
            </li>
            <li className="github">
              <ALink to="https://github.com/derivationlab">Github</ALink>
            </li>
          </ul>
          <footer>
            <ALink to="https://discord.com/channels/822422051099902053/925690386104606720">
              {t('Community.Other')}
            </ALink>
          </footer>
        </section>
        <aside>{swiperJsx}</aside>
      </main>
    </section>
  )
}

export default Community
