<template>
 <div class="Cart">
  <nar-bar class="narBar">
   <div slot="center">购物车({{ commodityQuantity }})</div>
  </nar-bar>
  <b-scroll class="cartScroll" ref="cartScroll">
   <cart-list></cart-list>
  </b-scroll>
  <cartTotal @payClick="payClick"></cartTotal>
 </div>
</template>

<script>
import NarBar from 'components/common/navbar/NavBar'
import BScroll from 'components/common/betterscroll/BScroll'
import CartList from 'views/cart/CartList'
import cartTotal from 'views/cart/CartTotal'
import { mapGetters } from 'vuex'
export default {
 name: 'Cart',
 components: {
  NarBar,
  BScroll,
  CartList,
  cartTotal
 },
 methods: {
  payClick(quantity) {
   quantity === 0 ? this.$toast.toast('没想到你竟然是一个喜欢买空气的人') : {}
  }
 },
 computed: {
  ...mapGetters(['commodityQuantity'])
 },
 mounted() {},
 activated() {
  this.$refs.cartScroll.loaded()
 }
}
</script>

<style scoped>
.narBar {
 color: white;
 background-color: lightcoral;
}
.cartScroll {
 overflow: hidden;
 position: fixed;
 top: 44px;
 left: 0;
 right: 0;
 bottom: 89px;
}
</style>
