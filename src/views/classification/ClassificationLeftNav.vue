<!--  -->
<template>
 <div class="LeftNav">
  <div
   @click="getCurrentIndex(index)"
   class="content"
   :class="{ contentActive: index === currentIndex }"
   v-for="(item, index) in titleData"
   :key="index"
  >
   <div :class="{ itemActive: index === currentIndex }" class="item">
    {{ item }}
   </div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'LeftNav',
 components: {},
 props: {
  titleData: null
 },
 data() {
  //这里存放数据
  return {
   currentIndex: 0
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  getCurrentIndex(index) {
   this.currentIndex = index
   this.$emit('currentIndex', index)
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
.LeftNav {
 font-size: 14px;
 background-color: #f1f1f1;
}
.content {
 flex: 1;
 padding: 15px 0;

 text-align: center;
}
.content .item {
 width: 56px;
 padding: 0 15px 0 5px;
 /* padding-left: 5px;
 padding-right: 15px; */
}
.contentActive {
 background-color: white;
}
.itemActive {
 color: #ff5777;
 background-color: white;
 font-weight: bold;
 border-left: 3px solid #ff5777;
} /* @import url(); 引入公共css类'*/
</style>
