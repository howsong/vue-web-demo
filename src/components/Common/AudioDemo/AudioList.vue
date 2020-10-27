<!--
* @description 
* @fileName AudioList.vue
* @author howsong
* @date 2020/10/15 16:08:01
!-->
<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <span>{{ item.name }}</span>
      <el-button type="text" @click="clickPlayBth(item)">播放</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Button } from 'element-ui'
import { AudioItem } from './types'
import { demoData } from './config'
Vue.use(Button)
@Component
export default class AudioList extends Vue {
  @Prop({ default: () => demoData }) data!: AudioItem[] // 音频资源
  @Emit()
  private clickPlayBth(item: AudioItem) {
    this.$emit('play', item)
  }
}
</script>

<style scoped lang="less"></style>
