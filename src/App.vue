<template>
  <div>
    <router-view />
    <UploaderWindow />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'
import UploaderWindow from '@/components/Scenario/SimpleUploader/UploaderWindow.vue'

Vue.use(Button)

@Component({
  components: {
    UploaderWindow
  }
})
export default class App extends Vue {}
</script>

<style lang="less"></style>
