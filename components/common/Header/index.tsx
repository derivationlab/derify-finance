import { FC, useMemo, useEffect, useRef, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useWindowScroll, useLockBodyScroll } from 'react-use'

import classNames from 'classnames'

import ALink from '@@/common/ALink'
import Image from '@@/common/Image'
import Button from '@@/common/Button'

const Header: FC = () => {
  const { t } = useTranslation('Home')
  const { y } = useWindowScroll()
  const [show, setShow] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<boolean>(0)

  const isTop = useMemo(() => y < 50, [y])

  const changeActiveFunc = (index: number) => {
    setActiveIndex(index === activeIndex ? 0 : index)
  }

  useLockBodyScroll(show)
  return (
    <>
      <header className={classNames('web-header', { 'web-header-top': isTop })}>
        <h1 className="web-logo"></h1>
        <div className="web-header-nav-menu" onClick={() => setShow(true)} />
        <nav className={classNames('web-header-nav', { open: show })}>
          <div className="web-header-nav-menu close" onClick={() => setShow(false)} />
          <ul>
            <li>
              <ALink to="/">{t('Nav.About')}</ALink>
            </li>
            <li>
              <ALink to="https://docs.derify.finance/">{t('Nav.Docs')}</ALink>
            </li>
            <li className={classNames({active: activeIndex === 1})}>
              <span onClick={() => changeActiveFunc(1)}>{t('Nav.Community')}</span>
              <ul>
                <li>
                  <Image src="website/icon/twitter.svg" />
                  <ALink to="https://twitter.com/DerifyProtocol">Twitter</ALink>
                </li>
                <li>
                  <Image src="website/icon/telegram.svg" />
                  <ALink to="https://t.me/DerifyProtocol_Official">Telegram</ALink>
                </li>
                <li>
                  <Image src="website/icon/discord.svg" />
                  <ALink to="https://discord.gg/kSR6tz2pdm">Discord</ALink>
                </li>
                <li>
                  <Image src="website/icon/medium.svg" />
                  <ALink to="https://derify.medium.com/">Medium</ALink>
                </li>
                <li>
                  <Image src="website/icon/github.svg" />
                  <ALink to="https://github.com/derivationlab">Github</ALink>
                </li>
              </ul>
            </li>
            <li>
              <ALink to="https://docs.derify.finance/derify-dao/overview">{t('Nav.DAO')}</ALink>
            </li>
            <li className={classNames({active: activeIndex === 2})}>
              <span onClick={() => changeActiveFunc(2)}>{t('Nav.DRFToken')}</span>
              <ul>
                <li>
                  <ALink to="https://apeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x89c1af791d7b4cf046dca8fa10a41dd2298a6a3f">
                    {t('Nav.Buy')}
                  </ALink>
                </li>
                <li>
                  <ALink to="https://derify.finance/stake">{t('Nav.Stake')}</ALink>
                </li>
                <li>
                  <ALink to="https://docs.derify.finance/drf-token/distribution-and-release">
                    {t('Nav.Distribution')}
                  </ALink>
                </li>
                <li>
                  <ALink to="https://docs.derify.finance/whitepaper/tokenomics">{t('Nav.Tokenomics')}</ALink>
                </li>
              </ul>
            </li>
            <Button size="mini" to="https://derify.exchange/">
              {t('Nav.Exchange')}
            </Button>
          </ul>
        </nav>
        <div className={classNames('web-header-nav-bg', { open: show })} onClick={() => setShow(false)} />
      </header>
      <div className={classNames('web-header-bg', { 'web-header-top': isTop })} />
      <div className="web-header-blank" />
    </>
  )
}

export default Header
