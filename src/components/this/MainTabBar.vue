<template>
 <div>
  <TabBar>
   <TabBarItem path="/Home">
    <img slot="icon" src="~assets/img/tabbar/home.png" />
    <img slot="icon_active" src="~assets/img/tabbar/home_active.png" />
   </TabBarItem>
   <TabBarItem path="/Classification">
    <img slot="icon" src="~assets/img/tabbar/classification.png" />
    <img
     slot="icon_active"
     src="~assets/img/tabbar/classification_active.png"
    />
   </TabBarItem>
   <TabBarItem path="/Cart">
    <img slot="icon" src="~assets/img/tabbar/cart.png" />
    <img slot="icon_active" src="~assets/img/tabbar/cart_active.png" />
   </TabBarItem>
   <TabBarItem path="/Profile">
    <img slot="icon" src="~assets/img/tabbar/profile.png" />
    <img slot="icon_active" src="~assets/img/tabbar/profile_active.png" />
   </TabBarItem>
  </TabBar>
 </div>
</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem'
import TabBar from 'components/common/tabbar/TabBar'
export default {
 name: 'MainTabBar',
 components: {
  TabBar,
  TabBarItem
 }
}
</script>

<style></style>
