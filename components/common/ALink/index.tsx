import type { FC, ReactNode } from 'react'

interface Props {
  to: string
  className?: string
  children: ReactNode
}

const Button: FC<Props> = ({ to, className, children }) => {
  return (
    <a href={to} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Button
