<!--
* @description 监听页面元素节点变化
* @fileName ObserveElement.vue
* @author howsong
* @date 2020/07/20 19:18:53
!-->
<template>
  <div>
    <div ref="t">1</div>
    <div ref="t">2</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ObserveElement extends Vue {}
</script>

<style scoped lang="less"></style>
