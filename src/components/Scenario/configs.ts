import { IcardItem } from '@/components/Scenario/types'

export enum LINK_IDS {
  S001 = 'S001',
  S002 = 'S002'
}

export const cardData: IcardItem[] = [
  {
    linkId: LINK_IDS.S001,
    title: '文件上传',
    describe: 'vue-simple-uploader实现单文件上传、切片上传、文件夹上传'
  },
  { linkId: LINK_IDS.S002, title: '无限列表' },
  { linkId: '2', title: '业务场景3' },
  { linkId: '3', title: '业务场景4' },
  { linkId: '4', title: '业务场景5' },
  { linkId: '5', title: '业务场景6' }
]
