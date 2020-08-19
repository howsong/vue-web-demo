<!--
* @description 上传实例
* @fileName UploaderExamples.vue
* @author howsong
* @date 2020/08/19 14:37:29
!-->
<template>
  <div>
    <h3 class="example_title">1、简单上传示例</h3>
    <SimpleUploaderDemo />
    <h3 class="example_title">2、下载窗口下载</h3>
    <GlobalUploadBths />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SimpleUploaderDemo from './SimpleUploaderDemo.vue'
import GlobalUploadBths from '@/components/Scenario/SimpleUploader/GlobalUploadBths.vue'
@Component({
  components: {
    SimpleUploaderDemo,
    GlobalUploadBths
  }
})
export default class UploaderExamples extends Vue {}
</script>

<style scoped lang="less">
.example_title {
  margin: 5px 0;
  font-size: 16px;
}
</style>
