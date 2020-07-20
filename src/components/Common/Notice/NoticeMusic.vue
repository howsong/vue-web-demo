<!--
* @description 提示消息并播放音乐
* @fileName NoticeMusic.vue
* @author howsong
* @date 2020/07/17 18:44:07
!-->
<template>
  <div>
    <input type="file" id="file" @change="onInputFileChange" />
    <audio class="rl-audio" id="notice" controls preload loop hide :src="src">
      Your browser does not support the audio element.
    </audio>
    <el-button type="primary" @click="handleNotice">push nitifation</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Notification, Button } from 'element-ui'
Vue.use(Button)
@Component
export default class NoticeMusic extends Vue {
  private noticeAudio: HTMLAudioElement | null = null
  private isPlay = false
  private src = '../../../assets/music/demo.mp3'
  private file?: any

  private created() {
    console.log('son created')
  }

  private mounted() {
    this.noticeAudio = document.getElementById('notice') as HTMLAudioElement
    this.file = document.getElementById('file') as HTMLInputElement
  }

  private handleNotice() {
    if (!this.isPlay && this.noticeAudio) {
      this.noticeAudio.play()
    }
    Notification({
      title: 'HTML 片段',
      dangerouslyUseHTMLString: true,
      message: `<div>提示消息</div>`,
      position: 'bottom-right',
      duration: 0 // 单位毫秒，显示时间，设为0不会关闭
    })
  }

  private onInputFileChange() {
    console.dir(this.file, URL)
    if (this.file) {
      const url = URL.createObjectURL(this.file.files[0])
      console.log(url)
      this.src = url
    }
  }
}
</script>

<style scoped lang="less">
.rl-audio {
  display: none;
}
</style>
