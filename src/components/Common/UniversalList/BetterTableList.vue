<!--
* @description 基于element封装的列表UI组件
* @fileName BetterTableList.vue
* @author howsong
* @date 2020/09/30 15:00:01
!-->
<template>
  <el-table> </el-table>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Table, TableColumn } from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)
@Component
export default class BetterTableList extends Vue {}
</script>

<style scoped lang="less"></style>
