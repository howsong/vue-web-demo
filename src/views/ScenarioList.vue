<!--
* @description 需求场景页面
* @fileName Scenario.vue
* @author howsong
* @date 2020/08/03 11:47:54
!-->
<template>
  <div class="scenario_card_list">
    <ScenarioCard v-for="item in data" :data="item" :key="item.linkId" @travel="clickCard(item)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PATHS from '@/router/routePath'
import ScenarioCard from '@/components/Scenario/ScenarioList/ScenarioCard.vue'
import { cardData } from '@/components/Scenario/configs'
import { IcardItem } from '@/components/Scenario/types'

@Component({
  components: {
    ScenarioCard
  }
})
export default class Scenario extends Vue {
  private data = cardData
  private rootPath = `${PATHS.SCENARIO}/${PATHS.SCENARIO_EXAMPLE}`
  private clickCard(card: IcardItem) {
    this.$router.push({
      path: `${PATHS.SCENARIO}/${PATHS.SCENARIO_EXAMPLE}/${card.linkId}`,
      query: { id: card.linkId }
    })
  }
}
</script>

<style scoped lang="less">
.scenario_card_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
