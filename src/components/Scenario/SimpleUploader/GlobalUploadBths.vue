<!--
* @description 全局上传按钮
* @fileName GlobalUploadBths.vue
* @author howsong
* @date 2020/08/19 15:46:09
!-->
<template>
  <div>
    <el-button @click="handleUpload(IDS.FILE_BTN)">上传文件</el-button>
    <el-button @click="handleUpload(IDS.IMAGE_BTN)">上传图片</el-button>
    <el-button @click="handleUpload(IDS.FOLDER_BTN)">上传文件夹</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Bus from '@/components/Scenario/SimpleUploader/Bus'
import { Button } from 'element-ui'
import { UPLOADER_IDS } from '@/components/Scenario/SimpleUploader/GlobalUploader.vue'
Vue.use(Button)
@Component
export default class GlobalUploadBths extends Vue {
  private readonly IDS = UPLOADER_IDS
  private mounted() {
    // 文件选择后的回调
    Bus.$on('fileAdded', () => {
      console.log('文件已选择')
    })
    // 文件上传成功的回调
    Bus.$on('fileSuccess', () => {
      console.log('文件上传成功')
    })
  }
  private handleUpload(bthID: string) {
    Bus.$emit('openFileUploader', { bthID })
  }
  private destroyed() {
    Bus.$off('fileAdded')
    Bus.$off('fileSuccess')
  }
}
</script>

<style scoped lang="less"></style>
