<template>
  <div class="navbar" v-show="isShow == 0">
    <div class="wrap">
    <div class="content">
      <router-link v-for="(item, index) in list" :key="index" :to="item.link"
      class="item" @click="barClick(index)">
        {{item.name}}
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
      isShow: false,
      listIndex: 1,
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
    };
    this.$root.$on("show", (val) => {
      this.isShow = val;
    })
  },
  
  methods: {
    barClick(index) {
      this.currentIndex = index
      if(index = 1) this.$root.$emit("dayShow", this.isShow)
    },
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
.active {
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
  border-radius: 20px;
  background: rgba(155, 9, 9, 0.7);
  line-height: 20px;
}
</style>