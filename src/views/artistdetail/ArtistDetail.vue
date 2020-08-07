<template>
  <div class="artist-detail">
    <scroll ref="scroll" class="artist-scroll">
      <artist-bar ref="artistBar" :list="barlist" :desc="artistDesc" 
      :base-info="getArtist"/>
      <router-view></router-view>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/Scroll";

import ArtistBar from "./childComps/ArtistBar";
import { _getArtistDesc,} from "@/network/artist";
import { _getSongsDetail, songDetail } from "@/network/detail";
export default {
  name: "ArtistDetail",
  data() {
    return {
      artist: null,
      artistDesc: null,
      barlist: ["热门作品", "所有专辑", "相关MV", "艺人介绍"]
    }
  },
  components: {
    Scroll,
    ArtistBar
  },
  created() {
      this.artist = this.$store.state.artist;
  },
  watch:{
    artist(to,form){
      /**解决切换歌手，ArtistBar与内容不符问题 */
      this.$refs.artistBar.currentClick(0);
      if(to.id!==null){
        _getArtistDesc(to.id).then(res=>{
          this.artistDesc = res.data.briefDesc;
        })
      }
    }
  },
  computed:{
    getArtist(){
      this.artist=this.$store.state.artist
      return this.artist;
    },
  },
}
</script>

<style scoped>
.artist-detail {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.artist-scroll {
  height: calc(100% - 59px);
}
</style>