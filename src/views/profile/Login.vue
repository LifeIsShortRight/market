<!--  -->
<template>
 <div class="Login">
  <nav-bar class="navBar">
   <div slot="center">登录</div>
  </nav-bar>
  <div class="body">
   <div class="input">
    <input
     class="username"
     v-model="username"
     type="text"
     placeholder="请输出您的账号...(邮箱/手机号)"
    />
    <input
     class="password"
     type="password"
     v-model="password"
     placeholder="请输出您的密码..."
    />
    <div class="submit" @click="login">
     确认
    </div>
   </div>
   <div style="clear:both;"></div>
   <div class="other">
    <div class="tips">其他方式登录|<span @click="register">立即注册</span></div>
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
import { login } from 'Axios/profile'
// import { debounce } from 'common/tools'
import {
 setCookie
 //  delCookie
} from 'common/tools'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Login',
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
  register() {
   this.$router.push('/Register')
  },
  login() {
   let cookie = document.cookie
   login(this.username, this.password, cookie).then(res => {
    if (document.cookie !== '') {
     //  delCookie(res['cookieName'])
     this.$toast.toast('账号已登录')
     this.$router.push('/Profile')
    } else {
     if (res['status'] === 1) {
      this.$toast.toast('登录成功')
      setCookie(this.username, res['cookie'], 0.1)
      this.$router.push('/Profile')
     } else if (res['status'] === 0) {
      this.$toast.toast('账号或密码错误')
     } else if (res['status'] === 2) {
      this.$toast.toast('账号不存在')
     }
    }
   })
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
.Login {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 49px;
}
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
.other {
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
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
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 49px;
 text-align: center;
 margin-top: 30%;
 margin-bottom: 5%;
}
/* @import url(); 引入公共css类'*/
</style>
