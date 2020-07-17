<!--
* @description 单项编辑组件
* @fileName SingleEdit.vue
* @author howsong
* @date 2020/07/09 15:36:47
!-->
<template>
  <div :class="['custom_single_form', labelWidth ? 'flex' : '']">
    <p
      class="label_p"
      :style="[
        labelWidth ? { width: labelWidth, display: 'inline-block', textAlign: 'right' } : {}
      ]"
    >
      <i :class="['required_i', config.fieldDTO.fieldRequired ? 'visible' : '']">*</i>{{ label }}
    </p>
    <span class="single_value_wrapper" :style="[labelWidth ? { display: 'inline-block' } : {}]">
      <span v-if="!isEdit">
        <el-tooltip
          effect="dark"
          v-if="content.isOver"
          :content="content.originValue"
          placement="top"
        >
          <span>{{ content.value || '-' }}</span>
        </el-tooltip>
        <template v-else>{{ content.value || '-' }}</template>
        <i class="el-icon-edit single_icon" @click="clickEditIcon" v-if="isCanEdit"></i
      ></span>
      <!-- 表单编辑状态 -->
      <div v-else class="single_edit_form">
        <!-- 输入类 -->
        <el-input v-if="type === fieldTypes.INPUT" v-model="value" :style="{ width: '220px' }" />
        <!-- 数字类 -->
        <el-input-number
          v-else-if="type === fieldTypes.INPUTNUMBER"
          v-model="value"
          controls-position="right"
          style="width:220px"
          :min="0"
          class="custom_inputnumber"
        />
        <!-- 单项选择类 -->
        <el-select
          v-else-if="type === fieldTypes.SINGLE_SELECT"
          v-model="value"
          style="width:220px"
          filterable
          clearable
          placeholder=""
        >
          <el-option
            v-for="item in options"
            :key="item.dictCode"
            :label="item.codeName"
            :value="item.dictCode"
          ></el-option>
        </el-select>
        <!-- 多选框 -->
        <el-select
          v-else-if="type === fieldTypes.MUTI_SELECT"
          v-model="value"
          style="width:220px"
          filterable
          clearable
          multiple
          placeholder=""
        >
          <el-option
            v-for="item in options"
            :key="item.dictCode"
            :label="item.codeName"
            :value="item.dictCode"
          ></el-option>
        </el-select>
        <!-- 日期类 -->
        <el-date-picker
          v-if="type === fieldTypes.DATE"
          v-model="value"
          type="datetime"
          clearable
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
        />

        <i class="el-icon-check single_icon" @click="clickHookIcon" />
        <i class="el-icon-close single_icon" @click="isEdit = false" />
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import {
  Form,
  FormItem,
  Icon,
  Input,
  InputNumber,
  Tooltip,
  DatePicker,
  Select,
  Option,
  Message
} from 'element-ui'
import { IsingleFormData, FIELD_TYPES } from './config'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Tooltip)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)

@Component
export default class SingleEdit extends Vue {
  @Prop(Object) config!: IsingleFormData
  @Prop({ type: Boolean, default: false }) isTrim?: boolean // 文本类提交是否去掉首尾空格
  @Prop({ type: Boolean, default: true }) isOnlyShow?: boolean // 是否仅仅是展示组件 默认为展示组件
  @Prop({ type: String, default: '' }) labelWidth?: string // 指定labelWidth 则和值显示在一行
  @Prop({ type: Number, default: 20 }) halfMax?: number // 半行展示最大宽度
  private isEdit = false // 是否是编辑模式
  private value = ''
  private readonly fieldTypes = FIELD_TYPES

  // 展示内容
  get content() {
    let value = this.config.content
    let isOver = false
    const fieldType = this.config.fieldDTO.fieldType
    const maxL = this.halfMax || 20
    switch (fieldType) {
      case FIELD_TYPES.INPUT:
        isOver = value && value.length > maxL ? true : false
        value = value || ''
        value = isOver ? `${value.slice(0, maxL)}...` : value
        break
      default:
        break
    }
    return {
      value,
      isOver,
      originValue: this.config.content
    }
  }

  // 字段类型
  get type() {
    return this.config.fieldDTO && this.config.fieldDTO.fieldType
  }

  get selectInitialValue() {
    return ''
  }

  // 是否可编辑
  get isCanEdit() {
    return this.config.canEditor
  }

  get label() {
    return this.config.fieldDTO && this.config.fieldDTO.fieldName
  }

  get options() {
    return (this.config.fieldDTO && this.config.fieldDTO.options) || []
  }

  private getErrorMsg() {
    let errorMsg = ''
    let value = this.value
    const fieldType = this.config.fieldDTO.fieldType
    const fieldRequired = this.config.fieldDTO.fieldRequired
    const trimValue = this.value && fieldType === FIELD_TYPES.INPUT ? this.value.trim() : ''
    const maxLimit = this.config.fieldDTO.fieldLimit && this.config.fieldDTO.fieldLimit.fieldMax

    switch (fieldType) {
      case FIELD_TYPES.INPUT:
        if (!trimValue && fieldRequired) {
          errorMsg = `${this.label}不能为空`
        } else if (trimValue && maxLimit && trimValue.length > maxLimit) {
          errorMsg = `${this.label}不超过${maxLimit}字`
        }
        value = trimValue
        break
      case FIELD_TYPES.INPUTNUMBER:
        if (!value && fieldRequired) {
          errorMsg = `${this.label}不能为空`
        }
        break
      case FIELD_TYPES.DATE:
        if (!value && fieldRequired) {
          errorMsg = `${this.label}不能为空`
        }
        break
      case FIELD_TYPES.SINGLE_SELECT:
        if (!value && fieldRequired) {
          errorMsg = `${this.label}不能为空`
        }
        break
      case FIELD_TYPES.MUTI_SELECT:
        if (!(value && value.length > 0) && fieldRequired) {
          errorMsg = `${this.label}不能为空`
        }
        break
      default:
        break
    }
    return {
      errorMsg,
      value
    }
  }

  @Emit()
  private clickHookIcon() {
    const { errorMsg, value } = this.getErrorMsg()
    if (errorMsg) {
      Message.error(errorMsg)
      return
    }
    this.$emit('submit', { [this.config.fieldDTO.fieldCode]: value })
  }
  private clickEditIcon() {
    this.isEdit = true
    this.value = this.config.content || ''
  }
}
</script>

<style scoped lang="less">
.custom_single_form {
  display: inline-flex;
  flex-direction: column;
  width: 50%;
  line-height: 36px;
  background-color: orange;
  &.flex {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .label_p {
    margin-right: 24px;
    .required_i {
      color: red;
      margin-right: 4px;
      visibility: hidden;
      &.visible {
        visibility: visible;
      }
    }
  }
  .single_icon {
    margin-left: 16px;
    line-height: 40px;
    color: #619bf2;
    cursor: pointer;
  }
  .single_edit_form {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .single_value_wrapper {
    padding-left: 12px;
    line-height: 40px;
  }
}
</style>
<style lang="less">
.custom_inputnumber.el-input-number .el-input__inner {
  text-align: left;
}
</style>
