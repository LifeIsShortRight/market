import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//  const TabBar = () => import("../components/tabbar/TabBar");
const Home = () => import("views/home/Home")
const Classification = () => import("views/classification/Classification")
const Cart = () => import("views/cart/Cart")
const Detail = () => import("views/detail/Detail")
const Profile = () => import("views/profile/Profile")
const Login = () => import("views/profile/Login")
const Register = () => import("views/profile/Register")
Vue.use(Router)
//解决双击路由报错
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
// const routerReplace = Router.prototype.replace;
// Router.prototype.replace = function replace(location) {
//   return routerPush.call(this, location).catch(error => error);
// };
//路由信息
const routes = [
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/Classification",
    component: Classification
  },
  {
    path: "/Cart",
    component: Cart
  },
  {
    path: "/Profile",
    component: Profile,
  },
  {
    path: "/Detail:id",
    component: Detail
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Register",
    component: Register
  },
];

export default new Router({
  routes,
  mode: 'history'
})