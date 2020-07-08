<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'
import FormDemo from '@/components/Form/FormDemo.vue'

Vue.use(Button)

@Component({
  components: {
    FormDemo
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
