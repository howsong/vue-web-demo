<template>
  <div>
    <infinite-scroller key-field="id" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import InfiniteScroller from '@/components/Common/InfiniteScroller/InfiniteScroller.vue'

@Component({
  components: {
    InfiniteScroller
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
