<!--
* @description 裁剪弹框组件
* @fileName CropperModal.vue
* @author howsong
* @date 2020/10/23 12:06:09
!-->
<template>
  <general-modal title="图片裁剪" :visibleData="visibleData">
    <cropper-form v-on="$listeners" v-bind="{ ...$attrs, ...$props }" />
  </general-modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import GeneralModal from '@/components/Common/Dailog/Modal.vue'
import { VisibleData } from '@/components/Common/Dailog/types'
import CropperForm from './CropperForm.vue'
@Component({
  components: {
    GeneralModal,
    CropperForm
  }
})
export default class CropperModal extends Vue {
  @Prop() visibleData!: VisibleData
}
</script>

<style scoped lang="less"></style>
