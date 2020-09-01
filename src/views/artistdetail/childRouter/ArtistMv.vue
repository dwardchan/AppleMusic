 <template>
  <div class="artist-mv">
    <div class="wrap">
      <div class="content">
        <div class="icon" v-for="(item,index) in albumlist" 
          :key="index">
          <img :src="item.picUrl" alt />
          <p>{{item.name}}</p>
          <p>{{item.publishTime | showDate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _getArtistMv } from "@/network/artist";
export default {
  name: "ArtistMv",

}
</script>

<style scoped>

</style>