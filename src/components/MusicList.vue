<template>
  <div>
    <h3>Most Poppluar</h3>
    <ul class="music_list">
      <MusicItem 
        v-for="( music, index ) in musics"
        :key="music"
        :music="music"
        :index="index"
        class="music_item" />
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
    musics() {
      return this.$store.state.music.musics
    }
  }
}
</script>

<style lang="scss" scoped>
h3{
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.music_list{
}

</style>