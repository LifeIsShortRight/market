<template>
 <div>
  <h2>我的</h2>
  <slider :carouselData="carouselData" class="slider"> </slider>
 </div>
</template>

<script>
import Slider from 'components/common/slider/Slider'
import { getHomeMutidata } from 'Axios/home'
// import BScroll from 'better-scroll'
export default {
 name: 'Profile',
 components: {
  Slider
 },
 data() {
  return {
   carouselData: []
  }
 },
 methods: {
  getHomeMutidata() {
   getHomeMutidata()
    .then(res => {
     this.carouselData = res.carouselData
     console.log(res.carouselData)
    })
    .catch(err => {
     console.log(err)
    })
  }
 },
 mounted() {
  this.getHomeMutidata()
 }
}
</script>
<style scoped></style>
