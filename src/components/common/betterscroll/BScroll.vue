<!--  -->
<template>
 <div class="BScroll" ref="wrapper">
  <div class="content" ref="content">
   <slot></slot>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'BScroll',
 components: {},
 props: {
  probeType: {
   type: Number,
   default: 0
  },
  pullUpLoad: {
   type: Boolean,
   default: false
  },
  scrollX: {
   type: Boolean,
   default: false
  },
  scrollY: {
   type: Boolean,
   default: true
  }
 },
 data() {
  //这里存放数据
  return {
   scroll: null
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  scrollTo(x, y, time = 500) {
   this.scroll && this.scroll.scrollTo(x, y, time)
  },
  loaded() {
   this.scroll && this.scroll.refresh()
  },
  pullEvent() {
   //传出下拉事件
   this.scroll.on('pullingUp', () => {
    this.$emit('pullingUpEvent')
    setTimeout(() => {
     this.scroll.finishPullUp()
     this.scroll.refresh()
    }, 1000)
   })
  },
  scrollEvent() {
   //传出滑动定位
   this.scroll.on('scroll', position => {
    this.$emit('scrollPosition', position)
   })
  },
  _setContentWidth() {
   this.$refs.content
  },
  _initScroll() {
   //初始化scroll
   this.scroll = new BScroll(this.$refs.wrapper, {
    scrollX: this.scrollX,
    scrollY: this.scrollY,
    click: true,
    probeType: this.probeType,
    pullUpLoad: this.pullUpLoad
   })
  }
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {},
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
  setTimeout(() => {
   this._initScroll()
   this.pullEvent()
   this.scrollEvent()
  }, 20)
 },
 beforeCreate() {}, //生命周期 - 创建之前
 beforeMount() {}, //生命周期 - 挂载之前
 beforeUpdate() {}, //生命周期 - 更新之前
 updated() {}, //生命周期 - 更新之后
 beforeDestroy() {}, //生命周期 - 销毁之前
 destroyed() {}, //生命周期 - 销毁完成
 activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/* .content {
 position: relative;
} */
/* @import url(); 引入公共css类'*/
</style>
