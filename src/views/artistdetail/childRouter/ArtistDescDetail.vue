<template>
  <div class="desc-detail" v-if="descDetail!=null">
   <div class="wrap">
    <div class="desc">
      <h3>{{artist.name}}简介</h3>
      <p>{{descDetail.briefDesc}}</p>
    </div>
    <div class="content">
      <div class="intro-item" v-for="(item,index) in descDetail.introduction" :key="index">
        <h3>{{item.ti}}</h3>
        <div><p v-for="(item,index) in formatText(item.txt)" :key="index">{{item}}</p></div>
      </div>
    </div>
   </div>
  </div>
</template>
<script>
import { _getArtistDescDetail } from "@/network/artist";
export default {
  name: "ArtistDescDetail",
  data() {
    return {
      artist: null,
      descDetail: null
    };
  },
  created() {
    this.artist = this.$store.state.artist;

    if (this.artist != null) {
      _getArtistDescDetail(this.artist.id).then(res => {
        this.descDetail = res.data;
      });
    }
  },
  methods:{
      formatText(text){
          let newText=text.split('\n');
          return newText;
      }
  }
};
</script>
<style scoped>
.desc-detail {
  margin-top: 20px;
  width: 100%;
}
.wrap {
  width: 900px;
  margin: 0 auto;
}
.wrap .desc {
  width: 640px;
}
.wrap .content {
  width: 640px;
}
.desc-detail h3{
  padding: 10px 0px;
  color: #000;
}
.desc-detail p{
  margin-top: 10px;
  text-indent: 35px;
  line-height: 30px;
  color: #747577;
}
</style>