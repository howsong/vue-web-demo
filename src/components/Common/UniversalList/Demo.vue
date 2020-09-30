<!--
* @description 示例组件
* @fileName Demo.vue
* @author howsong
* @date 2020/09/30 15:05:34
!-->
<template>
  <div>
    <UniveralList :getList="getList">
      <template #default="{isLoading,listData,isError,updateListConditions}">
        <div v-loading="isLoading">
          <div v-if="isError">请求失败<span @click="updateListConditions">重新请求</span></div>
          <div v-else>{{ listData }}</div>
        </div>
      </template>
    </UniveralList>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Loading } from 'element-ui'
import UniveralList from './UniveralList.vue'
Vue.use(Loading)
@Component({
  components: {
    UniveralList
  }
})
export default class Demo extends Vue {
  private getList(conditions = {}) {
    console.log(conditions)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const r = Math.random()
        console.log(r)
        if (r > 0.6) {
          reject()
        } else {
          resolve({ page: 1, total: 501, pages: 20, data: [] })
        }
      }, 2000)
    })
  }
}
</script>

<style scoped lang="less"></style>
