<template>
  <div id="app">
    <tab-bar/>
    <nav-bar/>
    <Main/>
    <play-music/>
  </div>
</template>

<script>
import TabBar from '@/components/content/tabbar/TabBar'
import NavBar from '@/components/content/navbar/NavBar'
import Main from '@/components/content/main/Main'
import PlayMusic from "@/components/content/playmusic/PlayMusic"
export default {
  name: "App",
  components: {
    TabBar,
    Main,
    NavBar,
    PlayMusic
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
  background: #f5f5f5;
  color: #000000;
}
</style>
