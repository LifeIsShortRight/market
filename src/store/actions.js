import { ADD_COUNTER, ADD_COMMODITY } from 'store/mutationsFName'
export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      try {
        //查找购物车中是否已存在该商品
        let commodity = context.state.cartList.find(item => item.id === payload.id)
        if (commodity) {
          context.commit(ADD_COUNTER, commodity)
        } else {
          context.commit(ADD_COMMODITY, payload)
          // state.cartList.push(payload)
        }
        resolve(true)
      } catch (e) {
        reject(e)
      }
    })
  }
}