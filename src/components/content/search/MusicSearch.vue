<template>
  <div class="search" @mouseleave="leave()">
    <div class="search-item">
        <input type="text" class="mess" v-model="keywords" @focus="focus()" @keydown.enter="keyEnter()"/>
        <div class="search-icon" @click="keyEnter()">          
          <img src="@/assets/img/content/search.svg" alt="">
        </div>
    </div>

    <!-- <hot-search :searchlist="searchlist" v-show="isShow" @del="del" @recordClick="recordClick"/> -->
    <div class="suggest" v-show="isSuggest">

    </div>
  </div>
</template>

<script>
import HotSearch from "./hotSearch";
import { _Suggest } from "@/network/search";
export default {
    name: "MusicSearch",
    data() {
      return {
        searchlist: ["In Your Eyes", "Failling", "天外来物"],
        isShow: false,
        isSuggest: false,
        keywords: "",

      }
    },
    components: {
      HotSearch
    },
    watch: {
      keywords() {
        if (this.keywords != "") {
          this.isShow = false
          this.isSuggest = true
          this.suggest()
        }
      }
    },
    methods: {
      focus() {
        this.isShow = true
      },
      leave() {
        this.isShow = false
        this.isSuggest = false        
      },
      del() {
        this.searchlist = []
      },
      keyEnter() {
        if(this.keywords == ''||this.keywords==null) return
        this.$router.push("/search/"+this.keywords)
        this.searchlist.unshift(this.keywords)
        this.keywords = ''
        this.isSuggest = false
        this.isShow = false
      },
      recordClick(index) {
        this.$router.push("/search/" + this.searchlist[index])
        this.isShow = false
      },
      enterSearch(name) {
        this.$router.push("/search/" + name)
        this.isSuggest = false
      },
      // enterArtist(artist){
      //   this.$router.push({
      //   path: "/artist",
      //   query: {
      //     artist: artist
      //   }
      // });
      // this.$store.commit('addArtist',artist);
      // },
      suggest() {
        _Suggest(this.keywords).then(res => {
          this.sugSongs = res.data.result.songs 
          // this.sugArtist = res.data.result.artists;
        })
      }
    }
}
</script>

<style scoped>
.search {
  height: 100%;
  width: 200px;
  display: inline-block;
  position: relative;
}
.search-item {
  line-height: 54px;
  height: 50%;
  width: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  border-radius: 26px;
}

.mess {
  outline-style: none;
  color: #333;
  line-height: 16px;
  background: transparent;
  position: absolute;
  width: 70%;
  height: 100%;
  padding: 0px 10px;
  border: #f6f6f6;
  border-radius: 10px;
}
.search-icon {
  cursor: pointer;
  position: absolute;
  right: 2px;
  top: -2px;
}
.suggest {
  width: 400px;
  background: #2d2f33;
  position: absolute;
  top: 54px;
  z-index: 4;
  padding: 10px;
  color: #828385;
}
.top {
  font-size: 13px;
}
.top span {
  color: #2e6bb0;
}
dl {
  width: 100%;
  font-size: 13px;
}
dl dt {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 5px 8px;
  background: #303236;
}
dl dd {
  padding: 5px 31px;
}
dd:hover {
  background: #2a2c30;
}
.icon {
  width: 16px;
  height: 16px;
}
.icon img {
  width: 100%;
}
.tit {
  margin-left: 8px;
  color: #dcdde4;
}
</style>