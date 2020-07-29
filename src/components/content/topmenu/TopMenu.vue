<template>
  <div class="topmenu">
    <ul>
      <router-link :to="item.link" v-for="(item, index) in list" :key="index">
         <li :class="{action:currentIndex == index}" @click="checkClick(index)">
            <span>
                {{item.title}}              
            </span>
         </li>  
      </router-link>
      <!-- <my-song-list/>  -->
    </ul>
  </div>
</template>

<script>
// import TopMenu from '@/components/content/user/MySongList'
export default {
  name: "TopMenu",
  components: {
    // MySongList
  },
  data() {
    return {
      list: [
        
        {
          link: "/discover",
          image: require("@/assets/img/leftmenu/music-line.svg"),
          title: "发现音乐"
        },
        {
          link: "/test",
          image: require("@/assets/img/leftmenu/fm.svg"),
          title: "私人FM"
        },
        {
          link: "",
          image: require("@/assets/img/leftmenu/zhibo.svg"),
          title: "直播"
        },
        {
          link: "",
          image: require("@/assets/img/leftmenu/shiping.svg"),
          title: "视频"
        },
        {
          link: "",
          image: require("@/assets/img/leftmenu/friend.svg"),
          title: "朋友"
        },
        
        // { link: "", image: "", title: "创建的歌单" },
      ],
      currentIndex: 0
    }
  },
  methods: {
    checkClick(index) {
      if(this.list[index].image=='') return
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.topmenu {
  background: #202023;
  margin-left: 10px;
  width: 50%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  color: #fff;
}
ul {
  width: 100%;
  height: 100%;
}
ul a {
  color: #fff;
  text-decoration: none;
}
.title {
  font-size: 14px;
  margin-top: 10px;
  opacity: 0.8;
  padding-left: 1px;
}
li {
  height: 60px;
  display: inline-block;
  align-items: center;
}
span {
  line-height: 60px;
  padding: 5px 25px;
  font-size: 14px;
  opacity: 0.8;
}
.action {
  border-bottom: 2px solid #b82525;
  background: #000000;
  opacity: 1;
}
</style>