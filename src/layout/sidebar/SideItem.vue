<!--
* @description 
* @fileName SideItem.vue
* @author howsong
* @date 2020/10/27 17:21:02
!-->
<template>
  <div v-if="!routeData.hidden">
    <el-submenu v-if="checkIsSub(routeData)" :index="routeData.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ routeData.name }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="item in routeData.children" :key="item.path">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title" @click="jumpRoute(item)">{{ item.name }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item v-else>
      <template v-if="routeData.children && routeData.children.length === 1">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title" @click="jumpRoute(routeData.children[0])">
          {{ routeData.children[0].name }}</span
        >
      </template>
      <template v-else>
        <i class="el-icon-s-cooperation"></i>
        <span slot="title" @click="jumpRoute(routeData)">{{ routeData.name }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Submenu, MenuItem, MenuItemGroup, Icon } from 'element-ui'
import { RouteItemConfig } from '@/router/index'
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Icon)
@Component({
  name: 'side-item'
})
export default class SideItem extends Vue {
  @Prop() routeData!: RouteItemConfig
  private checkIsSub(routeData: RouteItemConfig) {
    return routeData.children && routeData.children.length > 1 ? true : false
  }

  private jumpRoute(data: RouteItemConfig) {
    const jumpPath = data.jumpPath || data.path
    console.log(jumpPath)
    this.$router.push({ path: jumpPath })
  }
}
</script>

<style scoped lang="less"></style>
