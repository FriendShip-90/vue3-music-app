<template>
  <div class="swiper">
    <h3>Top Artists </h3>
    <Albumlist class="albumlist" />
  </div>
  <div class="playlist">
    <MusicList />
  </div>
</template>

<script>
import MusicList from "~/components/MusicList";
import Albumlist from "~/components/Albumlist";

export default {
  components:{
    MusicList,
    Albumlist
  },
  created(){
    this.$store.dispatch('music/creatMusics')
  }
}
</script>

<style lang="scss" scoped>
h3{
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.albumlist{
  margin-bottom: 3rem;
}
</style>

