<template>
  <Header></Header>
  <main class="container mb-3">
    <Banner v-if="showBanner"></Banner>
    <Breadcrumb></Breadcrumb>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';

export default {
  data() {
    return {
      showBanner: true,
    };
  },
  components: {
    Header,
    Banner,
    Breadcrumb,
    Footer,
  },
  watch: {
    $route(to) {
      this.setShowBanner(to.meta);
    },
  },
  mounted() {
    this.setShowBanner(this.$router.currentRoute.value.meta);
  },
  methods: {
    setShowBanner({ showBanner = true }) {
      this.showBanner = showBanner;
    },
  },
};
</script>

<style lang="scss">
main {
  min-height: calc(100vh - 134px);
}
</style>
