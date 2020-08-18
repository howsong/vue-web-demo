<!--
* @description 演示项列表
* @fileName LinkItemList.vue
* @author howsong
* @date 2020/08/06 17:30:36
!-->
<template>
  <ul class="list_container">
    <li class="link_item" v-for="item in data" :key="item.id">
      <router-link class="list_link_item" :to="`${rootPath}/${item.id}`">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
export interface IlinkItem {
  name: string
  id: string | number
  describe?: string
}
@Component
export default class LinkItemList extends Vue {
  @Prop({ type: Array, default: [] }) data!: IlinkItem[]
  @Prop(String) rootPath!: string
}
</script>

<style scoped lang="less">
.list_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 24px;
  .link_item {
    margin: 10px;
    background: #3eaf7c;
    padding: 5px 12px;
    border-radius: 4px;
  }
  .list_link_item {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }
}
</style>
