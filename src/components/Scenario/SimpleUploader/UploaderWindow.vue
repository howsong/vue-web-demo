<!--
* @description 下载列表窗口
* @fileName GlobalUploadWindow.vue
* @author howsong
* @date 2020/08/09 11:29:57
!-->
<template>
  <div
    :class="[
      'upload_list_window',
      isMinimize ? 'minimize_model' : '',
      visibleData.visible ? 'visible' : ''
    ]"
  >
    <span class="operations_area">
      <i v-if="!isMinimize" class="minimize_icon operations_area_icon" @click="isMinimize = true" />
      <i v-else class="maxmize_icon operations_area_icon" @click="isMinimize = false" />
      <i class="el-icon-close operations_area_icon" @click="close" />
    </span>
    <div :class="['file_content', !isMinimize ? 'visible' : '']">
      <p class="upload_window_title">文件上传列表</p>
      <div style="padding: 5px">
        <GlobalUploader />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Icon } from 'element-ui'
import { namespace } from 'vuex-class'
import { MUT_TYPES } from '@/store/upload/mutations'
import { VisibleFormData } from './types'
import GlobalUploader from '@/components/Scenario/SimpleUploader/GlobalUploader.vue'
const uploadModule = namespace('upload')
Vue.use(Icon)

@Component({
  components: {
    GlobalUploader
  }
})
export default class GlobalUploadWindow extends Vue {
  @uploadModule.Mutation(MUT_TYPES.SET_UPLOAD__WINDOW_VISIBLE) setWindowVisible!: Function
  @uploadModule.State('windowVisible') visibleData!: VisibleFormData
  private isMinimize = false
  private close() {
    this.setWindowVisible(false)
  }
}
</script>

<style scoped lang="less">
.upload_list_window {
  position: fixed;
  bottom: 10px;
  right: 16px;
  z-index: 1500;
  display: none;
  width: 520px;
  height: 280px;
  padding: 12px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px 4px 0 0;
  &.minimize_model {
    width: 70px;
    height: 50px;
  }
  &.visible {
    display: block;
  }
}
.operations_area {
  position: absolute;
  top: 12px;
  right: 12px;
  .operations_area_icon {
    margin: 0 4px;
    cursor: pointer;
  }
  .minimize_icon {
    margin-bottom: 6px;
    display: inline-block;
    width: 10px;
    border: 1px solid #ccc;
  }
  .maxmize_icon {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 2px solid #ccc;
  }
}
.file_content {
  display: none;
  &.visible {
    display: block;
  }
}
</style>
