import { VisibleFormData } from '@/components/Scenario/SimpleUploader/types'
export interface UploadState {
  windowVisible: VisibleFormData
}
export default (): UploadState => {
  return {
    windowVisible: { visible: false } // 上传文件窗口
  }
}
