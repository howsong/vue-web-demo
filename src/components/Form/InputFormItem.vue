<template>
  <el-form-item :label="$attrs.label" :prop="prop">
    <el-input v-model="formData[prop]" />
  </el-form-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { FormItem, Input } from 'element-ui'

Vue.use(FormItem)
Vue.use(Input)

@Component
export default class InputFormItem extends Vue {
  @Prop(Object) formData!: any
  @Prop(String) prop!: string
}
</script>

<style scoped></style>
