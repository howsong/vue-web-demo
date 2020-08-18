<!--
* @description 队列弹框实例
* @fileName QueueDemo.vue
* @author howsong
* @date 2020/08/03 15:23:31
!-->
<template>
  <div>
    <QueueTodoList :modals="modals" />
    <el-button type="primary" @click="onPopup">来电弹屏</el-button>
    <el-button type="primary" @click="onConsult">在线咨询弹屏</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'element-ui'
import { ImodalItem } from './configs'
import QueueTodoList from './QueueTodoList.vue'
Vue.use(Button)

interface Imodals {
  [key: number]: ImodalItem
}

@Component({
  components: {
    QueueTodoList
  }
})
export default class QueueDemo extends Vue {
  private modals: ImodalItem[] = [
    {
      id: 1596443979628,
      visible: true,
      echoForm: null,
      type: '来电弹屏'
    },
    {
      id: 1596444041100,
      visible: true,
      echoForm: null,
      type: '在线咨询'
    }
  ]
  private onPopup() {
    this.handlePush('来电弹屏')
  }
  private onConsult() {
    this.handlePush('在线咨询')
  }
  private handlePush(type: string) {
    const id = new Date().getTime()
    this.modals.push({
      id,
      visible: true,
      echoForm: null,
      type
    })
  }

  private mounted() {
    let n = 0
    const timer = setInterval(() => {
      if (n <= 10) {
        n++
        this.handlePush(Math.random() > 0.5 ? '来电弹屏' : '在线咨询')
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>

<style scoped lang="less"></style>
