import { FC, ReactNode, useMemo } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface Props {
  type?: 'default' | 'line'
  dark?: boolean
  size?: 'default' | 'small' | 'mini'
  children: ReactNode
  onClick?: (e: any) => void
  to?: string
}

const Button: FC<Props> = ({ type, dark, size, children, onClick, to }) => {
  const router = useRouter()

  const isHref = useMemo(() => /^https?:\/\//.test(to ?? ''), [to])

  const handleClick = (e: any): void => {
    if (to) {
      isHref ? window.open(to) : router.push(to)
    } else {
      onClick?.(e)
    }
  }

  return (
    <button
      className={classNames('web-button', `web-button-size-${size}`, `web-button-type-${type}`, {
        'web-button-dark': dark
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  dark: false,
  size: 'default'
}

export default Button
