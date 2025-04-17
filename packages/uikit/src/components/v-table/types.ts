export interface TableProps<T extends object> {
  rows: T[]
  striped?: boolean
  bordered?: boolean
}

export interface TableEmits<T extends object> {
  (e: 'select', row: T): void
}

export type CursorType = 'default' | 'pointer'

export const CURSOR_MAP: { [k in CursorType]: k } = {
  default: 'default',
  pointer: 'pointer',
}
