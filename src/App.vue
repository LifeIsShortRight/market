<template>
 <div id="app">
  <keep-alive>
   <router-view />
  </keep-alive>
  <main-tab-bar />
 </div>
</template>

<script>
import MainTabBar from 'components/this/MainTabBar'
export default {
 name: 'App',
 components: {
  MainTabBar
 },
 created() {}
}
</script>

<style>
@import './assets/css/base.css';
</style>
