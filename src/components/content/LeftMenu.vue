<template>
  <div class="leftmenu">
    <div class="applemusic-icon">
      <img src="~assets/img/applemusic-icon.png" alt="">
    </div>
    <music-search/>
    <dl>
      <router-link :to="item.link" v-for="(item,index) in list" :key="index">
        <dd :class="{title:item.image=='',action:currentIndex==index}" @click="checkClick(index)">
          <div>
            <img :src="item.image" alt />
          </div>
          {{item.title}}
        </dd>
      </router-link>
        <!-- <my-song-list/> -->
    </dl>
  </div>
</template>
<script>
import MusicSearch from './search/MusicSearch'
// import MySongList from 'user/MySongList'
export default {
  name: "LeftMenu",
  components:{
    // MySongList,
    MusicSearch
  },
  data() {
    return {
      list: [
        {
          link: "/discover",
          image: require("assets/img/leftmenu/music-line.png"),
          title: "为你推荐"
        },
        {
          link: "/test",
          image: require("assets/img/leftmenu/liulan.png"),
          title: "浏览"
        },
        {
          link: "",
          image: require("assets/img/leftmenu/guangbo.png"),
          title: "广播"
        },
        
        { link: "", image: "", title: "资料库" },
        {
          link: "",
          image: require("assets/img/leftmenu/zuijin.png"),
          title: "最近添加"
        },
        {
          link: "",
          image: require("assets/img/leftmenu/yiren.png"),
          title: "艺人"
        },
        {
          link: "",
          image: require("assets/img/leftmenu/zhuanji.png"),
          title: "专辑"
        },
        {
          link: "",
          image: require("assets/img/leftmenu/gequ.png"),
          title: "歌曲"
        },
        { link: "", image: "", title: "播放列表" },
      ],
      currentIndex: 1
    };
  },
  methods: {
    checkClick(index) {
        if(this.list[index].image=='')return;
        this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
.leftmenu {
  background: #252526;
  width: 20%;
  height: 100% ;
  float: left;
  border-right: 1px solid #23262c;
  color: #fff;
}
.applemusic-icon {
  padding-left: 20px;
  padding-top: 10px;
}
dl {
  width: 100%;
  height: 100%;
}
dl a {
  color: #fff;
  text-decoration: none;
}
.title {
  font-size: 13px;
  margin-top: 10px;
  opacity: 0.6;
  padding-left: 1px;
}
dd {
  height: 30px;
  line-height: 30px;
  padding: 1px 25px;
  font-size: 14px;
  opacity: 0.6;
  display: flex;
  align-items: center;
}
dd:hover {
  opacity: 1;
  background: #39393b;
}
dd div {
  margin-top: 10px;
  margin-right: 10px;
}
dd img {
  width: 20px;
  height: 20px;
}
.action {
  background: #39393b;
}
</style>