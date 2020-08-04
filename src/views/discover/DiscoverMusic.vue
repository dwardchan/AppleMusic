<template>
  <div class="discover">
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverMusic",
  components: {
  },

}
</script>

<style scoped>
.discover {
  width: 100%;
  height: 100%;
}
.swi {
  width: 100%;
  margin-top: 5px;
}
.content {
  width: 100%;
  height: 100%;
  padding: 10px 155px;
  overflow: hidden;
}
.content p {
  font-size: 20px;
}
</style>