<!--
* @description 顶部导航
* @fileName TopNav.vue
* @author howsong
* @date 2020/07/08 16:29:31
!-->
<template>
  <div class="top_nav_wrapper">
    <div class="logo_wrapper"></div>
    <!-- 中间导航菜单 -->
    <el-menu :default-active="activeIndex" class="top_nav_menu" mode="horizontal" router>
      <template v-for="(item, index) in navMenu">
        <el-submenu
          v-if="item.children && item.children.length > 0"
          :key="index"
          :index="item.path"
        >
          <template slot="title">{{ item.title }}</template>
          <el-menu-item v-for="j in item.children" :key="j.path" :index="j.path">
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="index" :index="item.path">{{ item.title }}</el-menu-item>
      </template>
    </el-menu>
    <div class="personal_wrapper">
      <!-- <NoticeMusic /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Menu, MenuItem, Submenu } from 'element-ui'
import { topNavMenu } from '@/router/routePath'
import NoticeMusic from '@/components/Common/Notice/NoticeMusic.vue'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

@Component({
  components: {
    NoticeMusic
  }
})
export default class TopNav extends Vue {
  get activeIndex() {
    return this.$route.path
  }
  private readonly navMenu = topNavMenu
}
</script>

<style scoped lang="less">
.top_nav_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  .top_nav_menu {
    border-bottom: none;
  }
}
</style>
