<!--
* @description 列表DEMO
* @fileName GeneralListDemo.vue
* @author howsong
* @date 2020/08/03 12:24:18
!-->
<template>
  <GeneralList :conditions="conditions"></GeneralList>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GeneralList from './GeneralList.vue'
@Component({
  components: {
    GeneralList
  }
})
export default class GeneralListDemo extends Vue {
  private conditions = {
    page: 1,
    size: 10
  }
}
</script>

<style scoped lang="less"></style>
