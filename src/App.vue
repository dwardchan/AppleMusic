<template>
  <div id="app">
    <tab-bar></tab-bar>
    
  </div>
</template>

<script>
import TabBar from '@/components/content/tabbar/TabBar'
export default {
  name: "App",
  components: {
    TabBar,
  }
}
</script>

<style>
@import url('./assets/css/base.css');
@import url('./assets/css/play.css');
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
  background: #16181c;
  color: #fff;
}
</style>
