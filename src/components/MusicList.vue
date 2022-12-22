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
      return this.$store.state.music.artist
    }
  }
}
</script>

<style lang="scss" scoped>
.music_list{
}

</style>