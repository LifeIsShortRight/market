<!--  -->
<template>
 <div v-if="storeInfo" class="DetailStoreInfo">
  <div class="header">
   <span class="storeLogo"><img :src="storeInfo.logo" alt=""/></span>
   <span class="storeName">{{ storeInfo.storeName }}</span>
  </div>
  <div class="body">
   <div class="bodyLeft">
    <div>
     <span>{{ storeInfo.allSellQuantity }}</span>
     <br /><span>总销量</span>
    </div>
    <div>
     <span>{{ storeInfo.allCommodity }}</span>
     <br /><span>全部宝贝</span>
    </div>
   </div>

   <div class="bodyRight">
    <div>
     描述相符&nbsp;<span class="highColor" v-if="storeInfo.appropriate > 4.8"
      >{{ storeInfo.appropriate }} &nbsp;⬆
     </span>
     <span class="lowColor" v-else>{{ storeInfo.appropriate }}&nbsp;⬇ </span>
    </div>
    <div>
     价格合理&nbsp;<span class="highColor" v-if="storeInfo.satisfiedPrice > 4.8"
      >{{ storeInfo.satisfiedPrice }}&nbsp;⬆</span
     >
     <span class="lowColor" v-else>{{ storeInfo.satisfiedPrice }}&nbsp;⬇</span>
    </div>
    <div>
     质量满意&nbsp;<span class="highColor" v-if="storeInfo.quality > 4.8"
      >{{ storeInfo.quality }}&nbsp;⬆</span
     >
     <span class="lowColor" v-else>{{ storeInfo.quality }}&nbsp;⬇</span>
    </div>
   </div>
  </div>
  <div class="footer"><div class="footerItem">进店看看</div></div>
  <div style="clear:both;"></div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'DetailStoreInfo',
 components: null,
 props: {
  storeInfo: {}
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
.header {
 padding-left: 5%;
 padding-top: 5%;
 padding-bottom: 5%;
}
.storeLogo img {
 width: 20%;
}
.storeName {
 font-size: 1.1em;
 padding-left: 5%;
 padding-bottom: 10%;
 position: relative;
 bottom: 1em;
}
.body {
 display: flex;
 padding: 1%;
}
.body .bodyLeft {
 flex: 1;
}
.body .bodyLeft div {
 float: left;
 width: 40%;
 text-align: center;
 vertical-align: middle;
}
.body .bodyLeft span {
 padding-left: 15%;
 font-size: 0.75em;
}
.bodyRight {
 flex: 1;
 padding: 1;
 border-left: 0.15em solid rgba(0, 0, 0, 0.3);
}
.bodyRight div {
 vertical-align: middle;
 padding-left: 20%;
 font-size: 0.75em;
}
.bodyRight div .highColor {
 color: rgb(255, 150, 0);
 padding-left: 5%;
}
.bodyRight div .lowColor {
 color: rgb(0, 150, 40);
 padding-left: 5%;
}
.footer {
 text-align: center;
 padding: 5%;
}
.footer .footerItem {
 border-radius: 5px;
 width: 60%;
 margin: 0 auto;
 background-color: rgba(0, 0, 0, 0.1);
}
.footer .footerItem:active {
 color: red;
}

/* @import url(); 引入公共css类'*/
</style>
