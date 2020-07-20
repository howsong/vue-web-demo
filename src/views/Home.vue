<template>
  <div>
    <svg-icon svgName="edit" className="edit_icon" />
    <NoticeMusic />
    <infinite-sroll-list />
    <next-tick-demo />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SingleEditList from '@/components/Common/SingleEdit/SingleEditList.vue'
import NoticeMusic from '@/components/Common/Notice/NoticeMusic.vue'
import InfiniteSrollList from '@/components/ElementDemos/InfiniteSrollList.vue'
import NextTickDemo from '@/components/Common/NextTickDemo.vue'

@Component({
  components: {
    SingleEditList,
    NoticeMusic,
    InfiniteSrollList,
    NextTickDemo
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
