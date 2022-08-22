import React, { FC, useMemo, ImgHTMLAttributes } from 'react'
import classNames from 'classnames'
import { STATIC } from '@/config'

interface ImageProps {
  src: string
  className?: string
  alt?: string
  cover?: boolean
}

const Image: FC<ImageProps> = ({ cover, src, className, alt }) => {
  const memoSrc = useMemo(
    () => (/^https?:\/\//.test(src ?? '') || /^data:/.test(src ?? '') ? src : `${STATIC}${src}`),
    [src]
  )
  if (cover) {
    return <div className={classNames('web-image', className)} style={{ backgroundImage: `url(${memoSrc})` }}></div>
  }
  return <img src={memoSrc} alt={alt ?? ''} />
}

export default Image
