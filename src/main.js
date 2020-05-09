import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
//安装吐司
Vue.use(toast)
//安装懒加载
Vue.use(LazyLoad, {
  loadding: require('assets/img/loading/loading.png'),
  error: require('assets/img/loading/loading.png')
})
Vue.config.productionTip = false
//解决移动端300ms点击延迟
FastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
//时间格式化函数
Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return format;
}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
