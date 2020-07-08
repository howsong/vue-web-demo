<template>
  <div>
    CHARTS
    <chart-demo />
    <grouped-histogram />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ChartDemo from '@/components/Charts/ChartDemo.vue'
import GroupedHistogram from '@/components/Charts/GroupedHistogram.vue'

@Component({
  components: {
    ChartDemo,
    GroupedHistogram
  }
})
export default class Echarts extends Vue {}
</script>

<style scoped lang="less"></style>
