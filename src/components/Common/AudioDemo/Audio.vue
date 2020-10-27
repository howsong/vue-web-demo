<!--
* @description 
* @fileName Vedio.vue
* @author howsong
* @date 2020/10/15 10:39:57
!-->
<template>
  <div>
    <div>
      <span>当前播放：</span>{{ playName }}
      <div>
        <audio controls="controls" id="playAudio" :src="src" ref="audioPlayer">
          您的浏览器不支持 audio 元素。
        </audio>
      </div>
    </div>
    <AudioList :data="data" @play="playAudio" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import AudioList from './AudioList.vue'
import { AudioItem } from './types'
import { demoData } from './config'
@Component({
  components: {
    AudioList
  }
})
export default class Vedio extends Vue {
  @Prop({ default: () => demoData }) data!: AudioItem[] // 音频资源
  @Ref() audioPlayer: any
  private src = ''
  private playName = ''
  private playingId = ''
  private playAudio(item: AudioItem) {
    const player: any = document.getElementById('playAudio')
    this.src = item.url
    this.playName = item?.name
    player.load()
    this.$nextTick(() => {
      player.play()
    })
  }
  private created() {
    this.src = this.data[0]?.url
    this.playName = this.data[0]?.name
  }
  private mounted() {
    //console.log(this.audioPlayer, '-------------')
  }
}
</script>

<style scoped lang="less"></style>
