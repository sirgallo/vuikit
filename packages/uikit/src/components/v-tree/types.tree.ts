export interface TreeProps<T> {
  extractId: (node: T) => number
  fetchChildren: (node?: T) => Promise<T[]>
}

export interface TreeNodeProps<T> extends TreeProps<T> {
  node: T
}

export interface TreeDataProps<T> {
  data: T
}
