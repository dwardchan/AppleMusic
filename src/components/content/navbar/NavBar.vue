<template>
  <div class="navbar">
    <div class="content">
      <router-link v-for="(item, index) in list" :key="index" :to="item.link">
         <div
          class="item"
          @click="barClick(index)"
          
        >{{item.name}}</div>  
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  
  data() {
    return {
      currentIndex: 0,
      list: [
        { link: "/discover/individ", name: "个性推荐" },
        { link: "/discover/category", name: "歌单" },
        { link: "/discover/ranklist", name: "排行榜" },
        { link: "/discover/artist", name: "歌手" },
        { link: "/discover/newsongs", name: "最新音乐" },
        { link: "/discover/djprogram", name: "主播电台" },
      ]
    }
  },
  created() {
    for(let i in this.list) {
      if(this.list[i].link == this.$route.path) {
        setTimeout(() => {
          this.barClick(i)
        }, 100)
        break;
      }
    }
  },
  methods: {
    barClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #c20c0c;
  height: 34px;
  width: 100%;
}
.content {
  width: 35%;
  height: 100%;
  margin: 0px auto;
  display: flex;
}
.navbar a {
  text-align: center;
  flex: 1;
  height: 100%;
  line-height: 34px;
  color: #fff;
  
}

</style>