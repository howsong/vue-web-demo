<!--
* @description 弹屏待办事项
* @fileName QueueTodoList.vue
* @author howsong
* @date 2020/08/03 15:37:05
!-->
<template>
  <div>
    <div v-for="item in modals" :key="item.id">
      <span>{{ item.id }} - {{ item.type }}</span>
      <span>
        <i class="el-icon-edit edit_btn" @click="handleOpen(item)" />
      </span>
      <QueueModal :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ImodalItem } from './configs'
import { Icon } from 'element-ui'
import QueueModal from './QueueModal.vue'
Vue.use(Icon)
@Component({
  components: {
    QueueModal
  }
})
export default class QueueTodoList extends Vue {
  @Prop(Array) modals!: ImodalItem[]
  private handleOpen(modal: ImodalItem) {
    modal.visible = true
  }
}
</script>

<style scoped lang="less">
.edit_btn {
  cursor: pointer;
}
</style>
