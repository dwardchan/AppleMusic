<template>
  <div class="tabbar">
    <div class="wrap">
    <div class="logo">
      <img src="@/assets/img/content/logo.png" alt="" @click="backHome()" />
      <div class="title" @click="backHome()">网易云音乐</div>
      <!-- <div class="back" @click="back()">
        <img src="@/assets/img/content/back.svg" alt="">
      </div> -->
    </div>

    <top-menu class="topmenu"/>
    <div class="content">
      <div class="login" @click="showLogin()">
        <div class="profile" v-show="isShow">
          <img :src="getImage" alt="" >
        </div>
        <div>{{getUserName}}</div>
      </div>
      <music-search class="serach"/>
    </div>
    </div>
  </div>
</template>

<script>
import MusicSearch from "../search/MusicSearch";
import TopMenu from "../topmenu/TopMenu"
export default {
  name: "TabBar",
  components: {
    MusicSearch,
    TopMenu
  },
  data() {
    return {
      image: "",
      statu: "登录",
      isShow: false
    }
  },
  computed: {
    getImage() {
      this.image = this.$store.state.user && this.$store.state.user.profile.avatarUrl
      return this.image
    },
    getUserName() {
      if (this.$store.state.user == null) return this.statu
      return (this.statu = 
      this.$store.state.user && this.$store.state.user.profile.nickname)
    }
  },
  methods: {
    showLogin() {
      this.$store.commit("showLogin")
    },
    backHome() {
      if (this.$route.path == '/discover') return;
      this.$router.push("/discover"); 
    },
    // back() {
    //   this.$router.go(-1);
    // }
  }
}
</script>

<style scoped>
.tabbar {
  position: relative;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  background-color: #202023;
}
.wrap {
  width: 1100px;
  height: 60px;
  margin: 0 auto;
}
.logo {
  float: left;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 176px;
  height: 59px;
  line-height: 100%;
  padding-right: 20px;
  display: flex;
  align-items: center;
}
.back {
  display: inline-block;
  height: 26px;
  position: absolute;
  right: 5px;
  opacity: 0.6;
}
.back:hover {
  opacity: 1;
}
.back img {
  height: 100% !important;
}

.content {
  color: #9b9b9b;
  height: 59px;
  font-size: 12px;
}
.search {
  float: right;
  align-items: center;
}
.login {
  cursor: pointer;
  height: 59px;
  float: right;
  display: flex;
  align-items: center;
}
.profile {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
}
.profile img {
  width: 100%;
  border-radius: 50%;
}
.logo img {
  margin: 0px 10px 0px 10px;
  height: 60%;
}

</style>