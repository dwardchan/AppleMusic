<template>
  <div class="artist-hot" v-if="artist!=null">
    <artist-hot50 :musiclist="musiclist"  
    @allPlay="PlayMusic()"/>
  </div>
</template>
<script>
import ArtistHot50 from "../childComps/ArtistHot50";
import { _getArtistHot50 } from "@/network/artist";
import { _getSongsDetail, songDetail } from "@/network/detail";
export default {
  name:'ArtistHot',
    data(){
      return {
        artist:null,
        musiclist:[],
        }
    },
    components: {
        ArtistHot50
    },
    created(){
        this.artist=this.$route.query.artist||this.$store.state.artist;
        if (this.artist!= null) {
      /**热门五十首 */
      _getArtistHot50(this.artist.id).then(res => {

        for (let i of res.data.songs) {
          _getSongsDetail(i.id).then(res => {
            let song = new songDetail(res.data.songs);
            this.musiclist.push(song);
          })
        }
      })

    }
    },
}
</script>
<style scoped>
.artist-album{
    width: 100%;
}
</style>