<!--
* @description 右侧导航菜单
* @fileName Sidebar.vue
* @author howsong
* @date 2020/10/26 15:16:05
!-->
<template>
  <div class="sidebar_wrapper">
    <el-menu mode="vertical" background-color="#545c64">
      <side-item v-for="item in routes" :key="item.path" :routeData="item"></side-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Menu } from 'element-ui'
import { namespace } from 'vuex-class'
import { RouteItemConfig } from '@/router/index'
import SideItem from './SideItem.vue'

Vue.use(Menu)

const permissionModule = namespace('permission')
@Component({
  components: {
    SideItem
  }
})
export default class Sidebar extends Vue {
  @permissionModule.State('routes') routes!: RouteItemConfig[]
}
</script>

<style scoped lang="scss">
@import '~@/assets/styles/variables.scss';
.sidebar_wrapper {
  position: fixed;
  width: $sideBarWidth;
  background-color: #545c64;
  height: 100%;
  color: #fff;
}
</style>
