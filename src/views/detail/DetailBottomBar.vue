<!--  -->
<template>
 <div ref="detailBottomBar" class="DetailBottomBar">
  <div class="left">
   <div class="shop"><img src="~assets/img/tabbar/shop.png" alt="" /></div>
   <div class="customerService">
    <img src="~assets/img/tabbar/customerservice.png" alt="" />
   </div>
   <div class="favorite" @click="favoriteActive = !favoriteActive">
    <img v-if="favoriteActive" src="~assets/img/tabbar/favorite.png" alt="" />
    <img v-else src="~assets/img/tabbar/favorite_active.png" alt="" />
   </div>
  </div>
  <div class="right">
   <div class="addToCart" @click="addToCart"><span>加入购物车</span></div>
   <div class="buyNow" @click="buyNow"><span>立即购买</span></div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'DetailBottomBar',
 components: {},
 props: {},
 data() {
  //这里存放数据
  return {
   favoriteActive: true
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  //加入购物车
  addToCart() {
   this.$emit('addToCart')
  },
  buyNow() {
   this.$emit('buyNow')
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
.DetailBottomBar {
 position: fixed;
 height: 49px;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: white;
 z-index: 99;
 display: flex;
 font-size: 0.85em;
}
.DetailBottomBar .left {
 flex: 1;
 display: flex;
}
.DetailBottomBar .left img {
 max-width: 50%;
 margin: 25% 0;
}
.DetailBottomBar .left div {
 flex: 1;
 text-align: center;
}
.DetailBottomBar .right {
 flex: 1;
 display: flex;
}
.DetailBottomBar .right .addToCart {
 flex: 1;
 background-color: #ffe6e8;
 color: #ff5777;
 padding: 15.5px 0;
 text-align: center;
}
.DetailBottomBar .right .buyNow {
 flex: 1;
 background-color: #ff5777;
 color: white;
 padding: 15.5px 0;
 text-align: center;
}

/* @import url(); 引入公共css类'*/
</style>
