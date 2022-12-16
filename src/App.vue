<template>
  <div class="wrap d-flex">
    <section class="_Gnb">
      <Nav />
    </section>
    <section class="_content">
      <Header />
      <RouterView />
    </section>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Nav from "~/components/Atc_nav";

export default {
  components:{
    Nav,
    Header,
  }
}
</script>

<style lang="scss">
@import '~/scss/main';
@import '~/scss/reset';
.wrap{
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  ._Gnb{
    flex-shrink: 0;
    width: 30rem;
  }
  ._content{
    flex-shrink: 1;
    padding: 2rem;
    width: 100%;
    background: rgba(245, 245, 245, 0.42);
  }
}
</style>