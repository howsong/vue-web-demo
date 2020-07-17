<template>
  <div>
    <svg-icon svgName="edit" className="edit_icon" />
    <img src="../assets/icons/edit.svg" alt="" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'
import SingleEditList from '@/components/Common/SingleEdit/SingleEditList.vue'

Vue.use(Button)

@Component({
  components: {
    SingleEditList
  }
})
export default class Home extends Vue {
  private submit(formObj: object) {
    console.log(formObj, '提交参数')
  }
}
</script>

<style scoped lang="less">
.edit_icon {
  font-size: 14px;
}
</style>
