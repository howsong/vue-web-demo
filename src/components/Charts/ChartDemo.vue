<!--
* @description echarts 渲染组件
* @fileName ChartDemo.vue
* @author howsong
* @date 2020/07/08 10:11:38
!-->
<template>
  <general-chart ref="chartDmeo" :option="option" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GeneralChart from '@/components/Charts/GeneralChart.vue'

@Component({
  components: {
    GeneralChart
  }
})
export default class ChartDemo extends Vue {
  private option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    animationEasing: 'elasticOut',
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
}
</script>

<style scoped lang="less">
.chart_box {
  width: 300px;
  height: 300px;
}
</style>
