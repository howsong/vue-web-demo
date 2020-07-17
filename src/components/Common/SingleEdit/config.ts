// 单项表单限制
export interface IsingleConfig {
  fieldCode: string
  fieldName: string
  pageType: string
  propertyName: string
  fieldType: string
  fieldRequired: string
  weight: number
  fieldGroup: string
  fieldLimit: Ilimit
  options?: any[]
  entityCode?: null | string
}

// 字数限制类型
export interface Ilimit {
  fieldMin: null | number
  fieldMax: null | number
}

// 单个表单项类型
export interface IsingleFormData {
  content: string | null
  canEditor?: boolean
  haveSelect?: null | boolean
  fieldDTO: IsingleConfig
}

// 自定义表单类型
export enum FIELD_TYPES {
  INPUT = '10010001', // 文本
  INPUTNUMBER = '10010002', // 数字
  DATE = '10010003', // 日期类型
  SINGLE_SELECT = '10010004', // 单选
  MUTI_SELECT = '10010005' // 多项选择框
}
