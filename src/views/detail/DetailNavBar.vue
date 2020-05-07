<!--  -->
<template>
 <div class="DetailNavBar">
  <nav-bar>
   <div @click="backPre" class="left" slot="left">&lt;</div>
   <div class="center" slot="center">
    <div
     @click="current(index)"
     :class="{ active: currentIndex === index }"
     class="center-item"
     v-for="(item, index) in titles"
     :key="index"
    >
     {{ item }}
    </div>
   </div>
   <div slot="right"></div>
  </nav-bar>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'DetailNavBar',
 components: { NavBar },
 props: {},
 data() {
  //这里存放数据
  return {
   titles: ['商品', '参数', '评论', '推荐'],
   currentIndex: 0
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  backPre() {
   this.$router.back()
  },
  current(index) {
   this.currentIndex = index
   this.$bus.$emit('whatTag', index)
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
.active {
 color: lightcoral;
}
.center {
 display: flex;
}
.center .center-item {
 flex: 1;
}
.center .center-item:active {
 background-color: gainsboro;
}
.left {
 text-align: center;
 font-size: 20px;
 font-weight: bold;
 color: lightslategray;
}
.left:active {
 background-color: gainsboro;
}
/* @import url(); 引入公共css类'*/
</style>
