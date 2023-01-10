<template>
  <div>
    <ul class="music_list">
      <MusicItem 
        v-for="( artist, index ) in artists"
        :key="artist"
        :artist="artist"
        :index="index" />
    </ul>
  </div>
</template>

<script>
import MusicItem from '~/components/MusicItem'
export default {
  components:{
    MusicItem
  },
  computed: {
    artists() {
      // topArtistsItem 내림차순정렬
      const topArtistsItem = this.$store.state.music.musics;
      let topArtistsItemSort = topArtistsItem.sort( (a,b) => {
        if(a.listeners < b.listeners) return 1;
        if(a.listeners > b.listeners) return -1;
        return 0;
      });
      return topArtistsItemSort;
    }
  }
}
</script>