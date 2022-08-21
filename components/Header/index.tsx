import type { FC } from 'react'
import ALink from '@/components/ALink'

const Header: FC = () => {
  return (
    <header className="web-header">
      <h1 className="web-logo"></h1>
      <nav className="web-header-nav">
        <ul>
          <li>
            <span>About</span>
          </li>
          <li>
            <ALink to="https://docs.derify.finance/">Docs</ALink>
          </li>
          <li>
            <span>Community</span>
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
            <ALink to="https://docs.derify.finance/derify-dao/overview">DAO</ALink>
          </li>
          <li>
            <span>DRF Token</span>
            <ul>
              <li>
                <ALink to="https://apeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x89c1af791d7b4cf046dca8fa10a41dd2298a6a3f">
                  Buy
                </ALink>
              </li>
              <li>
                <ALink to="https://derify.finance/stake">stake</ALink>
              </li>
              <li>
                <ALink to="https://docs.derify.finance/drf-token/distribution-and-release">Distribution</ALink>
              </li>
              <li>
                <ALink to="https://docs.derify.finance/whitepaper/tokenomics">Tokenomics</ALink>
              </li>
            </ul>
          </li>
          <button>
            <ALink to="https://derify.exchange/">Exchange</ALink>
          </button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
