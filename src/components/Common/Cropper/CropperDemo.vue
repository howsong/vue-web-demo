<!--
* @description 
* @fileName CropperDemo.vue
* @author howsong
* @date 2020/10/23 15:08:51
!-->
<template>
  <div>
    <el-upload accept="image/*" action="" :on-change="fileChange" :show-file-list="false">
      <el-button>上传图片</el-button>
    </el-upload>
    <cropper-modal :visibleData="cropperVisible" :img="img" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button, Upload } from 'element-ui'
import CropperModal from './CropperModal.vue'
import { VisibleData } from '@/components/Common/Dailog/types'
Vue.use(Button)
Vue.use(Upload)
@Component({
  components: {
    CropperModal
  }
})
export default class CropperDemo extends Vue {
  private cropperVisible: VisibleData = { visible: false }
  private openCropper() {
    this.cropperVisible.visible = true
  }
  private img: any = ''
  private fileChange(file: any) {
    this.img = window.URL.createObjectURL(file.raw)
    this.cropperVisible.visible = true
  }
}
</script>

<style scoped lang="less"></style>
