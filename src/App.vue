<template>
  <div class="wrap">
    <div class="inner d-flex">
      <section class="_Gnb">
        <Nav />
      </section>
      <section class="_content">
        <Header />
        <RouterView />
      </section>
    </div>
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
  .inner{
    width: 100%;
    overflow: hidden;
  }
  ._Gnb{
    flex-shrink: 0;
    width: 30rem;
    box-shadow: 1rem 0 1rem rgba(246, 250, 255, 1);
  }
  ._content{
    flex-shrink: 1;
    padding: 2rem;
    width: calc( 100% - 30rem);
    background: #f7faff;
    overflow: hidden;
  }
}
</style>