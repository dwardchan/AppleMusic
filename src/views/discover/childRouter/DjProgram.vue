<template>
  <div class="dj">
    <scroll ref="scroll" class="dj-scroll">
      <div class="dj-music">
        <table>
          <tbody>
            <tr v-for="(item,index) in djlist" :key="index"
            :class="{backColor:setBackColor(index)}"
            @dblclick="musicItemClick(index)">
              <td>
                <div class="bagc">
                  <img :src="item.picUrl" alt="" @load="imgLoad()">
                  <div class="icon">
                    <img src="@/assets/img/playmusic/bofang.svg" alt="">
                  </div>                  
                </div>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.copywriter}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/Scroll"
import { _getDj } from "@/network/discover"
import { _getSongsDetail, songDetail } from "@/network/detail";
import { tableMixin } from "@/views/musicListDetail/childComps/tableMixin";
import { indexMixin } from "@/views/musicListDetail/indexMixin";
import { debounce } from "@/assets/common/tool";
export default {
  name: "DjProgram",
  components: {
    Scroll
  },
  data() {
    return {
      djlist: [],
      imgCurrent: 0,
    }
  },
  mixins: [tableMixin,indexMixin],
  created() {
    _getDj().then(res => {
    this.djlist = res.data.result
    })
  },
  methods: {
    imgLoad() {
      if (this.imgCurrent == this.djlist.length - 1) {
        this.$refs.scroll.refresh()
      }
    },
    musicItemClick(index) {
      this.PlayMusic(index)
    }
  }
}
</script>

<style scoped>
.dj {
  height: 100%;
  width: 100%;
}
.dj-scroll {
  height: calc(100% - 45px);
  overflow: hidden;
}
.action {
  color: #b82525;
  border-bottom: 2px solid #686a6e;
}
.bofang {
  padding: 10px 0px;
}
.bofang img {
  width: 24px;
  height: 24px;
  margin-right: 50x;
  vertical-align: -6px;
}
.dj-music table {
  width: 100%;
  
}
.dj-music thead {
  color: #828385;
  font-size: 12px;
}
.dj-music tr {
  height: 100px;
  text-align: left;
}

.dj-music tr td {
  
  position: relative;
}
.dj-music tbody {
  font-size: 13px;
  color: #000;
}
.dj-music tr td:nth-child(1) {
  width: 50px;
  text-align: center;
}
.dj-music tr td:nth-child(2) {
  width: 100px;
}
.dj-music tr td:nth-child(2) img {
  width: 50px;
}
.dj-music tbody tr td:nth-child(3) {
  color: #000;
}
.dj-music tr td .live {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.dj-music tr td .xiazai {
  margin-left: 26px;
}
.dj-music tr td:nth-child(6) {
  width: 180px;
}
.dj-music tbody tr td {
  border: none;
}
.backColor {
  background: #fff;
}
.bagc {
  position: relative;
  width: 50px;
  height: 50px;
}
.bagc img {
  width: 100%;
}
.icon {
  background: rgba(00, 0, 0, 0.3);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.icon img {
  width: 24px !important;
  border-radius: 50%;
}
</style>