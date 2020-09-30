<!--
* @description 通用列表组件逻辑组件
* @fileName UniveralList.vue
* @author howsong
* @date 2020/09/30 14:30:03
!-->
<template>
  <div>
    <slot
      :isLoading="isLoading"
      :isError="isError"
      :contions="contions"
      :updateListConditions="updateListConditions"
      :setIsError="setIsError"
      :setIsLoading="setIsLoading"
      :listData="listData"
      :setListData="setListData"
    >
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class UniveralList extends Vue {
  @Prop({ type: Object, default: () => ({}) }) initailCondtions!: object
  @Prop({ type: Function, required: true }) getList!: (params: object) => Promise<object> // 参数转化
  @Prop({ type: Function, required: false }) dealRes!: (res: any) => void // 列表结果处理
  private contions = this.initailCondtions || {}
  private isLoading = false // 列表数据加载中
  private isError = false // 列表是否出错
  private listData: any = null // 列表数据
  private setIsError(isError: boolean) {
    this.isError = isError
  }
  private setIsLoading(loading: boolean) {
    this.isLoading = loading
  }
  private setListData(data: any) {
    this.listData = data
  }
  /**
   * @function 列表更新条件组件
   * @param cConditions 需要变更的筛选条件
   * @param isKeep 是否仅仅变更条件，不刷新列表
   */
  private updateListConditions(cConditions = {}, isKeep?: boolean) {
    this.contions = Object.assign({}, this.contions, cConditions)
    if (!isKeep) {
      this.setIsLoading(true)
      this.getList(this.contions)
        .then((res: any) => {
          if (typeof this.dealRes === 'function') {
            this.dealRes(res)
          } else {
            this.listData = res
          }
        })
        .catch(() => {
          this.setIsError(true)
        })
        .finally(() => {
          this.setIsLoading(false)
        })
    }
  }
  private created() {
    this.updateListConditions(this.initailCondtions)
  }
}
</script>

<style scoped lang="less"></style>
