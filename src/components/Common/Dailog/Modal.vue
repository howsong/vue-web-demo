<!--
* @description 
* @fileName Modal.vue
* @author howsong
* @date 2020/10/23 11:48:19
!-->
<template>
  <el-dialog
    :title="title"
    :visible.sync="visibleData.visible"
    :closeOnClickModal="closeOnClickModal"
    append-to-body
  >
    <slot v-if="visibleData.visible || !destroyOnClose"></slot>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Dialog } from 'element-ui'
import { VisibleData } from './types'
Vue.use(Dialog)
@Component
export default class Modal extends Vue {
  @Prop() visibleData!: VisibleData
  @Prop({ type: String, default: '' }) title!: string // 弹框标题
  @Prop({ type: Boolean, default: true }) destroyOnClose!: boolean // 关闭弹框销毁内部组件
  @Prop({ type: Boolean, default: false }) closeOnClickModal!: boolean // 点击蒙层关闭弹框
  @Prop({ type: Boolean, default: false }) appendToBody!: boolean // 是否添加到body元素上
  get visible() {
    return this.visibleData.visible
  }
  @Watch('visible', { deep: true, immediate: false })
  onVisible(v: boolean) {
    // 弹框关闭触发回调
    !v && this.$emit('closeUpdate')
  }
}
</script>

<style scoped lang="less"></style>
