<template>
    <div class="artist-hot50" v-if="musiclist.length!==0">
    <div class="hot50">
      <div class="center">
        <div class="bofang" @click="allPlay()">
        <img src="@/assets/img/playmusic/bofang.svg" alt />
        播放全部
      </div>
      <div class="sub">
        <img src="@/assets/img/detail/add.svg" alt />
        收藏热门50
      </div>
      </div>
      <div class="content">
        <div class="music" >
          <table>
            <tbody>
              <tr
                v-for="(item,index) in musiclist"
                :key="index"
                :class="{backColor:setBackColor(index)}"
                @dblclick="PlayMusic(index)"
              >
                <td :class="{curFont:playIndex==index}">
                  {{setSerial(index)}}
                  <div class="curPlay" v-show="playIndex==index">
                    <img src="@/assets/img/playmusic/currentplay.svg" alt />
                  </div>
                </td>
                <td>
                  <img src="@/assets/img/leftmenu/live.svg" alt class="live" />
                  <img src="@/assets/img/leftmenu/xiazai.svg" alt class="xiazai" />
                </td>
                <td>{{item.name}}</td>
                <td>{{item.album}}</td>
                <td>{{item.time}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 浮动会使元素脱标，在所有浮动元素后面加一个块状元素，并设置clear:both清除浮动造成的父元素高度撑不起来问题 -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import { tableMixin } from "@/views/musicListDetail/childComps/tableMixin";
import {indexMixin} from "@/views/musicListDetail/indexMixin"
import { playMixin } from "@/views/musicListDetail/playMixin";
export default {
  name: "ArtistHot50",
  props: {
    musiclist: {
      type: Array,
      default() {
        return [];
      }
    },
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mixins: [tableMixin, playMixin,indexMixin],
  data() {
    return {
      fold: true
    };
  },
}
</script>

<style scoped>
.artist-hot50 {
  width: 100%;
}
.icon {
  width: 100%;
}
.icon img {
  width: 60%;
}
.content {
  width: 75%;
  float: left;
  position: relative;
}
.hot50 {
  width: 900px;
  margin: 0 auto;
}
.center {
  padding-top: 20px;
  display: flex;
  align-items: center;
}
.center div {
  padding: 5px 10px;
  background: #fdfdfd;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  color: #000;
}
.center .bofang {
  background: #2778c6;
  color: #fff;
}
.center img {
  width: 18px;
  height: 18px;
  vertical-align: -4px;
}
.music table {
  width: 100%;
}
.music thead {
  color: #000;
  font-size: 12px;
}
.music tr {
  height: 30px;
  text-align: left;
}

.music tr td {
  border: 1px solid #cdcdcd;
  position: relative;
}
.music tbody {
  font-size: 13px;
  color: #000;
}
.music tr td:nth-child(1) {
  width: 50px;
  text-align: center;
}
.music tr td:nth-child(2) {
  width: 60px;
}
.music tr td:nth-child(2) img {
  width: 20px;
  opacity: 0.6;
}
.music tbody tr td:nth-child(3) {
  color: #000;
}
.music tr td .live {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.music tr td .xiazai {
  margin-left: 26px;
}
.music tr td:nth-child(6) {
  width: 180px;
}
.music tbody tr td {
  border: none;
}
.backColor {
  background: #fff;
}
p {
  font-size: 14px;
  padding-left: 20%;
  color: #e5e5e5;
}
.clear {
  clear: both;
}

</style>