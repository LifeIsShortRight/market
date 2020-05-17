<!--  -->
<template>
 <div class="Register">
  <nav-bar class="navBar">
   <div slot="center">注册</div>
  </nav-bar>
  <div class="body">
   <div class="input">
    <input
     @keyup="userTesting"
     class="username"
     v-model="username"
     type="text"
     placeholder="请输出您将注册的账号..."
    />
    <input
     class="password"
     type="password"
     v-model="password"
     placeholder="请输出您的密码..."
    />
    <div class="submit" @click="register">
     确认
    </div>
   </div>
   <div style="clear:both;"></div>
   <div class="other">
    <div class="tips">其他方式登录|<span @click="login">立即登录</span></div>
    <div class="otherLogin">
     <div><img src="~assets/img/login/QQ.png" alt="" /></div>
     <div><img src="~assets/img/login/Wechat.png" alt="" /></div>
     <div><img src="~assets/img/login/smartphone.png" alt="" /></div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar'
import { register } from 'Axios/profile'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Register',
 components: { NavBar },
 props: {},
 data() {
  //这里存放数据
  return {
   username: null,
   password: null
  }
 },
 //监听属性 类似于data概念
 computed: {},
 //监控data中的数据变化
 watch: {},
 //方法集合
 methods: {
  userTesting() {
   //检测账号是否存在
   register(this.username, this.password)
    .then(res => {
     res['message'] !== null ? this.$toast.toast('账号已存在') : {}
    })
    .catch(err => {
     console.log(err)
    })
  },
  register() {
   //发送ajax进行注册
   register(this.username, this.password, 1)
    .then(res => {
     console.log(res)
     if (res['status'] === true) {
      this.$toast.toast('注册成功,已为您跳转至登录页面')
      this.$router.push('Login')
     } else if (res['status'] === false) {
      this.$toast.toast('服务器繁忙，请重试')
     } else {
      this.$toast.toast('账号已存在')
     }
    })
    .catch(err => {
     console.log(err)
    })
  },
  login() {
   this.$router.push('/Login')
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
.submit {
 width: 25%;
 margin: 0 35.5%;
 padding: 2%;
 border-radius: 20px;
 display: block;
 text-align: center;
 background-image: linear-gradient(
  to right,
  rgba(255, 87, 119, 0.1),
  rgba(255, 87, 119, 1)
 );
 color: white;
}
.submit:active {
 background-image: linear-gradient(
  to left,
  rgba(255, 87, 119, 0.1),
  rgba(255, 87, 119, 1)
 );
}

/*正常的未被访问过的链接*/
/* a:link {
 text-decoration: none;
} */
/*已经访问过的链接*/
/* a:visited {
 text-decoration: none;
} */
/*鼠标划过(停留)的链接*/
/* a:hover {
  
 text-decoration: none;
} */
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
/* a:active {
 text-decoration: none;
} */
/* 获得焦点的时候 鼠标松开时显示的颜色*/
/* a:focus {
 text-decoration: none;
} */
.username,
.password {
 width: 75%;
 height: 25px;
 border: none;
 outline: none;
 margin-bottom: 10%;
 border-bottom: 0.5px solid rgba(05, 0, 0, 0.5);
}
.input {
 margin-bottom: 20%;
}
.tips {
 font-size: 14px;
 margin-bottom: 15%;
 font-weight: bold;
 color: rgba(0, 0, 0, 0.6);
}
.tips span {
 color: rgba(0, 0, 0, 0.75);
}
.otherLogin {
 display: flex;
}
.otherLogin div {
 flex: 1;
}
.navBar {
 background-color: lightcoral;
 color: white;
}
.body {
 text-align: center;
 margin-top: 30%;
 margin-bottom: 5%;
}
/* @import url(); 引入公共css类'*/
</style>
