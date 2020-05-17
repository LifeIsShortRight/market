<!--  -->
<template>
 <div class="GoodsListItem" @click="pathTo">
  <div class="GoodsListItem-div">
   <!-- <a :href="goodsItem.link"> -->
   <div class="img">
    <img v-lazy="goodsItem.image" @load="loaded" />
    <div class="sellQuantity">已销售{{ goodsItem.sellQuantity }}件</div>
   </div>
   <div class="title">{{ goodsItem.title }}我是超出的标题</div>
   <div class="price">
    ￥{{ goodsItem.price
    }}<span class="oldPrice"
     ><del>￥{{ goodsItem.oldPrice }}</del></span
    >
   </div>
   <!-- </a> -->
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'GoodsListItem',
 components: {},
 props: {
  goodsItem: null,
  imageLoaded: {
   type: String,
   default: 'imageLoaded'
  }
 },
 data() {
  //这里存放数据
  return {}
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  pathTo() {
   this.$router.push('/Detail' + this.goodsItem['id'])
  },
  loaded() {
   this.$bus.$emit(this.imageLoaded)
  }
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {},
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
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
.GoodsListItem {
 width: 45%;
 margin: 0;
 padding-left: 3%;
 margin-bottom: 3%;
 text-align: center;
 font-size: 12px;
}
.GoodsListItem .GoodsListItem-div {
 width: 100%;
 margin: 0;
 padding: 0;
}
/* .GoodsListItem .GoodsListItem-div a {
 text-decoration-line: none;
 color: black;
} */
.GoodsListItem .GoodsListItem-div img {
 max-width: 100%;
 margin: 0 auto;
 border-radius: 5px;
}
.GoodsListItem .GoodsListItem-div .title {
 background-color: white;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
 padding-bottom: 3%;
}
.price {
 font-size: 16px;
 color: #ff5777;
}
.oldPrice {
 font-size: 13px;
 color: rgba(0, 0, 0, 0.5);
}
.img {
 position: relative;
}
.sellQuantity {
 position: absolute;
 left: 0;
 top: 85%;
 padding: 4% 5%;
 font-size: 11px;
 color: white;
 background-image: linear-gradient(
  to right,
  rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0.05)
 );
}
/* @import url(); 引入公共css类'*/
</style>
