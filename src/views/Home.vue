<template>
  <div>
    <svg-icon svgName="edit" className="edit_icon" />
    <NoticeMusic />
    <next-tick-demo />
    <observe-element />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SingleEditList from '@/components/Common/SingleEdit/SingleEditList.vue'
import NoticeMusic from '@/components/Common/Notice/NoticeMusic.vue'
import NextTickDemo from '@/components/Common/NextTickDemo.vue'
import ObserveElement from '@/components/Common/Notice/ObserveElement.vue'

@Component({
  components: {
    SingleEditList,
    NoticeMusic,
    NextTickDemo,
    ObserveElement
  }
})
export default class Home extends Vue {
  private submit(formObj: object) {
    console.log(formObj, '提交参数')
  }

  private created() {
    console.log('parent created')
  }
  private mounted() {
    console.log('parent mounted')
  }
}
</script>

<style scoped lang="less">
.edit_icon {
  font-size: 14px;
  width: 10px;
  height: 10px;
}
</style>
