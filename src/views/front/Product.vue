<template>
  <div class="row">
    <div class="col-7">
      <img class="img-fluid" :src="product.imageUrl" alt="" />
    </div>
    <div class="col-5">
      <h2>{{ product.title }}</h2>
      <p>NT: {{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button type="button" class="btn btn-primary" :disabled="isLoadingBtn" @click.prevent="addToCart(product.id)">
        <div class="spinner-border spinner-border-sm" v-show="isLoadingBtn" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
import { hexAxios, userAPI } from '@/response/hexAxios';

export default {
  data() {
    return {
      isLoadingBtn: false,
      product: {},
    };
  },
  methods: {
    getProdut(pid) {
      this.product = {};
      hexAxios
        .get(userAPI.product.sigle(pid))
        .then((res) => {
          const { success, product, message } = res.data;
          if (success) {
            this.product = {
              ...product,
              qty: 1,
            };
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
    addToCart(pid, qty = 1) {
      this.isLoadingBtn = true;
      const data = {
        data: {
          product_id: pid,
          qty,
        },
      };
      hexAxios
        .post(userAPI.cart.src(), data)
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal({
              title: message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            });
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
        .then(this.$bus.$emit('cartCount'))
        .catch((error) => {
          this.$swal({
            title: error.toString(),
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
        })
        .finally(() => {
          this.isLoadingBtn = false;
        });
    },
  },
  created() {
    const pid = this.$route.params.id;
    this.getProdut(pid);
  },
};
</script>
