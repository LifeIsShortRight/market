import {
  ADD_COUNTER,
  LESS_COUNTER,
  ADD_COMMODITY,
  IS_SELECTED,
  ALL_SELECT,
} from 'store/mutationsFName'
export default {
  //商品数量加
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  //商品数量减
  [LESS_COUNTER](state, payload) {
    payload.count <= 1 ? {} : payload.count--
  },
  //添加新商品
  [ADD_COMMODITY](state, payload) {
    payload.isSelect = false
    payload.count = 1
    state.cartList.push(payload)
  },
  //选择商品
  [IS_SELECTED](state, payload) {
    payload.isSelect = !payload.isSelect
    // state.cartList[payload].isSelect = !state.cartList[payload].isSelect
  },
  //选择所有商品
  [ALL_SELECT](state) {
    for (let item of state.cartList) {
      item.isSelect = !item.isSelect
    }
  }

}