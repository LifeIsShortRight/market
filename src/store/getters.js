export default {
  commodityQuantity(state) {
    return state.cartList.length
  },
  priceTotal(state) {
    let total = 0
    total
    for (let item of state.cartList) (
      item.isSelect ? total += item.currentPrice * 100 * item.count : {}
    )

    return total / 100
  },
  isAllSelected(state) {
    for (let item of state.cartList) {
      if (item.isSelect === false) {
        return false
      }
    }
    return true
  },
  selectedCommodityQuantity(state) {
    let total = 0
    for (let item of state.cartList) {
      item.isSelect == true ? total++ : {}
    }
    return total
  }

}