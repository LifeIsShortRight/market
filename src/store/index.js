import Vue from 'vue'
import Vuex from "vuex"
import mutations from 'store/mutations'
import getters from 'store/getters'
import actions from 'store/actions'


Vue.use(Vuex)

const state = {
  cartList: [
    { "image": "http://192.168.1.101/images/pop/01/01.webp", "title": "这里是商品标题这里是商品标题这里是商品标题这里是商品标题这里是商品标题", "currentPrice": 29.9, "oldPrice": 39.9, "id": "pop01", "isSelect": false, "count": 1 }
  ]

}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {}
})