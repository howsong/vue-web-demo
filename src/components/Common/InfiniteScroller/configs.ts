import { DemoListItem, ListData } from './types'
const data: DemoListItem[] = [
  { id: 0, title: 'apple0' },
  { id: 1, title: 'apple1' },
  { id: 2, title: 'apple2' },
  { id: 3, title: 'apple3' },
  { id: 4, title: 'apple4' },
  { id: 5, title: 'apple5' },
  { id: 6, title: 'apple6' },
  { id: 7, title: 'apple7' },
  { id: 8, title: 'apple8' },
  { id: 9, title: 'apple9' },
  { id: 10, title: 'apple10' },
  { id: 11, title: 'apple11' },
  { id: 12, title: 'apple12' },
  { id: 13, title: 'apple13' },
  { id: 14, title: 'apple14' },
  { id: 15, title: 'apple15' },
  { id: 16, title: 'apple16' },
  { id: 17, title: 'apple17' },
  { id: 18, title: 'apple18' },
  { id: 19, title: 'apple19' },
  { id: 20, title: 'apple20' }
]

export const getListPromise = (params: any = {}): any => {
  const { page, size } = params
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      const start = (page - 1) * size
      const end = page * size
      //console.log(data.slice(start, end))
      const listData = {
        total: Math.ceil(data.length / size),
        page,
        size,
        list: data.slice(start, end)
      }
      resolve(listData)
      clearTimeout(timer)
    }, 1000)
  })
}
