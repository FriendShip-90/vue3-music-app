<template>
  <swiper
    class="swiper"
    :slides-per-view="4.5"
    :space-between="10">
    <swiper-slide
      v-for="track in tracks"
      :key="track"
      class="slider-item">
      <a :href="track.url">
        <figure>
          <img
            :src="trackImg.image"
            alt="" />
        </figure>
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="text-truncate">{{ track.name }}</h4>
          <p class="text-truncate">{{ track.playcount }}</p>  
        </div>
        <p class="artist">{{ track.artist.name }}</p>  
      </a>
    </swiper-slide>
  </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "~/assets/swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      trackImg:{
        image: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
      }
    }
  },
	computed:{
		tracks() {
      // playcount 내림차순정렬
      const trackItem = this.$store.state.music.track
      let trackItemSort = trackItem.sort( (a,b) => {
        if(a.playcount < b.playcount) return 1;
        if(a.playcount > b.playcount) return -1;
        return 0;
      });
      return trackItemSort;
    }
	}
};
</script>

<style lang="scss">
.swiper-slide{
	height: 25rem;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    figure{
      img{
        width: 100%;
        max-width: 30rem;
        height: 19rem;
        object-fit: cover;
      }
    }
  }
  div{
    h4{
      margin-top: 1rem;
      font-size: 1.8rem;
      font-weight: bold;
      color: #222;
    }
    p{
      position: relative;
      margin-top: 0.5rem;
      padding-left: 2rem;
      font-size: 1.4rem;
      color: #999;
      &:before{
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 2rem;
        height: 2rem;
        background: url('~/assets/images/ico_like.png') no-repeat center / 100%;
      }
    }
  }
  .artist{
    margin-top: 0.8rem;
    color: #999;
    font-size: 1.2rem;
  }
}
</style>