<template>
  <swiper
    :slides-per-view="4"
    :space-between="20"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide
      v-for="music in musics"
      :key="music"
      class="slider-item">
      <a :href="music.url">
        <h4>{{ music.name }}</h4>
        <p></p>
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
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
	computed:{
		musics() {
      return this.$store.state.music.musics
    }
	}
};
</script>

<style lang="scss">
.swiper-slide{
	height: 40rem;
	background: #ddd;
}
</style>