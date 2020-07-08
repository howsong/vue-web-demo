<template>
  <div>
    HOME
    <el-button type="primary">TEST</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'

Vue.use(Button)

@Component
export default class Home extends Vue {}
</script>

<style scoped></style>
