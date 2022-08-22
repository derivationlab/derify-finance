import type { FC, ReactNode } from "react";

interface Props {
  type: 'default' | 'line'
  dark: boolean
  size: 'default' | 'small' | 'mini'
  children: ReactNode
}

const Button: FC<Props> = ({ type, dark, size, children }) => {
  return (
    <button disabled>{children}</button>
  )
}

export default Button
