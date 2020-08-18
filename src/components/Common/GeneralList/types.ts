export interface Iconditions {
  page?: number
  size?: number
}

export interface IlistResType {
  code?: number,
  message?: string | null
  data: IlistData | null
}

export interface IlistData {
  page: number
  size: number
  list: any[]
}