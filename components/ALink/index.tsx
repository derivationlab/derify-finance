import type { FC, ReactNode } from 'react'

interface Props {
  to: string
  children: ReactNode
}

const Button: FC<Props> = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Button
