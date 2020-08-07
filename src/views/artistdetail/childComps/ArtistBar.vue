<template>
  <div class="artist-bar">
    <div class="wrap">
      <div class="name"><h2>{{baseInfo.name}}</h2></div>
      <div class="img">
        <img :src="baseInfo.picUrl" >
      </div>
      <div class="bar" >
        <div class="item" v-for="(item,index) in list"
        :key="index"
        @click="currentClick(index)"
        :class="{action:currentIndex==index}">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ArtistBar",
  props: {
    baseInfo: {
      type: [Object, Array],
      default() {
        return {}
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    id:{
        type:Number,
        default(){
            return 0
        }
    },
  },
  data() {
    return{
      currentIndex: 0
    }
  },
  methods: {
    currentClick(index) {
      this.currentIndex = index;
      switch(index){
          case 0:this.$router.push('/artist/top/song'); break;
          case 1:this.$router.push('/artist/album'); break;
          case 2:this.$router.push('/artist/mv'); break;
          case 3:this.$router.push('/artist/desc'); break;
      }
    }
  }
}
</script>

<style scoped>
.artist-bar{
  padding-top: 20px;
}
.wrap {
  width: 900px;
  margin: 0 auto;
}
.img {
  height: 300px;
}
.img img{
  width: 640px;
  height: 300px;
}
.bar {
  width: 640px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
}
.bar .item {
  width: 136px;
  height: 40px;
  padding: 2px 2px 0 0;
  line-height: 39px;
  text-align: center;
}
.action {
  border-top: 2px solid #b82525;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
</style>