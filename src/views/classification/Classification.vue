<template>
 <div>
  <h2>分类</h2>
  <b-scroll
   key="classification-b-scroll"
   class="wrapper"
   :probeType="0"
   :pullUpLoad="true"
  >
   <ul class="content">
    <li v-for="i in 30" :key="i">content</li>
   </ul>
  </b-scroll>
 </div>
</template>

<script>
import BScroll from 'components/common/betterscroll/BScroll'
export default {
 name: 'Classification',
 components: {
  BScroll
 }
}
</script>

<style scoped>
.wrapper {
 overflow: hidden;
 height: 300px;
}
.content {
 background-color: wheat;
}
</style>
