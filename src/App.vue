<template>
  <div id="app">
    <left-menu/>
    <!-- <play-music/>
    <Main/> -->
  </div>
</template>

<script>
import LeftMenu from './components/content/LeftMenu'
// import PlayMusic from "./components/content/playmusic/PlayMusic"
// import Main from './components/content/Main'

export default {
  name:'App',
  components:{
    LeftMenu,
    // Main,
    // PlayMusic
  }
}
</script>

<style scoped>
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
