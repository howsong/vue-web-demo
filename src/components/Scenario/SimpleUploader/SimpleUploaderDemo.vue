<!--
* @description 简单示例
* @fileName SimpleUploaderDemo.vue
* @author howsong
* @date 2020/08/18 20:20:38
!-->
<template>
  <uploader :options="options" :file-status-text="statusText" class="uploader_simple_demo">
    <uploader-unsupport></uploader-unsupport>
    <uploader-btn>选择文件</uploader-btn>
    <uploader-btn :directory="true">选择文件夹</uploader-btn>
    <uploader-btn :attrs="attrs">选择图片</uploader-btn>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Uploader from 'vue-simple-uploader'
Vue.use(Uploader)
@Component
export default class SimpleUploaderDemo extends Vue {
  private options = {
    target: '',
    testChunks: false, // 是否走服务器校验
    chunkSize: 1024 * 1024 * 2, // 切片大小
    simultaneousUploads: 3 // 并发上传数
  }
  private readonly attrs = { accept: 'image/*' }
  private statusText = {
    success: '上传成功',
    error: '上传失败',
    uploading: '上传中',
    paused: '暂停中',
    waiting: '等待中'
  }
}
</script>

<style scoped lang="less">
.uploader_simple_demo .uploader-btn {
  margin-right: 4px;
}
</style>
