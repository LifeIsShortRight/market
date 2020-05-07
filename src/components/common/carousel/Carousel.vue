<!--  -->
<template>
 <div v-if="carouselData != null" class="carousel">
  <div class="carousel-content">
   <!-- <a :href="carouselData[indexCurrent].link"> -->
   <img class="left" :src="carouselData[carouselData.length - 1].image" />
   <img :src="carouselData[indexCurrent].image" @load.once="imageLoaded" />
   <img class="right" :src="carouselData[0].image" />
   <ul>
    <li
     :class="{ actived: indexCurrent == item - 1 }"
     v-for="item in imagesQuantity"
     :key="item"
    ></li>
   </ul>
   <!-- </a> -->
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Carousel',
 props: {
  carouselData: Array
 },
 components: {},
 data() {
  //这里存放数据
  return {
   imagesQuantity: 0,
   isActive: true,
   indexCurrent: null
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {
  carouselData() {
   this.indexCurrent = 0
  }
  // indexCurrent() {
  //  let length = this.carouselData.length
  //  this.imagesQuantity == 0 ? (this.imagesQuantity = length) : {}
  //  setTimeout(() => {
  //   if (this.indexCurrent < length) {
  //    this.indexCurrent++
  //   }
  //   if (this.indexCurrent >= length) {
  //    //直接用else会出现短暂的未定义
  //    this.indexCurrent = 0
  //   }
  //  }, 3000)
  // }
 },
 //方法集合
 methods: {
  imageLoaded() {
   this.$emit('carouselImageLoaded')
  }
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
  // console.log('created')
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
  // console.log('mounted')
 },
 beforeCreate() {
  // console.log('beforeCreate')
 }, //生命周期 - 创建之前
 beforeMount() {}, //生命周期 - 挂载之前
 beforeUpdate() {
  // console.log('beforUpdate')
  // this.carousel()
 }, //生命周期 - 更新之前
 updated() {
  // console.log('updated')
 }, //生命周期 - 更新之后
 beforeDestroy() {
  // console.log('beforeDestroyed')
 }, //生命周期 - 销毁之前
 destroyed() {
  // console.log('destroyed')
 }, //生命周期 - 销毁完成
 activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.carousel {
 width: 100%;
 position: relative;
 overflow: hidden;
}
.carousel .content {
 width: 300%;
 position: absolute;
}
.carousel img {
 float: left;
 max-width: 100%;
 display: block;
}
.carousel img.left {
 position: absolute;
 left: -100%;
 max-width: 100%;
 display: block;
}
.carousel ul {
 position: absolute;
 top: 60px;
 font-size: 30px;
}
.carousel ul li {
 margin: 10px;
 float: left;
 color: rgba(255, 255, 255, 0.3);
}
.carousel ul .actived {
 color: white;
}
/* @import url(); 引入公共css类'*/
</style>
