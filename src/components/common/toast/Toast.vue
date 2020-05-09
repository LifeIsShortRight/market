<!--  -->
<template>
 <div v-show="isShowToast" ref="toast" class="Toast">
  {{ message }}
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Toast',
 components: {},
 props: {},
 data() {
  //这里存放数据
  return {
   isShowToast: false,
   message: '',
   duration: {
    type: Number,
    default: 2500
   }
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  toast(message = '你不说你要做什么我怎么知道你要做什么', duration = 2500) {
   this.message = message
   this.duration = duration
   this.isShowToast = true
   setTimeout(() => {
    //获取根当前屏幕的长和宽
    let width = window.innerWidth
    let height = window.innerHeight
    //获取操作元素 的宽度和长度
    let domWidth = this.$refs.toast.clientWidth
    let domHight = this.$refs.toast.clientHeight
    this.$refs.toast.style.left = (width - domWidth) / 2 + 'px'
    this.$refs.toast.style.top = (height - domHight) / 2 + 'px'
    //规定动画播放时间
    this.$refs.toast.style.animationDuration = this.duration / 1000 + 's'
   }, 20)
   setTimeout(() => {
    this.isShowToast = false
   }, this.duration)
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
.Toast {
 height: 16px;
 padding: 5px;
 border-radius: 5px;
 color: rgba(255, 255, 255, 0);
 background-color: rgba(0, 0, 0, 0);
 position: fixed;
 font-size: 0.85em;
 bottom: -100px;
 animation-name: toast;
 z-index: 999;
}
@keyframes toast {
 0% {
  color: rgba(255, 255, 255, 0);
  background-color: rgba(0, 0, 0, 0);
 }
 50% {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 0, 0, 0.5);
 }
 100% {
  color: rgba(255, 255, 255, 0);
  background-color: rgba(0, 0, 0, 0);
 }
}
/* @import url(); 引入公共css类'*/
</style>
