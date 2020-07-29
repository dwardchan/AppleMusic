<template>
  <div class="tabbar">
    <div class="logo">
      <img src="@/assets/img/content/logo.png" alt="" @click="backHome()" />
      <div class="title" @click="backHome()">网抑云音乐</div>
      <div class="back" @click="back()">
        <img src="@/assets/img/content/back.svg" alt="">
      </div>
    </div>

    <top-menu class="topmenu"/>
    <div class="content">
      <music-search class="serach"/>
      <div class="login" @click="showLogin()">
        <div class="profile">
          <img :src="getImage" alt="">
        </div>
        <div>{{getUserName}}</div>
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
      statu: "未登录"
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
    back() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.tabbar {
  height: 60px;
  width: 100%;
  background-color: #202023;
}
.logo {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  margin-left: 425px;
  width: 10%;
  line-height: 100%;
  display: flex;
  float: left;
  align-items: center;
  position: relative;
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
  color: #fff;
  margin-left: -400px;
  float: left;
  height: 100%;
}
.search {
  float: left;
  display: flex;
  align-items: center;
}
.login {
  cursor: pointer;
  height: 100%;
  float: left;
  margin-right: 50px;
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