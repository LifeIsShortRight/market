<template>
 <div class="tabbar-item" @click="itemListen">
  <div v-if="!isActive">
   <slot name="icon"></slot>
  </div>
  <div v-else>
   <slot name="icon_active"></slot>
  </div>
  <div :style="activeColors">
   <slot name="text"></slot>
  </div>
 </div>
</template>

<script>
export default {
 name: 'TabBarItem',
 props: {
  path: String,
  activeColor: {
   type: String,
   default: 'red'
  }
 },
 data() {
  return {}
 },
 computed: {
  isActive() {
   return this.$route.path.indexOf(this.path) > -1
  },
  activeColors() {
   return this.isActive ? { color: this.activeColor } : {}
  }
 },
 methods: {
  itemListen() {
   this.$router.push(this.path)
  }
 }
}
</script>

<style>
#tabbar .tabbar-item {
 height: 49px;
 flex: 1;
 text-align: center;
 background: gainsboro;
}
</style>
