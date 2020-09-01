<template>
    <div class="artist-album" v-if="artist!=null">
      <scroll ref="scroll" class="artist-scroll" :pull-up-load="true" @pullingUp="pullingUp">  
      <div class="wrap">
        <div class="content">
          <div class="icon" v-for="(item,index) in albumlist" 
          :key="index">
          <img :src="item.picUrl" alt />
          <p>{{item.name}}</p>
          <p>{{item.publishTime}}</p>
          </div>
        </div>
      </div>
      </scroll>
    </div>
</template>
<script>
import Scroll from "@/components/common/Scroll";
import { _getAlbum } from "@/network/artist";
import {  _getArtistAlbum} from "@/network/artist";
// import { formatDate } from "@/assets/common/utils";
export default {
    name:'ArtistAlbum',
    data(){
        return {
          artist:null,
          albumlist:[],
        }
    },
    // filters: {
    //     showDate(value) {
    //         const date = new Date(value * 1000)
    //         return formatDate(date, 'yyyy-MM-dd')
    //     }
    // },
    created(){
    this.artist = this.$store.state.artist;
    if (this.artist!= null) {
      _getAlbum(this.artist.id).then(res => {
        this.albumlist = res.data.hotAlbums;
      })
    }
    },
    methods: {
      pullingUp() {
        debounce(this.getArtistPullUp(), 1000)
    },
    }
}
</script>
<style scoped>
.artist-album{
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
.artist-scroll {
  height: calc(100% - 55px);
  overflow: hidden;
  margin-top: 10px;
}
</style>