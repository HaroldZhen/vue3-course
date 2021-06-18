<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="bi bi-image-fill h3"></i>
          Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customer">Customer</router-link>
            </li>
          </ul>
          <div class="ms-auto">
            <router-link class="text-decoration-none position-relative" to="/cart">
              <i class="bi bi-cart-fill h2 text-dark cart-item"></i>
              <span class="badge ms-1 rounded-pill bg-success cart-count">{{ cartCount }}</span>
            </router-link>
            <router-link class="text-decoration-none ms-2" to="/login">
              <i class="bi bi-gear h4 text-dark"></i>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { hexAxios, userAPI } from '@/response/hexAxios';

export default {
  name: 'Header',
  data() {
    return {
      carts: {
        carts: [],
      },
    };
  },
  beforeCreate() {
    this.$bus.$on('cartCount', (carts = {}) => {
      if (JSON.stringify(carts) !== '{}') {
        this.carts = carts;
      } else {
        this.getCart();
      }
    });
  },
  mounted() {
    this.$bus.$emit('cartCount');
  },
  computed: {
    cartCount() {
      const count = this.carts.carts.length;
      return count;
    },
  },
  methods: {
    getCart() {
      hexAxios
        .get(userAPI.cart.list())
        .then((res) => {
          const { success, data, message } = res.data;
          if (success) {
            this.carts = data;
          } else {
            this.$swal({
              title: message,
              icon: 'error',
              toast: false,
              position: 'center',
              showCloseButton: true,
              showConfirmButton: false,
            });
          }
        })
        .catch((error) => {
          this.$swal({
            title: error.toString(),
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
        });
    },
  },
};
</script>

<style>
.cart-count {
  font-size: 0.6rem;
  position: absolute;
  top: -16px;
  right: 0px;
}
</style>
