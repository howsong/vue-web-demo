<template>
  <el-container>
    <el-header>
      <top-nav />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Container, Main, Header } from 'element-ui'
import TopNav from '@/components/Common/TopNav.vue'

Vue.use(Container)
Vue.use(Main)
Vue.use(Header)

@Component({
  components: {
    TopNav
  }
})
export default class Home extends Vue {}
</script>

<style scoped></style>
