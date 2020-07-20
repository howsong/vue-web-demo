<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
      <li v-for="(i, index) in count" class="list-item" :key="index">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { InfiniteScroll } from 'element-ui'

Vue.use(InfiniteScroll)

@Component
export default class InfiniteSrollList extends Vue {
  private count = 10
  private loading = false

  get noMore() {
    return this.count >= 20
  }
  get disabled() {
    return this.loading || this.noMore
  }

  private load() {
    this.loading = true
    setTimeout(() => {
      this.count += 2
      this.loading = false
    }, 2000)
  }
}
</script>
<style lang="less" scoped>
.infinite-list-wrapper {
  height: 100px;
  background-color: green;
}
</style>
