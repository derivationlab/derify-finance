import type { FC } from 'react'
import useTranslation from 'next-translate/useTranslation'

import ALink from '@@/common/ALink'
import Button from '@@/common/Button'

const Header: FC = () => {
  const { t } = useTranslation('Home')
  return (
    <header className="web-header">
      <h1 className="web-logo"></h1>
      <nav className="web-header-nav">
        <ul>
          <li>
            <span>{t('Nav.About')}</span>
          </li>
          <li>
            <ALink to="https://docs.derify.finance/">{t('Nav.Docs')}</ALink>
          </li>
          <li>
            <span>{t('Nav.Community')}</span>
            <ul>
              <li>
                <ALink to="https://twitter.com/DerifyProtocol">Twitter</ALink>
              </li>
              <li>
                <ALink to="https://t.me/DerifyProtocol_Official">Telegram</ALink>
              </li>
              <li>
                <ALink to="https://discord.gg/kSR6tz2pdm">Discord</ALink>
              </li>
              <li>
                <ALink to="https://derify.medium.com/">Medium</ALink>
              </li>
              <li>
                <ALink to="https://github.com/derivationlab">Github</ALink>
              </li>
            </ul>
          </li>
          <li>
            <ALink to="https://docs.derify.finance/derify-dao/overview">{t('Nav.DAO')}</ALink>
          </li>
          <li>
            <span>{t('Nav.DRFToken')}</span>
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
                <ALink to="https://docs.derify.finance/drf-token/distribution-and-release">{t('Nav.Distribution')}</ALink>
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
    </header>
  )
}

export default Header
