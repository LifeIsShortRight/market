<template>
 <div class="Profile">
  <mine-info></mine-info>
 </div>
</template>

<script>
import MineInfo from 'views/profile/MineInfo'
export default {
 name: 'Profile',
 components: {
  MineInfo
 },
 data() {
  return {
   isCookie: false
  }
 },
 methods: {},
 mounted() {}
}
</script>
<style scoped></style>
