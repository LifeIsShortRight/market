<template>
 <div class="Classification">
  <back-top @click.native="backTop" v-if="isShowBackTop"></back-top>
  <nav-bar class="cNavBar">
   <div slot="center">分类</div>
  </nav-bar>
  <div class="content">
   <b-scroll ref="leftBscroll" class="leftBscroll">
    <classification-left-nav
     v-if="leftNavTitleData"
     class="leftNav"
     :titleData="leftNavTitleData"
     @currentIndex="leftNavIndex"
    />
   </b-scroll>
   <div class="rightContent">
    <tab-control
     class="tabControl"
     @tabClick="getCurrentIndex"
     :titleData="['综合', '销量', '新品']"
    ></tab-control>
    <b-scroll
     ref="rightBscroll"
     class="rightBscroll"
     :probeType="1"
     @scrollPosition="rightContentScroll"
     :pullUpLoad="true"
     @pullingUpEvent="rightLoadMoreGoods"
    >
     <goods-list :imageLoaded="cImageLoaded" :goods="showGoods"></goods-list>
    </b-scroll>
   </div>
  </div>
 </div>
</template>

<script>
import BScroll from 'components/common/betterscroll/BScroll'
import BackTop from 'components/common/backtop/BackTop'
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/this/TabControl'
import GoodsList from 'components/this/goods/GoodsList'
import ClassificationLeftNav from 'views/classification/ClassificationLeftNav'

import { debounce } from 'common/tools'
import { getClassificationData } from 'Axios/classification'
export default {
 name: 'Classification',
 components: {
  NavBar,
  BackTop,
  ClassificationLeftNav,
  BScroll,
  TabControl,
  GoodsList
 },
 data() {
  return {
   goods: {
    all: { page: 0, list: [] },
    allsort: { page: 0, list: [] },
    new: { page: 0, list: [] }
   },
   currentTopType: 'all',
   leftNavTitleData: null,
   isShowBackTop: false,
   cImageLoaded: 'cImageLoaded'
  }
 },
 computed: {
  //要传到子组件的对应数据
  showGoods() {
   return this.goods[this.currentTopType].list
  }
 },
 methods: {
  //销量排序
  // allToSort(list) {
  //  let sort = []
  //  let sortResult = []
  //  for (let item of list) {
  //   sort.push(item.sellQuantity)
  //  }
  //  sort = sort.sort((a, b) => b - a)
  //  for (let i of sort) {
  //   sortResult.push(list.find(item => item.sellQuantity === i))
  //  }
  //  return sortResult
  // },
  //根据左标签的选择显示相应的数据
  leftNavIndex(index) {
   console.log(this.leftNavTitleData.length)
   switch (index) {
    case 0:
     this.goods = {
      all: { page: 0, list: [] },
      allsort: { page: 0, list: [] },
      new: { page: 0, list: [] }
     }
     this.getClassificationData('all')
     this.getClassificationData('allsort')
     this.getClassificationData('new')
     break
    default:
     this.goods = {
      all: { page: 0, list: [] },
      allsort: { page: 0, list: [] },
      new: { page: 0, list: [] }
     }
     break
   }
  },
  //返回顶部
  backTop() {
   console.log('jjj')
   this.$refs.rightBscroll.scrollTo(0, 0)
  },
  //获取tabcontrol索引显示对应数据
  getCurrentIndex(index) {
   this.currentIndex = index
   switch (index) {
    case 0:
     this.currentTopType = 'all'
     break
    case 1:
     this.currentTopType = 'allsort'
     break
    case 2:
     this.currentTopType = 'new'
     break
   }
  },
  //右边区域滚动监听
  rightContentScroll(position) {
   position.y < -500
    ? (this.isShowBackTop = true)
    : (this.isShowBackTop = false)
  },
  //右边区域下拉加载更多
  rightLoadMoreGoods() {
   this.getClassificationData(this.currentTopType)
  },
  //网络请求
  getClassificationData(type, page) {
   page = this.goods[type] && this.goods[type].page + 1
   getClassificationData(type, page)
    .then(res => {
     this.leftNavTitleData = res.leftTitleData
     if (res[type] != null) {
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
 },
 created() {
  this.getClassificationData()
  this.getClassificationData('all')
  this.getClassificationData('allsort')
  this.getClassificationData('new')
 },
 mounted() {
  let fresh = debounce(this.$refs.rightBscroll.loaded)
  this.$bus.$on(this.cImageLoaded, () => {
   fresh()
  })
 },
 activated() {
  this.$refs.leftBscroll.loaded()
  this.$refs.rightBscroll.loaded()
 }
}
</script>

<style scoped>
.cNavBar {
 position: relative;
 color: white;
 background-color: lightcoral;
 z-index: 9;
}
.content {
 display: flex;
}
.leftBscroll {
 width: 80px;
 overflow: hidden;
 position: fixed;
 top: 44px;
 left: 0;
 bottom: 49px;
}
.rightContent {
 width: 295px;
 position: fixed;
 top: 44px;
 right: 0;
 bottom: 49px;
 background-color: white;
}
.rightBscroll {
 overflow: hidden;
 position: absolute;
 top: 46px;
 right: 0;
 bottom: 0;
}
.tabControl {
 padding-top: 10px;
 background-color: white;
 position: relative;
 z-index: 1;
}
</style>
