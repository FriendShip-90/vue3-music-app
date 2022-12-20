<template>
  <h1>
    <div
      v-for="music in musics"
      :key="music.target">
      {{ music.name }}
    </div>
  </h1>
</template>

<script>
export default {
  data(){
    return {
      content: "내용"
    }
  },
  computed: {
    musics() {
      return this.$store.state.music.musics
    }
  }
}

</script>
