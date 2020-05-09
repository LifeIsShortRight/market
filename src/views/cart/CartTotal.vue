<!--  -->
<template>
 <div class="CartTotal">
  <div class="allSelect" @click="allSelect">
   <div :class="{ allSelected: isAllSelected }" class="item1"></div>
   <div class="item2">全选</div>
  </div>
  <div class="total">合计：￥{{ priceTotal }}</div>
  <div @click="pay" class="pay">
   <div>去结算({{ selectedCommodityQuantity }})</div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ALL_SELECT } from 'store/mutationsFName'
import { mapGetters } from 'vuex'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'CartTotal',
 components: {},
 props: {},
 data() {
  //这里存放数据
  return {}
 },
 //监听属性 类似于data概念
 computed: {
  ...mapGetters(['priceTotal', 'isAllSelected', 'selectedCommodityQuantity'])
 },
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  pay() {
   this.$emit('payClick', this.selectedCommodityQuantity)
  },
  allSelect() {
   this.$store.commit(ALL_SELECT)
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
.CartTotal {
 position: fixed;
 left: 0;
 right: 0;
 bottom: 49px;
 height: 40px;
 background-color: whitesmoke;
 display: flex;
}
.allSelect {
 width: 20%;
 display: flex;
}
.allSelect .item1 {
 width: 27px;
 margin: 10px 5px;
 width: 15px;
 height: 15px;
 border: 1px solid rgba(0, 0, 0, 0.3);
 border-radius: 50%;
}
.allSelected {
 background-color: #f08080;
}
.allSelect .item2 {
 font-size: 0.85em;
 margin: 10px 0 5px;
}
.total {
 width: 50%;
 margin-left: 5%;
 margin-top: 3%;
 font-size: 0.85em;
}
.pay {
 width: 30%;
 text-align: center;
 font-size: 0.85em;
 color: white;
 background-color: rgb(250, 180, 50);
}
.pay div {
 margin-top: 10%;
}
/* @import url(); 引入公共css类'*/
</style>
