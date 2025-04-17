import type { TitleProps } from '../v-title/types.js'

interface NavTitle extends TitleProps {
  icon?: string
}

export interface NavProps {
  title: NavTitle
  routerLinks: { path: `/${string}`; label: string }[]
  style?: { [style: string]: string }
}
