<!--
* @description 页面布局
* @fileName PageLayout.vue
* @author howsong
* @date 2020/10/26 11:08:08
!-->
<template>
  <div class="layout_wrapper">
    <!-- 右侧导航菜单 -->
    <side-bar />
    <div class="main_container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Sidebar from './Sidebar.vue'
@Component({
  components: {
    Sidebar
  }
})
export default class PageLayout extends Vue {}
</script>

<style scoped lang="scss">
.layout_wrapper {
  background-color: lightgoldenrodyellow;
  height: 100%;
}
.main_container {
  margin-left: 210px;
  height: 100%;
  background-color: lightcoral;
}
</style>
