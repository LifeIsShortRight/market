<!--  -->
<template>
 <div v-if="Info" class="DetailInfo">
  <div class="title">{{ Info.title }}</div>
  <div class="priceInfo">
   <span class="currentPrice"><span>￥</span>{{ Info.currentPrice }}</span>
   <span class="price"
    ><del><span>￥</span>{{ Info.price }}</del></span
   >
   <span class="eventInfo" v-if="Info.isEventInfo">{{ Info.eventInfo }}折</span>
  </div>
  <div class="sellInfo">
   <span class="sellQuantity">销量&nbsp;{{ Info.sellQuantity }}</span>
   <span class="keep">收藏&nbsp;{{ Info.keep }}</span>
  </div>
  <div class="service" ref="service">
   <div
    :class="{ last: index === Info.service.length - 1 }"
    class="serviceItem"
    v-for="(item, index) in Info.service"
    :key="item"
   >
    ✅{{ item }}
   </div>
   <div style="clear:both;"></div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'DetailInfo',
 components: {},
 props: {
  Info: null
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
 methods: {},
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
.title {
 padding-left: 5px;
 padding-right: 5px;
 font-weight: bold;
}
.priceInfo {
 padding: 10px 20px;
}
.priceInfo span span {
 font-size: 0.85em;
}
.currentPrice {
 font-size: 2em;
 color: lightcoral;
 padding: 2px;
}
.price {
 padding: 2px;
 color: rgba(0, 0, 0, 0.5);
}
.eventInfo {
 font-size: 0.85em;
 text-align: center;
 vertical-align: top;
 border-radius: 5px;
 padding: 0.5%;
 color: whitesmoke;
 background-color: #ff5777;
}
.sellInfo {
 padding: 5px;
 display: flex;
 font-size: 0.75em;
 color: gray;

 margin: 1px 5px;
}
.sellQuantity {
 width: 33%;
 text-align: center;
}
.keep {
 width: 33%;
 text-align: center;
}
.service {
 border-top: 0.5em solid rgba(0, 0, 0, 0.1);
 border-bottom: 0.5em solid rgba(0, 0, 0, 0.1);
 padding-top: 2%;
 padding-bottom: 2%;
 font-size: 0.85em;
 font-weight: bold;
}
.service .serviceItem {
 padding-left: 3%;
 padding-top: 1%;
 padding-bottom: 1%;
 float: left;
 width: 30%;
}
.service .last {
 width: 100%;
}
/* @import url(); 引入公共css类'*/
</style>
