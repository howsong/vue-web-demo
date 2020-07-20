<!--
* @description 
* @fileName NextTickDemo.vue
* @author howsong
* @date 2020/07/20 16:58:35
!-->
<template>
  <div class="app">
    <div ref="msgDiv">{{ msg }}</div>
    <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
    <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
    <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
    <button @click="changeMsg">
      Change the Message
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class NextTickDemo extends Vue {
  private msg = 'Hello Vue.'
  private msg1 = ''
  private msg2 = ''
  private msg3 = ''

  private changeMsg() {
    const msgDiv = this.$refs.msgDiv as HTMLDivElement
    this.msg = 'Hello world.'
    this.msg1 = msgDiv.innerHTML
    this.$nextTick(() => {
      this.msg2 = msgDiv.innerHTML
    })
    this.msg3 = msgDiv.innerHTML
  }
}
</script>

<style scoped lang="less"></style>
