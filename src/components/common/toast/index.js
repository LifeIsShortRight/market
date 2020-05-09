import Toast from './Toast'

const obj = {}
obj.install = function (Vue) {
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //实例化构造器
  const toast = new toastConstructor()
  //挂载到dom上
  toast.$mount(document.createElement('div'))
  //将dom添加至body内
  document.body.appendChild(toast.$el)
  //将toast添加至Vue原型
  Vue.prototype.$toast = toast
}
export default obj 