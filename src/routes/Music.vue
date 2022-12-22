<template>
  <div class="swiper">
    <h3>Top Track </h3>
    <Albumlist class="albumlist" />
  </div>
  <div class="playlist d-flex">
    <div class="col-6 me-3">
      <h3>Most Poppluar</h3>
      <MusicList />
    </div>
    <div class="col-6 ms-3">
      <h3>Playing</h3>
      <Playapp />
    </div>
  </div>
</template>

<script>
import MusicList from "~/components/MusicList";
import Albumlist from "~/components/Albumlist";
import Playapp from "~/components/Playapp";

export default {
  components:{
    MusicList,
    Albumlist,
    Playapp
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

