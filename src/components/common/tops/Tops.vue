<!-- 置顶位 -->
<template>
 <div v-if="topsData != null" class="Tops">
  <div class="Tops-div" v-for="item in topsData" :key="item.image">
   <div class="Tops-div-div">
    <!-- <a :href="item.link"> -->
    <img :src="item.image" alt="" @load="topsImageLoaded" />
    <span>{{ item.title }}</span>
    <!-- </a> -->
   </div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Tops',
 components: {},
 props: {
  topsData: null
 },
 data() {
  //这里存放数据
  return {
   isLoaded: false
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  topsImageLoaded() {
   if (!this.isLoaded) {
    this.$emit('topsImageLoaded')
    this.isLoaded = true
   }
  }
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {},
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {},
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
.Tops {
 background-color: white;
 display: flex;
 text-align: center;
}
.Tops .Tops-div {
 flex: 1;
}
.Tops .Tops-div .Tops-div-div {
 padding: 10%;
}
/* .Tops a {
 text-decoration-line: none;
} */
.Tops span {
 color: black;
 font-size: 12px;
}
.Tops img {
 max-width: 100%;
 display: block;
}

/* @import url(); 引入公共css类'*/
</style>
