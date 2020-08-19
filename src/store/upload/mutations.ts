import { UploadState } from './state'
export enum MUT_TYPES {
  SET_UPLOAD__WINDOW_VISIBLE = 'SET_UPLOAD__WINDOW_VISIBLE'
}
export default {
  [MUT_TYPES.SET_UPLOAD__WINDOW_VISIBLE](state: UploadState, visible: boolean) {
    state.windowVisible.visible = visible
  }
}
