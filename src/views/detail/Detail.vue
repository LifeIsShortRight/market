<!--  -->
<template>
 <div class="Detail">
  <detail-nav-bar ref="detailNavBar" @whatTag="goTo"></detail-nav-bar>
  <b-scroll
   v-if="isShowDetail"
   :pullUpLoad="true"
   @pullingUpEvent="loadMoreGoods"
   :probeType="1"
   @scrollPosition="getCurrentPosition"
   ref="detailScroll"
   class="wrapper"
  >
   <detail-top-image :topImages="topImages"></detail-top-image>
   <detail-info :Info="titleInfo"></detail-info>
   <detail-store-info :storeInfo="storeInfo"></detail-store-info>
   <detail-comment
    :commentInfo="commentInfo"
    ref="detailComment"
   ></detail-comment>
   <detail-display-info ref="detailDisplayInfo" :displayInfo="displayInfo">
    这里是展示信息和参数
   </detail-display-info>

   <goods-list
    ref="detailGoodsList"
    :goodsListItemImageLoaded="goodsListItemImageLoaded"
    :goods="showGoods"
   >
    <div slot="top">这里是推荐啊</div>
   </goods-list>
  </b-scroll>
  <back-top
   v-show="showBackTop"
   @click.native="backTop"
   class="backTop"
  ></back-top>
  <detail-bottom-bar
   @addToCart="addToCart"
   @buyNow="buyNow"
  ></detail-bottom-bar>
 </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailNavBar from 'views/detail/DetailNavBar'
