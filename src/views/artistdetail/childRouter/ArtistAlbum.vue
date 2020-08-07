<template>
    <div class="artist-album" v-if="artist!=null">
      <artist-album-list :albumlist="albumlist"/>
    </div>
</template>
<script>
import ArtistAlbumList from "../childComps/ArtistAlbumList"
import {  _getArtistAlbum} from "@/network/artist";
import { _getSongsDetail, songDetail } from "@/network/detail";
export default {
    name:'ArtistAlbum',
    data(){
        return {
          artist:null,
          albumlist:[],
        }
    },
    components:{
        ArtistAlbumList
    },
    created(){
        this.artist=this.$route.query.artist||this.$store.state.artist;
        if (this.artist!= null) {
      /**获取歌曲专辑 */
      _getArtistAlbum(this.artist.id).then(res => {
          this.albumlist=res.data.hotAlbums;
      });
    }
    },
}
</script>
<style scoped>
.artist-album{
    width: 100%;
}
</style>