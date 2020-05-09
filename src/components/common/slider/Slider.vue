<!--  -->
<template>
 <div class="Slider" ref="slider" v-cloak>
  <div class="slider-content" ref="sliderContent" v-cloak>
   <img
    @load="init"
    v-for="(item, index) in carouselData"
    :src="item.image"
    :key="index + item.image"
   />
  </div>
  <ul v-show="this.carouselData">
   <li
    class="dot"
    v-for="(i, index) in dots"
    :key="i"
    :class="{ active: currentPageIndex === index }"
   ></li>
  </ul>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'
import { debounce } from 'common/tools'

// import { addClass } from 'common/js/dom'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Slider',
 data() {
  return {
   currentPageIndex: 0,
   dots: 0,
   isFirstLoad: true
  }
 },
 props: {
  isLoop: {
   /* 循环播放 */
   type: Boolean,
   default: true
  },
  isAutoPlay: {
   /* 自动播放 */
   type: Boolean,
   default: true
  },
  interval: {
   /* 播放间隔 */
   type: Number,
   default: 3000
  },
  carouselData: {
   type: Array,
   default() {
    return []
   }
  }
 },
 created() {},
 mounted() {
  this.init = debounce(this.initPreparation)
  /* mounted阶段dom渲染完，延迟确保刷新 */
  // setTimeout(() => {
  //  this.init()
  // }, 100)
 },
 methods: {
  initPreparation() {
   this.setSliderWidth() //初始化宽度
   this.initSlider() //初始化betterscroll
   this.dots = this.carouselData.length //初始化小白点个数
   if (this.isAutoPlay) {
    //如果设置自动播放 开启播放
    this.autoPlay()
   }
   //监听用户滑动清除定时器 离开开始自动播放
   this.$refs.slider.addEventListener('touchstart', () => {
    this.timer ? clearTimeout(this.timer) : this.isAutoPlay()
   })
   //  this.$refs.slider.addEventListener('touchend', () => {
   //   this.timer ? clearInterval(this.timer) : this.isAutoPlay()
   //  })
   this.$emit('initSuccess')
  },
  //获取数据

  //设置slider宽度
  setSliderWidth() {
   //获取slider所有子元素
   this.children = this.$refs.sliderContent.children
   //sliderContent的宽度
   let width = 0

   //获取屏幕宽度
   let silderWidth = this.$refs.slider.clientWidth
   //给每个children设置宽度 并且给sliderContent设置宽度
   for (let i = 0; i < this.children.length; i++) {
    this.children[i].style.width = silderWidth + 'px'
    width += silderWidth
   }
   //betterscroll 设置loop时 会在首位克隆两份 所以sliderConrent的宽度要加2倍
   if (this.isLoop) {
    width += 2 * silderWidth
   }
   this.$refs.sliderContent.style.width = width + 'px'
  },
  initSlider() {
   this.slider = new BScroll(this.$refs.slider, {
    scrollX: true /* 横向滚动 */,
    scrollY: false,
    //关闭延迟滚动
    momentum: false,
    snap: {
     /* 循环滚动设置 */
     loop: this.isLoop,
     threshold: 0.3,
     speed: 400
    },
    click: true
   })
   this.slider.on('scrollEnd', () => {
    const pageIndex = this.slider.getCurrentPage().pageX //获取当前轮播页，用于圆点提示
    this.currentPageIndex = pageIndex
    //如果设置了自动滚动 先清楚掉自动滚动 再开启滚动
    if (this.isAutoPlay) {
     clearTimeout(this.timer)
     this.autoPlay()
    }
   })
  },
  autoPlay() {
   this.timer = setTimeout(() => {
    this.slider.next(400)
   }, this.interval)
  }
 },
 activated() {
  if (this.isFirstLoad !== true) {
   this.autoPlay()
  }
  this.isFirstLoad = false
 },
 deactivated() {
  clearTimeout(this.timer)
 },
 destroyed() {
  /* 确保清除定时器 */
  clearTimeout(this.timer)
 }
}
</script>
<style scoped>
.Slider {
 overflow: hidden;
 position: relative;
}
.Slider ul {
 position: absolute;
 left: -1%;
 bottom: -22%;
 font-size: 150%;
}
.Slider .dot {
 float: left;
 padding: 10px;
 color: rgba(255, 255, 255, 0.5);
}
.Slider .active {
 color: white;
}
</style>
