<!--  -->
<template>
 <div class="DetailComment" v-if="commentInfo">
  <slot></slot>
  <div class="header">买家评论<span style="float:right;">&gt;</span></div>
  <div class="label">
   <div v-for="(label, index) in commentInfo.labels" :key="index">
    <span> {{ label }}({{ index }}) </span>
   </div>
  </div>
  <div style="clear:both;"></div>
  <div class="userComment">
   <div class="userName">{{ commentInfo.username }}</div>
   <div class="content">{{ commentInfo.content }}</div>
   <div class="time">{{ commentInfo.time | dateFormat }}</div>
   <div class="images" v-for="item in commentInfo.images" :key="item">
    <img :src="item" />
   </div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'DetailComment',
 components: {},
 props: {
  commentInfo: null
 },
 data() {
  //这里存放数据
  return {}
 },
 //监听属性 类似于data概念
 computed: {},
 filters: {
  dateFormat(time) {
   time = time * 1000
   let fmt = 'yyyy-MM-dd hh:mm:ss'
   return new Date(time).format(fmt)
  }
 },
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
.DetailComment {
 padding: 5%;
 border-top: 0.5em solid rgba(0, 0, 0, 0.1);
 border-bottom: 0.5em solid rgba(0, 0, 0, 0.1);
}
.header {
 font-size: 0.75em;
 padding-bottom: 5%;
}
.label {
 font-size: 0.75em;
 display: flex;
 flex-wrap: wrap;
}
.label div {
 margin-left: 2%;
 margin-bottom: 3%;
}
.label div span {
 border-radius: 20%;
 background-color: #ffe8ee;
 color: #ff2255;
}
.userName {
 padding-top: 1em;
 padding-bottom: 0.5em;
}
.content {
 color: rgba(0, 0, 0, 0.85);
 font-size: 0.85em;
 padding-top: 0.5em;
 padding-bottom: 0.5em;
}
.time {
 padding-top: 0.5em;
 padding-bottom: 0.5em;
 font-size: 0.65em;
 color: rgba(0, 0, 0, 0.5);
}
.images {
 overflow: hidden;
 display: flex;
 flex-wrap: wrap;
}
.images img {
 max-width: 31%;
 padding: 1%;
}
/* @import url(); 引入公共css类'*/
</style>
