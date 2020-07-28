<template>
  <div class="my-song-list">
    <dd v-for="(item, index) in getSongList" :key="index" @click="enterDetail(index)">
      <div>
        <img :src="item.coverImgUrl" alt="">
      </div>
      {{item.name}}
    </dd>
  </div>
</template>

<script>

export default {
  name: "MySongList",
  data() {
    return {
      songList: null
    }
  },
  computed: {
    getSongList() {
      return this.songList = this.$store.state.SongList 
    }
  },
  methods: {
    enterDetail(index) {
      this.$router.push("/musiclistdetail/" + this.songList[index].id+"/"+new Date().getTime())
    }
  }
}

</script>

<style scoped>
.my-song-list dd {
  height: 30px;
  line-height: 30px;
  padding: 2px 15px;
  font-size: 14px;
  opacity: 0.6;
  display: flex;
  align-items: center;
}
.my-song-list dd div {
  margin-top: 10px;
  margin-right: 10px;
}
.my-song-list dd img {
  width: 20px;
  height: 20px;
}
.my-song-list dd:hover {
  opacity: 1;
  background: #26282c;
}
</style>