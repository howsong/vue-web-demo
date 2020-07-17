<!--
* @description 分组柱状图
* @fileName GroupedHistogram.vue
* @author howsong
* @date 2020/07/08 15:16:35
!-->
<template>
  <general-chart ref="groupedHistogram" :option="option" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GeneralChart from '@/components/Charts/GeneralChart.vue'
@Component({
  components: {
    GeneralChart
  }
})
export default class GroupedHistogram extends Vue {
  private option = {
    title: {
      text: 'TESTHHHHHHHHHHHHHHHHHHHHHHHHH',
      show: true,
      link: 'https://www.baidu.com/',
      textStyle: {
        color: 'red'
      }
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }
}
</script>

<style scoped lang="less"></style>
