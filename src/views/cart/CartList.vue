<!--  -->
<template>
 <div class="CartList">
  <div class="item" v-for="(item, index) in cartList" :key="index">
   <div class="isSelect" @click="isSelected(item)">
    <div
     :class="{ selectedItem: item.isSelect === true }"
     class="selectItem"
    ></div>
   </div>
   <div class="displayImage"><img :src="item.image" alt="" /></div>
   <div class="commodityInfo">
    <div class="title">{{ item.title }}</div>
    <div class="price">
     ￥{{ item.currentPrice
     }}<span
      ><del>￥{{ item.oldPrice }}</del></span
     >
    </div>
   </div>
   <div class="quantity">
    <div>
     <span @click="increment(item)">+</span>{{ item.count
     }}<span @click="decrement(item)">-</span>
    </div>
   </div>
   <!-- <div style="clear:both"></div> -->
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ADD_COUNTER, LESS_COUNTER, IS_SELECTED } from 'store/mutationsFName'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'CartList',
 components: {},
 props: {},
 data() {
  //这里存放数据
  return {
   cartList: this.$store.state.cartList
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  isSelected(item) {
   this.$store.commit(IS_SELECTED, item)
  },
  increment(item) {
   this.$store.commit(ADD_COUNTER, item)
  },
  decrement(item) {
   this.$store.commit(LESS_COUNTER, item)
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
.CartList {
 overflow: hidden;
}
.CartList .item {
 display: flex;
 margin: 5px;
}
.isSelect {
 width: 6%;
 margin-right: 1%;
 text-align: center;
}
.isSelect .selectItem {
 width: 15px;
 height: 15px;
 border: 1px solid rgba(0, 0, 0, 0.3);
 border-radius: 50%;
 margin: 200% 0;
}
.isSelect .selectedItem {
 background-color: lightcoral;
}
.displayImage {
 width: 22%;
 margin-right: 1%;
}
.displayImage img {
 display: block;
 max-width: 100%;
 border-radius: 5%;
}
.commodityInfo {
 width: 55%;
 margin-right: 1%;
}
.commodityInfo .title {
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
}
.commodityInfo .price {
 margin-top: 25%;
 color: rgb(250, 100, 50);
}
.price span {
 font-size: 0.75em;
 color: gray;
}
.quantity {
 width: 14%;
}
.quantity span {
 padding: 2%;
}
.quantity div {
 margin-top: 130%;
}
/* @import url(); 引入公共css类'*/
</style>
