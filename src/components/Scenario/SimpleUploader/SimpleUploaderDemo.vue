<!--
* @description 简单示例
* @fileName SimpleUploaderDemo.vue
* @author howsong
* @date 2020/08/18 20:20:38
!-->
<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Uploader from 'vue-simple-uploader'
Vue.use(Uploader)
@Component
export default class SimpleUploaderDemo extends Vue {}
</script>

<style scoped lang="less"></style>
