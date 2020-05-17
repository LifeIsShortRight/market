<!--  -->
<template>
 <div class="MineInfo">
  <nav-bar class="navBar">
   <div slot="center">{{ username }}</div>
   <div slot="right" @click="logout">注销</div>
  </nav-bar>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar'
import { getUserInfo } from 'Axios/profile'
import { delCookie } from 'common/tools'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'MineInfo',
 components: {
  NavBar
 },
 props: {},
 data() {
  //这里存放数据
  return {
   username: null
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  logout() {
   let cname
   cname = document.cookie.split('=')[0]
   delCookie(cname)
   location.reload()
  },
  getUserInfo() {
   if (document.cookie !== '') {
    getUserInfo(document.cookie).then(res => {
     if (res['status']) {
      this.username = res['username']
     } else {
      //如果未登录就跳转到登录界面
      this.$router.push('/Login')
     }
    })
   } else {
    //如果没有cookie就跳转到登录界面
    this.$router.push('/Login')
   }
  }
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
  // this.getUserInfo()
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {},
 beforeCreate() {}, //生命周期 - 创建之前
 beforeMount() {}, //生命周期 - 挂载之前
 beforeUpdate() {}, //生命周期 - 更新之前
 updated() {}, //生命周期 - 更新之后
 beforeDestroy() {}, //生命周期 - 销毁之前
 destroyed() {}, //生命周期 - 销毁完成
 activated() {
  this.getUserInfo()
 } //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.navBar {
 background-color: lightcoral;
 color: white;
}
/* @import url(); 引入公共css类'*/
</style>
