<!--
* @description echarts 渲染组件
* @fileName ChartDemo.vue
* @author howsong
* @date 2020/07/08 10:11:38
!-->
<template>
  <div ref="chart" class="chart_box"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import echarts, { EChartOption } from 'echarts'

type Iseries = EChartOption.SeriesBar | EChartOption.SeriesBoxplot | EChartOption.SeriesLine

@Component
export default class ChartDemo extends Vue {
  @Prop(String) refName!: string
  @Prop(Object) option!: EChartOption<Iseries>

  private mounted() {
    const chart = echarts.init(this.$refs.chart as HTMLCanvasElement)
    chart.setOption(this.option)
  }
}
</script>

<style scoped lang="less">
.chart_box {
  width: 300px;
  height: 300px;
}
</style>
