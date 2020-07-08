<!--
* @description 主页面布局
* @fileName GeneralLayout.vue
* @author howsong
* @date 2020/07/08 16:10:45
!-->
<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Container, Header, Main } from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)

@Component
export default class GeneralLayout extends Vue {}
</script>

<style scoped lang="less"></style>
