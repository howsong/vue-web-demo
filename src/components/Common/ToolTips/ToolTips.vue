<!--
* @description 溢出隐藏
* @fileName ToolTips.vue
* @author howsong
* @date 2020/09/30 17:32:01
!-->
<template>
  <div class="text-tooltip">
    <el-tooltip
      class="item"
      effect="dark"
      :disabled="isShowTooltip"
      :content="content"
      placement="bottom"
    >
      <p class="over-flow" :class="className" @mouseover="onMouseOver(refName)">
        <span :ref="refName">{{ content || '-' }}</span>
      </p>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Tooltip } from 'element-ui'
Vue.use(Tooltip)
@Component
export default class ToolTips extends Vue {
  @Prop({ type: String, default: '' }) content!: string
  @Prop({ type: String, default: '' }) className!: string
  @Prop({ type: String, default: '' }) refName!: string
  private isShowTooltip = false
  private onMouseOver(str: string) {
    const parentWidth = (this.$refs[str] as any).parentNode.offsetWidth
    const contentWidth = (this.$refs[str] as any).offsetWidth
    // 判断是否开启tooltip功能
    if (contentWidth > parentWidth) {
      this.isShowTooltip = false
    } else {
      this.isShowTooltip = true
    }
  }
}
</script>

<style lang="scss" scoped>
.over-flow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wid190 {
  width: 190px;
}
</style>
