export interface DemoListItem {
  id: number
  title: string
}
export interface ListData {
  page: number
  size: number
  total: number
  list: DemoListItem[]
}
