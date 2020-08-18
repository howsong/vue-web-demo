<!--
* @description 队列弹框
* @fileName QueueModals.vue
* @author howsong
* @date 2020/08/03 15:09:42
!-->
<template>
  <el-dialog
    :visible.sync="data.visible"
    append-to-body
    :key="data.id"
    :close-on-click-modal="false"
    :title="title"
  >
    <div>{{ data.type }} {{ data.id }}</div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Dialog, Form, FormItem } from 'element-ui'
import { ImodalItem } from './configs'
import monent from 'moment'
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
@Component
export default class QueueModal extends Vue {
  @Prop(Object) data!: ImodalItem // 弹框的ID
  get title() {
    const time = monent(Number(this.data.id)).format('YYYY-MM-DD HH:mm:ss')
    return `创建表单${time}`
  }
}
</script>

<style scoped lang="less"></style>
