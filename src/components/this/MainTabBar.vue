<template>
 <div>
  <TabBar>
   <TabBarItem path="/Home">
    <img slot="icon" src="~assets/img/tabbar/home.svg" />
    <img slot="icon_active" src="~assets/img/tabbar/home_active.svg" />
   </TabBarItem>
   <TabBarItem path="/Classification">
    <img slot="icon" src="~assets/img/tabbar/classification.svg" />
    <img
     slot="icon_active"
     src="~assets/img/tabbar/classification_active.svg"
    />
   </TabBarItem>
   <TabBarItem path="/Cart">
    <img slot="icon" src="~assets/img/tabbar/cart.svg" />
    <img slot="icon_active" src="~assets/img/tabbar/cart_active.svg" />
   </TabBarItem>
   <TabBarItem path="/Profile">
    <img slot="icon" src="~assets/img/tabbar/profile.svg" />
    <img slot="icon_active" src="~assets/img/tabbar/profile_active.svg" />
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
