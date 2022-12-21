<template>
  <swiper
    class="swiper"
    :slides-per-view="4"
    :space-between="10"
    :loop="true">
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 4, //화면에 slide 노출 개수
        slidesPerGroup: 1, //swiper 시 개수
        spaceBetween: 10, //간격
        centeredSlides: true, //현재 slide 중앙정렬
        loop: true, // loop 여부
        loopedSlides: 2, //loop 시 duplicate 개수
      }
    }
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
	height: 25rem;
	background: #ddd;
}
</style>