import DetailTopImage from 'views/detail/DetailTopImage'
import DetailInfo from 'views/detail/DetailInfo'
import DetailStoreInfo from 'views/detail/DetailStoreInfo'
import DetailComment from 'views/detail/DetailComment'
import DetailDisplayInfo from 'views/detail/DetailDisplayInfo'
import DetailBottomBar from 'views/detail/DetailBottomBar'
import BackTop from 'components/common/backtop/BackTop'
import GoodsList from 'components/this/goods/GoodsList'
import { getDetail } from 'Axios/detail'
import BScroll from 'components/common/betterscroll/BScroll'
import { getDetailGoods } from 'Axios/home'
import { debounce } from 'common/tools'
export default {
 //import引入的组件需要注入到对象中才能使用
 name: 'Detail',
 components: {
  BScroll,
  GoodsList,
  BackTop,
  DetailNavBar,
  DetailTopImage,
  DetailInfo,
  DetailStoreInfo,
  DetailComment,
  DetailDisplayInfo,
  DetailBottomBar
 },
 props: {},
 data() {
  //这里存放数据
  return {
   goodsListItemImageLoaded: 'detailGoodsLoaded',
   isShowDetail: true,
   id: null,
   oId: null,
   topImages: null,
   titleInfo: null,
   storeInfo: null,
   displayInfo: null,
   commentInfo: null,
   goods: {
    page: 0,
    list: []
   },
   currentPosition: 0,
   showBackTop: false,
   DetailNavBarIndex: 0,
   distanceOfParent: []
  }
 },
 //监听属性 类似于data概念
 computed: {
  //推荐页商品信息
  showGoods() {
   return this.goods.list
  }
 },
 //监控data中的数据变化
 watch: {
  //监控路由在路由变化时更新对应数据
  $route() {
   this.oId = this.$route.params.id
   if (this.oId !== undefined) {
    this.oId === this.id ? {} : this.reload()
   }
  }
 },
 //方法集合
 methods: {
  //加入购物车
  addToCart() {
   const commodityInfo = {}
   commodityInfo.image = this.topImages[0]
   commodityInfo.title = this.titleInfo.title
   commodityInfo.currentPrice = this.titleInfo.currentPrice
   commodityInfo.oldPrice = this.titleInfo.price
   commodityInfo.id = this.id
   this.$store.dispatch('addToCart', commodityInfo).then(res => {
    //提示加入购物车成功
    res ? this.$toast.toast('加入购物车成功') : {}
   })
  },
  //立即购买
  buyNow() {
   console.log(this.$store.state.cartList)
  },
  //返回顶部
  backTop() {
   this.$refs.detailScroll.scrollTo(0, 0)
  },
  //当前滑动到位置
  getCurrentPosition(position) {
   this.currentPosition = position
   //防抖提取
   this.debounce(position)
  },
  //上拉加载更多
  loadMoreGoods() {
   this.getDetailGoods()
  },
  //销毁dom 更新数据后重新创建dom
  reload() {
   this.isShowDetail = false
   this.$nextTick(() => {
    this.getDetail()
    this.isShowDetail = true
   })
  },
  //跳转至页面内对应位置
  goTo(index) {
   this.$refs.detailScroll.scrollTo(0, this.distanceOfParent[index], 500)
  },
  //获取推荐页数据
  getDetailGoods(type, page) {
   type = 'sell'
   page = this.goods.page + 1

   getDetailGoods(type, page)
    .then(res => {
     if (res.sell !== null) {
      this.goods.page++
      this.goods.list.push(...res.sell)
     } else {
      console.log('没有更多数据了')
     }
    })
    .catch(err => {
     console.log(err)
    })
  },
  getDetail() {
   this.id = this.$route.params.id
   getDetail(this.id)
    .then(res => {
     this.topImages = res.images
     this.titleInfo = res.titleInfo
     this.storeInfo = res.storeInfo
     this.displayInfo = res.images
     this.commentInfo = res.commentInfo
    })
    .catch(err => {
     console.log(err)
    })
  }
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
  this.getDetail()
  this.getDetailGoods()
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
  // 防抖封装监听图片加载完成事件触发
  let refresh = debounce(this.$refs.detailScroll.loaded)
  let distanceOfParent = debounce(() => {
   //获取子组件到父组件（scroll）的距离
   if (this.distanceOfParent.length === 0) {
    this.distanceOfParent.push(0)
    this.distanceOfParent.push(-this.$refs.detailComment.$el.offsetTop)
    this.distanceOfParent.push(-this.$refs.detailDisplayInfo.$el.offsetTop)
    this.distanceOfParent.push(-this.$refs.detailGoodsList.$el.offsetTop)
    this.distanceOfParent.push(-Number.MAX_VALUE)
   }
  })
  //监听图片加载完成
  this.$bus.$on(this.goodsListItemImageLoaded, () => {
   //刷新scroll
   refresh()
   distanceOfParent()
  })
  ////用防抖函数封装滚动事件触发
  this.debounce = debounce(position => {
   //距离顶部一定位置后显示backtop
   position.y <= -this.$refs.detailDisplayInfo.$el.offsetTop
    ? (this.showBackTop = true)
    : (this.showBackTop = false)
   //滚动到一定位置更新navbar索引
   let length = this.distanceOfParent.length - 1
   if (position.y <= 0) {
    for (let i = 0; i < length; i++) {
     if (
      this.$refs.detailNavBar.currentIndex !== i &&
      position.y <= this.distanceOfParent[i] &&
      position.y > this.distanceOfParent[i + 1]
     ) {
      this.DetailNavBarIndex = i
      this.$refs.detailNavBar.currentIndex = this.DetailNavBarIndex
     }
    }
   }
  }, 50)
 },
 beforeCreate() {}, //生命周期 - 创建之前
 beforeMount() {}, //生命周期 - 挂载之前
 beforeUpdate() {}, //生命周期 - 更新之前
 updated() {}, //生命周期 - 更新之后
 beforeDestroy() {}, //生命周期 - 销毁之前
 destroyed() {}, //生命周期 - 销毁完成
 activated() {
  // this.id === this.$route.params.id ? {} : this.getDetail()
 }, //如果页面有keep-alive缓存功能，这个函数会触发
 deactivated() {
  // this.$bus.$off(this.goodsListItemImageLoaded, this.refresh)
 }
}
</script>
<style scoped>
/* .Detail {
} */
.wrapper {
 overflow: hidden;
 position: absolute;
 top: 44px;
 left: 0;
 right: 0;
 bottom: 49px;
}
/* @import url(); 引入公共css类'*/
</style>
