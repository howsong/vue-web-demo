<!--
* @description 全局上传组件
* @fileName GlobalUploader.vue
* @author howsong
* @date 2020/08/19 15:58:35
!-->
<template>
  <uploader
    :ref="IDS.UPLOADER"
    :options="options"
    :file-status-text="statusText"
    @file-added="onFileAdded"
    @file-success="onFileSuccess"
  >
    <uploader-unsupport style="display:none"></uploader-unsupport>
    <uploader-drop style="display:none">
      <p>Drop files here to upload or</p>
      <uploader-btn :id="IDS.FILE_BTN" :ref="IDS.FILE_BTN">select files</uploader-btn>
      <uploader-btn :id="IDS.IMAGE_BTN" :ref="IDS.IMAGE_BTN" :attrs="attrs">
        select images
      </uploader-btn>
      <uploader-btn :id="IDS.FOLDER_BTN" :ref="IDS.FOLDER_BTN" :directory="true">
        select folder
      </uploader-btn>
    </uploader-drop>
    <!-- 文件列表 -->
    <uploader-list></uploader-list>
  </uploader>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Uploader from 'vue-simple-uploader'
import Bus from '@/components/Scenario/SimpleUploader/Bus'
import { namespace } from 'vuex-class'
import { MUT_TYPES } from '@/store/upload/mutations'
Vue.use(Uploader)

const uploadModule = namespace('upload')

export enum UPLOADER_IDS {
  UPLOADER = 'globalUploader',
  FILE_BTN = 'globalFileBtn',
  IMAGE_BTN = 'globalImageBtn',
  FOLDER_BTN = 'globalFolderBtn'
}

export interface QueryType {
  bthID: string
}

@Component
export default class GlobalUploader extends Vue {
  @uploadModule.Mutation(MUT_TYPES.SET_UPLOAD__WINDOW_VISIBLE) setWindowVisible!: Function
  private readonly IDS = UPLOADER_IDS
  private options = {
    target: '', // 上传地址
    testChunks: false, // 是否开启服务器分片校验
    chunkSize: 1024 * 1024 * 5, // 切片大小（单位字节）
    maxChunkRetries: 3 // 最大失败重试上传次数
    // processParams(params: any, file: any) {
    //   //每一次分片传给后台的参数，params是该方法返回的形参，包含分片信息
    //   return {
    //     //返回一个对象，会添加到每一个分片的请求参数里面
    //     name: params.filename,
    //     totalChunks: params.totalChunks, // 切片总数
    //     currentChunks: params.chunkNumber - 1, // 当前切片
    //     guid: getIdentifier(file, params.identifier) // 会话ID
    //   }
    // }
  }
  private statusText = {
    success: '上传成功',
    error: '上传失败',
    uploading: '上传中',
    paused: '暂停中',
    waiting: '等待中'
  }
  private readonly attrs = { accept: 'image/*' }

  private onFileAdded() {
    this.setWindowVisible(true)
    // file['CUSTOM_ID'] = `${new Date().getTime()}${this.userCode || ''}`
    Bus.$emit('fileAdded')
  }
  // 上传成功后的回调
  private onFileSuccess() {
    //
  }

  private mounted() {
    Bus.$on('openFileUploader', (query: QueryType) => {
      const id = query.bthID
      const ele = document.getElementById(id)
      ele && ele.click()
    })
  }
}
</script>

<style scoped lang="less"></style>
