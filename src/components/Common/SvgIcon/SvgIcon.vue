<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true }) svgName!: string
  @Prop({ type: String, required: true }) className!: string

  get iconName() {
    return `#icon-${this.svgName}`
  }
  get svgClass() {
    return `#icon-${this.svgName}` ? 'svg-icon ' + this.className : 'svg-icon'
  }
}
</script>

<style scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
