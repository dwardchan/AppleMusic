<template>
  <div class="album-list">
    <div class="wrap">
        <div class="content">
          <div class="icon" v-for="(item,index) in albumlist" 
          :key="index">
          <img :src="item.picUrl" alt />
          <p>{{item.name}}</p>
          <p>{{item.publishTime}}</p>
        </div>
        </div>
      <!-- 浮动会使元素脱标，在所有浮动元素后面加一个块状元素，并设置clear:both清除浮动造成的父元素高度撑不起来问题 -->
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import { _getAlbum } from "@/network/artist";
import { tableMixin } from "@/views/musicListDetail/childComps/tableMixin";
import { _getSongsDetail, songDetail } from "@/network/detail";
import {indexMixin} from "@/views/musicListDetail/indexMixin"
import { playMixin } from "@/views/musicListDetail/playMixin";
export default {
  name: "ArtistAlbumList",
  props: {
    albumlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  // data() {
  //   return {
  //     albumlist: [],
  //   };
  // },
  mixins: [tableMixin,indexMixin,playMixin],
  created() {
    if (this.album != null) {
      _getAlbum(this.album.id).then(res => {
          // console.log( res.data);
          
        for (let i of res.data.songs) {
          _getSongsDetail(i.id).then(res => {
            let song = new songDetail(res.data.songs);
            this.musiclist.push(song);
          });
        }
      });
    }
  },
  methods:{
      albumClick(index){
          this.PlayMusic(index);
      }
  }
};
</script>
<style scoped>
.album-list {
  width: 100%;
  margin-top: 50px;
}
.wrap {
  width: 900px;
  margin: 0 auto;
}
.content {
  width: 640px;
}
.icon {
  padding-right: 40px;
  
  height: 188px;
  float: left;
}
.icon p {
  width: 120px;
}
.icon img {
  width: 120px;
  height: 120px;
}
.right {
  width: 75%;
  float: left;
  position: relative;
}

</style>