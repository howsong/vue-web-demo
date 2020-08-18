<!--
* @description 业务场景卡片
* @fileName ScenarioCard.vue
* @author howsong
* @date 2020/08/18 19:19:54
!-->
<template>
  <el-card class="scenario_card_box">
    <div slot="header" class="card_title">
      <span> {{ title }} </span>
      <el-button type="text" @click="handleTravel">前往查看</el-button>
    </div>
    <div class="card_body">
      <p class="card_describe">{{ describe }}</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Card, Button } from 'element-ui'
import { IcardItem } from '@/components/Scenario/types'
Vue.use(Card)
Vue.use(Button)
@Component
export default class ScenarioCard extends Vue {
  @Prop() data?: IcardItem
  @Prop() index?: number
  get title() {
    return this.data?.title
  }
  get describe() {
    return this.data?.describe
  }
  @Emit()
  private handleTravel() {
    this.$emit('travel')
  }
}
</script>

<style scoped lang="less">
.scenario_card_box {
  margin: 10px;
  width: 240px;
  height: 160px;
  .card_describe {
    font-size: 12px;
  }
}
</style>
