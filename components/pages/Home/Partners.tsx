import { FC, ReactNode } from 'react'

import Image from '@@/common/Image'

const Partners: FC = () => {
  const list = [...new Array(15)]
  return (
    <section className="web-home-partners">
      <h2>Our partners</h2>
      <ul>
        {list.map((_, index) => (
          <li key={index}>
            <Image src={`website/partner/friends/${index}.png`} />
            <Image src={`website/partner/friends/${index}-active.png`} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Partners
