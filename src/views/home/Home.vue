<template>
 <div class="home">
  <div>
   <div class="home-nav">
    <nav-bar>
     <div slot="left"></div>
     <div slot="center">首页</div>
     <div slot="right"></div>
    </nav-bar>
   </div>
   <div v-show="isShowTabControl2" :class="{ tabControl2: isShowTabControl2 }">
    <tab-control ref="tabControl2" @tabClick="tabClick" :titleData="titleData">
    </tab-control>
   </div>
   <b-scroll
    class="wrapper"
    ref="scroll"
    :probeType="1"
    @scrollPosition="contentScroll"
    :pullUpLoad="true"
    @pullingUpEvent="loadMoreGoods"
    key="home-b-scroll"
   >
    <div class="home-carousel">
     <slider @initSuccess="sliderLoaded" :carouselData="carouselData"></slider>
    </div>
    <div class="home-tops">
     <tops :topsData="topsData" @topsImageLoaded="topsImageLoaded"></tops>
    </div>
    <div class="home-tops">
     <tops :topsData="topsData" @topsImageLoaded="topsImageLoaded"></tops>
    </div>
    <div class="home-tops">
     <tops :topsData="topsData" @topsImageLoaded="topsImageLoaded"></tops>
    </div>
    <div class="tabControl1">
     <tab-control ref="tabControl1" @tabClick="tabClick" :titleData="titleData">
     </tab-control>
    </div>
    <div class="goodslist">
     <goods-list :imageLoaded="imageLoaded" :goods="showGoods"> </goods-list>
    </div>
   </b-scroll>
   <div v-show="backTopShow" @click="backTop">
    <back-top></back-top>
   </div>
  </div>
 </div>
</template>

<script>
// import axios from 'axios'
import NavBar from 'components/common/navbar/NavBar'
import Slider from 'components/common/slider/Slider'
import Tops from 'components/common/tops/Tops'
import BScroll from 'components/common/betterscroll/BScroll'
import BackTop from 'components/common/backtop/BackTop'
import GoodsList from 'components/this/goods/GoodsList'
import TabControl from 'components/this/TabControl'

import { getHomeMutidata, getHomeGoods } from 'Axios/home'
import { debounce } from 'common/tools'
export default {
 name: 'Home',
 components: {
  NavBar,
  Slider,
  Tops,
  TabControl,
  GoodsList,
  BScroll,
  BackTop
 },
 data() {
  return {
   imageLoaded: 'homeGoodsLoaded',
   carouselData: null,
   topsData: null,
   titleData: ['流行', '新款', '精品'],
   currentType: 'pop',
   backTopShow: false,
   isShowTabControl2: false,
   tabControlPosition: 0,
   saveY: 0,
   goods: {
    pop: { page: 0, list: [] },
    new: { page: 0, list: [] },
    sell: { page: 0, list: [] }
   }
  }
 },
 computed: {
  showGoods() {
   return this.goods[this.currentType].list
  }
 },

 created() {
  //获取轮播图 推荐 的数据
  this.getHomeMutidata()
  //获取商品数据
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')
  // axios({
  //  url: 'http://127.0.0.1/home/mutidata.json'
  // })
  //  .then(res => {
  //   console.log(res.data)
  //  })
  //  .catch(err => {
  //   console.log(err)
  //  })
 },
 methods: {
  /* 事件监听 */
  topsImageLoaded() {
   this.tabControlPosition = this.$refs.tabControl1.$el.offsetTop
  },
  sliderLoaded() {
   this.tabControlPosition = this.$refs.tabControl1.$el.offsetTop
  },
  loadMoreGoods() {
   this.getHomeGoods(this.currentType)
  },
  contentScroll(position) {
   //backTopShow
   this.backTopShow = position.y < -(this.tabControlPosition + 100)
   //isShowTabControl
   this.isShowTabControl2 = position.y < -this.tabControlPosition
  },
  backTop() {
   this.$refs.scroll.scrollTo(0, 0)
  },
  tabClick(index) {
   if (index == 1) {
    this.currentType = 'new'
   } else if (index == 2) {
    this.currentType = 'sell'
   } else {
    this.currentType = 'pop'
   }
   this.$refs.tabControl1.currentIndex = index
   this.$refs.tabControl2.currentIndex = index
  },

  /* 网络请求 */
  getHomeMutidata() {
   getHomeMutidata()
    .then(res => {
     this.carouselData = res.carouselData
     this.topsData = res.topsData
    })
    .catch(err => {
     console.log(err)
    })
  },
  getHomeGoods(type) {
   let page = this.goods[type].page + 1
   getHomeGoods(type, page)
    .then(res => {
     if (res[type] != null) {
      // this.titleData = res.titleData
      this.goods[type].page = page
      this.goods[type].list.push(...res[type])
     } else {
      console.log('没有更多数据了！')
     }
    })
    .catch(err => {
     console.log(err)
    })
  }
  //防抖
 },
 mounted() {
  //监听goodslistitem图片加载完成并刷新bscroll
  let func = this.$refs.scroll.loaded
  let refresh = debounce(func)
  this.refresh = () => {
   refresh()
  }
  this.$bus.$on(this.imageLoaded, () => {
   this.refresh()
  })
  // new BtterScroll(document.querySelector('.goodslist'))
 },
 activated() {
  this.$refs.scroll.loaded()
  this.$refs.scroll.scrollTo(0, this.saveY, 0)
 },
 deactivated() {
  //保存离开时的y轴坐标
  this.saveY = this.$refs.scroll.scroll.y
  //离开时关闭全局事件监听
  // this.$bus.$off(this.imageLoaded, this.refresh)
 },
 updated() {}
}
</script>

<style scoped>
.wrapper {
 /* height: 300px; */
 position: absolute;
 top: 44px;
 left: 0;
 right: 0;
 bottom: 49px;
}
/* .home {
 margin-top: 44px;
 padding-bottom: 49px;
} */
.home .home-nav {
 position: relative;
 z-index: 9;
 background-color: lightcoral;
 color: white;
 font-weight: normal;
}
.home .tabControl2 {
 position: fixed;
 right: 0;
 left: 0;
 top: 44px;
 z-index: 9;
}
/* .home .tabControl1 {
 position: relative;
} */
</style>
