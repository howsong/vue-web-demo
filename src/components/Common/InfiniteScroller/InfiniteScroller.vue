<!--
* @description 虚拟列表
* @fileName InfiniteScroller.vue
* @author howsong
* @date 2020/09/04 18:58:50
!-->
<template>
  <div
    class="list-wrap"
    ref="listWrap"
    @scroll="scrollListener"
    :style="{ height: `${viewHeight}px` }"
  >
    <div class="scroll-bar" ref="scrollBar" :style="{ height: `${listHeight}px` }"></div>
    <ul class="list" ref="list">
      <li v-for="item in showList" :key="item[keyField]" :style="{ height: `${itemHeight}px` }">
        {{ item.id }}{{ item.title }}}
      </li>
    </ul>
    <span v-if="listTips">{{ listTips }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getListPromise } from './configs'
import { ListData } from './types'
interface ChangeConditions {
  page?: number
  size?: number
}
@Component
export default class InfiniteScroller extends Vue {
  @Prop({ type: Number, default: 50 }) itemHeight!: number // 每行高度
  @Prop({ type: Number, default: 10 }) size!: number // 每页展示条数
  @Prop({ required: true }) keyField!: string | number // 列表项ID
  private start = 0 // 滚动过程开始索引
  private end = 10 // 滚动过程结束索引
  private isLoading = false
  private isError = false
  private listData: ListData | null = null
  get listTips() {
    if (!this.isMore) {
      return '没有更多数据了'
    } else {
      return this.isLoading ? '数据加载中' : this.isError ? '加载失败' : ''
    }
  }
  private conditions = {
    page: 1,
    size: 10
  }
  get isMore() {
    return this.listData && this.listData?.page < this.listData?.total
  }
  get showList() {
    return this.list.slice(this.start, this.end)
  }
  private list: any = []
  // 列表高度
  get listHeight() {
    return this.list.length * this.itemHeight
  }
  // 可视区域高度
  get viewHeight() {
    console.log(this.itemHeight)
    return this.size * this.itemHeight
  }
  private created() {
    this.updateConditions({ page: 1 })
  }
  private updateConditions(changeConditions: ChangeConditions) {
    const newConditions = Object.assign(this.conditions, changeConditions)
    this.conditions = newConditions
    this.isLoading = true
    getListPromise(newConditions).then((data: any) => {
      const pagedData = data.list.map((v: any) => {
        v.page = changeConditions.page
        return v
      })
      this.list = this.list.concat(pagedData)
      this.listData = data
      this.isLoading = false
    })
  }

  private scrollListener() {
    //获取滚动高度
    const scrollTop = (this.$refs.listWrap as any).scrollTop
    const viewH = this.itemHeight * this.size // 可视区列表高度
    const scrollH = this.itemHeight * this.list.length // 滚动容器总高度
    console.log(scrollTop, viewH, scrollH)
    console.log(scrollH - (scrollTop + viewH))
    if (scrollH - (scrollTop + viewH) < 20 && !this.isLoading && this.isMore) {
      console.log('触发列表请求')
      this.updateConditions({ page: this.conditions.page + 1 })
    }
    //开始的数组索引
    this.start = Math.floor(scrollTop / this.itemHeight)
    //结束索引
    this.end = this.start + this.size
    //绝对定位对相对定位的偏移量
    ;(this.$refs.list as any).style.top = this.start * this.itemHeight + 'px'
  }
}
</script>

<style scoped lang="less">
.list-wrap {
  position: relative;
  overflow-y: scroll;
  width: 200px;
  margin: 100px auto;
  box-sizing: border-box;
  border: solid 1px red;
  box-sizing: border-box;
}
.list {
  position: absolute;
  top: 0;
  left: 0;
}
.list li {
  height: 30px;
  border: solid 1px blue;
  line-height: 30px;
  box-sizing: border-box;
}
</style>
