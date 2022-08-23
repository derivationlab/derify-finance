import { FC, memo, useMemo, ReactNode, ElementType, useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer'
import classNames from 'classnames'
import {useEffectOnce} from 'react-use';

interface Props {
  children: ReactNode
  type: string
  tag: ElementType & string
}

const AnimateBox: FC<Props> = ({ children, type = '', tag }) => {
  const [inView, setInView] = useState(false)
  const [init, setInit] = useState(false)

  const className = useMemo(() => (inView ? `animate__${type}` : ''), [inView])

  useEffectOnce(() => {
    return () => {
      setTimeout(() => {
        setInit(true)
      }, 1000);
    }
  })

  const onChange = (inView: boolean, entry: any) => {
    setInView(inView)
  }
  if (!init) return null
  return (
    <InView
      as={tag}
      threshold={0.1}
      triggerOnce
      onChange={onChange}
      className={classNames('animate__animated', className)}
    >
      {children}
    </InView>
  )
}

export default memo(AnimateBox)
