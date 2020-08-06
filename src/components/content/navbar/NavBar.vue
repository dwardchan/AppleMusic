<template>
  <div class="navbar">
    <div class="wrap">
    <div class="content">
      <router-link v-for="(item, index) in list" :key="index" :to="item.link">
         <div
          class="item"
          @click="barClick(index)"
          :class="{action:currentIndex == index}"
        >{{item.name}}</div>  
      </router-link>
    </div>
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
.wrap {
  width: 1100px;
  height: 34;
  margin: 0 auto;
}
.content {
  float: left;
  padding-left: 180px;
  height: 34px;
  display: flex;
}
.item {
  padding: 0 36px;
  text-align: center;
  float: left;
  height: 34px;
  line-height: 34px;
  color: #fff;
  
}
.action {
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
  border-radius: 20px;
  background: rgba(155, 9, 9, 0.7);
  line-height: 20px;
}
</style>