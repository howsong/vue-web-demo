<!--
* @description 
* @fileName CropperForm.vue
* @author howsong
* @date 2020/10/23 14:46:42
!-->
<template>
  <el-form>
    <div class="cropper_wrapper">
      <vueCropper
        ref="cropper"
        :img="img"
        :output-size="option.size"
        :output-type="option.outputType"
        :info="option.info"
        :full="option.full"
        :canScale="option.canScale"
        :can-move="option.canMove"
        :can-move-box="option.canMoveBox"
        :fixed="option.fixed"
        :fixed-box="option.fixedBox"
        :original="option.original"
        :auto-crop="option.autoCrop"
        :auto-crop-width="option.autoCropWidth"
        :auto-crop-height="option.autoCropHeight"
        :center-box="option.centerBox"
        :high="option.high"
        :info-true="option.infoTrue"
        :max-img-size="option.maxImageSize"
        :enlarge="option.enlarge"
        :mode="option.mode"
        :maxImgSize="option.maxImgSize"
      ></vueCropper>
    </div>
    <form-footer-btns @handleCancle="handleCancle" @handleOK="handleOK"></form-footer-btns>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import VueCropper from 'vue-cropper'
import { Form, FormItem } from 'element-ui'
import FormFooterBtns from '@/components/Common/GeneralForm/FormFooterBtns.vue'
import { VisibleData } from '@/components/Common/Dailog/types'

Vue.use(VueCropper)
Vue.use(Form)
Vue.use(FormItem)
@Component({
  components: {
    FormFooterBtns
  }
})
export default class CropperForm extends Vue {
  @Prop() visibleData!: VisibleData
  @Prop() img!: any
  @Ref() cropper: any
  private option: any = {
    img: '',
    outputType: 'png',
    centerBox: false,
    outputSize: 1, // 裁剪生成图片的质量
    full: true, // 是否输出原图比例的截图
    info: true, // 图片大小信息
    canScale: true, // 图片是否允许滚轮缩放
    autoCrop: true, // 是否默认生成截图框
    autoCropWidth: 200, // 默认生成截图框宽度
    autoCropHeight: 150, // 默认生成截图框高度
    canMove: true, // 上传图片是否可以移动
    fixedBox: true, // 固定截图框大小 不允许改变
    fixed: false, // 是否开启截图框宽高固定比例
    canMoveBox: true, // 截图框能否拖动
    original: false, // 上传图片按照原始比例渲染
    height: true,
    infoTrue: false, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
    enlarge: 1, // 图片根据截图框输出比例倍数
    mode: 'container', // 图片默认渲染方式
    maxImgSize: 375 // 限制图片最大宽度和高度
  }
  private handleCancle() {
    this.visibleData.visible = false
  }
  private handleOK() {
    this.handleCancle()
  }
}
</script>

<style scoped lang="less">
.cropper_wrapper {
  margin-bottom: 20px;
  width: 100%;
  height: 500px;
  background-color: lightgoldenrodyellow;
}
</style>
