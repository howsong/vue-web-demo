<!--
* @description 表单底部按钮
* @fileName FormFooterBtns.vue
* @author howsong
* @date 2020/10/23 15:23:49
!-->
<template>
  <el-form-item class="footer_box">
    <slot>
      <el-button style="width:95px" @click="clickCancle">{{ cancleText }}</el-button>
      <el-button style="width:95px" type="primary" @click="clickOK">{{ okText }}</el-button>
    </slot>
  </el-form-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { FormItem, Button } from 'element-ui'
Vue.use(FormItem)
Vue.use(Button)
@Component
export default class FormFooterBtns extends Vue {
  @Prop({ type: String, default: '取消' }) cancleText!: string
  @Prop({ type: String, default: '确定' }) okText!: string
  private clickCancle() {
    this.$emit('handleCancle')
  }
  private clickOK() {
    this.$emit('handleOK')
  }
}
</script>

<style scoped lang="less">
.footer_box {
  text-align: right;
}
</style>
