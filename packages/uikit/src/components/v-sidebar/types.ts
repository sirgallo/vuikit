import type { ButtonProps } from '../v-button/types.js'

type SidebarButtonProps = Omit<ButtonProps<any>, 'option' | 'action'>

export interface SidebarProps {
  button: SidebarButtonProps
  position?: 'left' | 'right'
}

export const defaultSidebarProps: Pick<SidebarProps, 'position'> = {
  position: 'right',
}
