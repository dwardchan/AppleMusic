<template>
  <div id="app">
    <tab-bar/>
    <left-menu/>
    <Main/>
  </div>
</template>

<script>
import TabBar from '@/components/content/tabbar/TabBar'
import LeftMenu from '@/components/content/leftmenu/LeftMenu'
import Main from '@/components/content/main/Main'
export default {
  name: "App",
  components: {
    TabBar,
    LeftMenu,
    Main,
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
