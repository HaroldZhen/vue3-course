<template>
  <Header></Header>
  <main class="container mb-3">
    <Banner></Banner>
    <Breadcrumb></Breadcrumb>
    <div class="row">
      <div class="col-md-4 d-flex" v-for="item in products" :key="item.id">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
          <div class="text-start px-2">
            <span class="badge bg-success">{{ item.category }}</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <div class="card-footer border-0 bg-transparent">
            <a href="#" class="btn btn-primary">查看更多</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Footer from '@/components/Footer.vue';
import Banner from '@/components/Banner.vue';
import { hexAxios, userAPI } from '@/response/hexAxios';

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        qty: 1,
      },
    };
  },
  components: {
    Header,
    Breadcrumb,
    Banner,
    Footer,
  },
  methods: {
    getProduct() {
      hexAxios
        .get(userAPI.product.page(this.currentPage))
        .then((res) => {
          const {
            success, products, message, pagination,
          } = res.data;
          if (success) {
            this.products = products;
            this.pages = { ...pagination };
          } else {
            console.log(message);
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
    getCart() {
      hexAxios
        .get(userAPI.cart.list())
        .then((res) => {
          const { success, data, message } = res.data;
          if (success) {
            this.carts = data;
          } else {
            console.log(message);
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
  },
  created() {
    this.getProduct();
    this.getCart();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
