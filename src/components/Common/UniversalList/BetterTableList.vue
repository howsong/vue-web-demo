<!--
* @description 基于element封装的列表UI组件
* @fileName BetterTableList.vue
* @author howsong
* @date 2020/09/30 15:00:01
!-->
<template>
  <div>
    <el-table>
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :column-key="column.columnKey"
        :align="column.align"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Table, TableColumn, Pagination } from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

interface ColumnItem {
  columnKey: string
  align?: string
}

@Component
export default class BetterTableList extends Vue {
  @Prop({ type: String, default: true }) paged!: boolean // 是否分页
  @Prop({ type: Object, default: () => ({}) }) data!: object // 列表数据
  @Prop({ type: Object, default: () => [] }) columns!: ColumnItem[] // 列配置
}
</script>

<style scoped lang="less"></style>
