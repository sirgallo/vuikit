export interface ListProps<T> {
  items: T[]
  extractKeyFn: (item: T) => string
  icon?: string
}
