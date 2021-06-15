<template>
  <Header></Header>
  <main class="container my-3">
    <Breadcrumb></Breadcrumb>
    <h1>This is an about page</h1>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
  data() {
    return {
      text: '',
    };
  },
  components: {
    Header,
    Breadcrumb,
    Footer,
  },
};
</script>

<style lang="scss">
main{
  min-height: calc(100vh - 300px);
}
</style>
