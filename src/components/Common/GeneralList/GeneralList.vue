<!--
* @description 列表组件
* @fileName GeneralList.vue
* @author howsong
* @date 2020/08/03 12:00:34
!-->
<template>
  <div class="list_container" v-loading="!listData">
    <!-- 自定义列表组件的筛选 -->
    <slot :updateCondtions="updateCondtions" :conditions="conditions"></slot>
    <!-- 列表区域内容 -->
    <div v-loading="loading"></div>
    <div v-if="isError">列表加载失败</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Iconditions, IlistResType, IlistData } from './types'
import { Loading } from 'element-ui'
Vue.use(Loading)
@Component
export default class GeneralList extends Vue {
  @Prop(Object) conditions!: Iconditions
  @Prop(Object) getListPromise!: () => Promise<IlistResType>
  // 列表请求前的参数转化
  @Prop(Function) transformToParams?: (conditions: Iconditions) => object

  private loading = false
  private listData: IlistData | null = null
  private isError = false
  private updateCondtions(changeConditions: Iconditions, iskeep?: boolean) {
    this.conditions = Object.assign(this.conditions, changeConditions)
    // 如果需要刷新列表 才进行跟新列表的操作
    if (!iskeep) {
      this.loading = true
      this.getListPromise()
        .then(res => {
          if (res.code === 0) {
            this.listData = res.data
          } else {
            this.isError = true
          }
        })
        .catch(() => {
          this.isError = true
        })
        .finally(() => {
          this.loading = false
        })
    }
  }

  private created() {
    // 列表数据初始化
    this.updateCondtions({ page: 1 })
  }
}
</script>

<style scoped lang="less"></style>
