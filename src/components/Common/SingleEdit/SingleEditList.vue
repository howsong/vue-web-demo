<!--
* @description 单项编辑循环列表
* @fileName SingleEditList.vue
* @author howsong
* @date 2020/07/09 16:07:14
!-->
<template>
  <div class="single_list_wrapper">
    <span v-for="item in configs" :key="item.fieldCode">
      <single-edit :key="item.fieldCode" :config="item" v-bind="$attrs" v-on="$listeners" />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SingleEdit from './SingleEdit.vue'

@Component({
  components: {
    SingleEdit
  }
})
export default class SingleEditList extends Vue {
  private configs = [
    {
      content: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
      canEditor: false,
      haveSelect: null,
      fieldDTO: {
        fieldCode: '2428137044164631',
        fieldName: '案件名称',
        pageType: '10020003',
        propertyName: 'caseName',
        fieldType: '10010001',
        fieldRequired: true,
        weight: 1,
        fieldGroup: '0',
        fieldLimit: {
          fieldMin: null,
          fieldMax: 50
        },
        options: [],
        entityCode: null
      }
    },
    {
      content: 20000,
      canEditor: true,
      haveSelect: null,
      fieldDTO: {
        fieldCode: '2428137044164638',
        fieldName: '案件标的',
        pageType: '10020003',
        propertyName: 'targetMoney',
        fieldType: '10010002',
        fieldRequired: true,
        weight: 8,
        fieldGroup: '0',
        fieldLimit: {
          fieldMin: null,
          fieldMax: 11
        },
        options: [],
        entityCode: null
      }
    },
    {
      content: '2020-10-20 12:30:22',
      canEditor: true,
      haveSelect: null,
      fieldDTO: {
        fieldCode: '2428137044164639',
        fieldName: '自定义日期类字段',
        pageType: '10010003',
        propertyName: 'targetMoney',
        fieldType: '10010003',
        fieldRequired: true,
        weight: 8,
        fieldGroup: '0',
        fieldLimit: {
          fieldMin: null,
          fieldMax: 11
        },
        options: [],
        entityCode: null
      }
    },
    {
      content: '0',
      canEditor: true,
      haveSelect: null,
      fieldDTO: {
        fieldCode: '2428137044164640',
        fieldName: '自定义单选',
        pageType: '10020003',
        propertyName: 'targetMoney',
        fieldType: '10010004',
        fieldRequired: true,
        weight: 8,
        fieldGroup: '0',
        fieldLimit: {
          fieldMin: null,
          fieldMax: 11
        },
        options: [
          { codeName: 'A', dictCode: '0' },
          { codeName: 'B', dictCode: '1' },
          { codeName: 'C', dictCode: '2' },
          { codeName: 'D', dictCode: '3' }
        ],
        entityCode: null
      }
    },
    {
      content: ['0', '2'],
      canEditor: true,
      haveSelect: null,
      fieldDTO: {
        fieldCode: '2428137044164640',
        fieldName: '自定义多选',
        pageType: '10020003',
        propertyName: 'targetMoney',
        fieldType: '10010005',
        fieldRequired: false,
        weight: 8,
        fieldGroup: '0',
        fieldLimit: {
          fieldMin: null,
          fieldMax: 11
        },
        options: [
          { codeName: 'A', dictCode: '0' },
          { codeName: 'B', dictCode: '1' },
          { codeName: 'C', dictCode: '2' },
          { codeName: 'D', dictCode: '3' }
        ],
        entityCode: null
      }
    }
  ]
}
</script>

<style scoped lang="less"></style>
