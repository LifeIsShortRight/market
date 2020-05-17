<!--  -->
<template>
 <div class="DetailTopImage">
  <div class="slider" ref="slider">
   <div v-show="topImages" class="slider-content" ref="sliderContent">
    <img
     @load.once="init"
     v-for="image in topImages"
     :src="image"
     :key="image"
    />
   </div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'
import { debounce } from 'common/tools'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'DetailTopImage',
 props: {
  update: null,
  topImages: {
   type: Array,
   default() {
    return []
   }
  }
 },
 data() {
  return {
   showSlider: false // 显示slider标志位
  }
 },
 created() {},
 mounted() {
  this.init = debounce(this.initPreparation, 0)
 },
 methods: {
  //资源加载完后初始化betterscroll
  //初始化
  initPreparation() {
   this.setSliderWidth()
   this.initSlider()
  },
  //设置slider宽度
  setSliderWidth() {
   //获取屏幕宽度
   let sliderWidth = this.$refs.slider.clientWidth
   //初始化slidercontent宽度
   let sliderContentWidth = 0
   //获取sliderContent的所有子元素
   this.children = this.$refs.sliderContent.children
   //设置sliderconten宽度 和每个子元素宽度
   for (let i = 0; i < this.children.length; i++) {
    this.children[i].style.width = sliderWidth * 0.7 + 'px'

    sliderContentWidth += sliderWidth
   }
   this.$refs.sliderContent.style.width =
    sliderContentWidth * 0.7 + this.children.length * 21 + 'px'
  },
  //初始化betterscroll
  initSlider() {
   this.slider = new BScroll(this.$refs.slider, {
    scrollX: true,
    scrollY: false,
    click: true
   })
  }
 },
 activated() {
  // this.init()
 },
 deactivated() {}
}
</script>
<style scoped>
.slider {
 overflow: hidden;
}
img {
 vertical-align: middle;
 padding: 10px;
}
/* @import url(); 引入公共css类'*/
</style>
