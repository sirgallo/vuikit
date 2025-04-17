import { type ButtonProps, defaultButtonProps } from '../v-button/types.js'

type DropdownButtonProps = Omit<ButtonProps<boolean>, 'option' | 'action'>

export interface DropdownOption {
  label: string
  action: () => string
  icon?: string
  route?: `/${string}`
}

export interface DropdownProps {
  selection?: string
  button: DropdownButtonProps
  options: DropdownOption[]
}

export interface DropdownEmits {
  (e: 'update:selection', selection: string): void
}

export const defaultDropdownProps: { button: DropdownButtonProps } = {
  button: defaultButtonProps as DropdownButtonProps,
}
