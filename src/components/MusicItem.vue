<template>
  <li class="music_itme">
    <a
      :href="music.url"
      target="_blank">
      <figure>
        <img
          src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
          :alt="music.image[1].size"
          target="_blank" />
      </figure>
      {{ music.image.text }}
      <div class="albumInfo">
        <div class="albumInfo-title col-6">
          {{ music.name }}
        </div>
        <div class="albumInfo-txt col-6">
          {{ music.artist }}
        </div>
      </div>
      <input
        type="checkbox"
        :id="'album_Chk_'+ index " />
      <label :for="'album_Chk_'+ index "></label>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    music:{
      type: Object,
      default: () => ({})
    },
    index:{
      type: Number,
      default: () => ({})
    },
  }
}
</script>

<style lang="scss" scoped>
.music_itme{
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
  padding: 2rem;
  background: #fff;
  font-size: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.5rem rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    transform: translate(-0.5%, 0%);
    background: #e6eeff;
    transition: 0.3s;
  }
  figure{
    margin-right: 4rem;
    width: 2.6rem;
    height: 2.6rem;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
 }
 label{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6rem;
  height: 6rem;
  background-image: url('~/assets/images/ico_default_star.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  cursor: pointer;
 }
 input:checked + label{
   background-image: url('~/assets/images/ico_chk_star.svg');
   }
  a{
    display: flex;
    width: 100%;
    height: 100%;
  }
}
.albumInfo{
  display: flex;
  align-items: center;
  width: 100%;
  &-title{
  }
  &-txt{
    color: #999;
  }
}
 
</style>