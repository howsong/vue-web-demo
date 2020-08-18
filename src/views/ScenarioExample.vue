<!--
* @description 业务场景示例
* @fileName ScenarioExample.vue
* @author howsong
* @date 2020/08/06 18:55:30
!-->
<template>
  <div>
    <!-- 回退按钮 -->
    <el-button type="text" @click="handleReturn"> <i class="el-icon-back" />返回 </el-button>
    <!-- 样例展示区域 -->
    <div>
      <SimpleUpload v-if="id === LINK_IDS.S001 || !id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button, Icon } from 'element-ui'
import SimpleUpload from '@/components/Scenario/SimpleUpload.vue'
import { LINK_IDS } from '@/components/Scenario/configs'

Vue.use(Button)
Vue.use(Icon)
@Component({
  components: {
    SimpleUpload
  }
})
export default class ScenarioExample extends Vue {
  private handleReturn() {
    this.$router.go(-1)
  }
  private readonly LINK_IDS = LINK_IDS
  get id() {
    return this.$route?.params?.id
  }
}
</script>

<style scoped lang="less"></style>
