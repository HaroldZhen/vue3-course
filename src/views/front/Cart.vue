<template>
  <!-- 購物車列表 -->
  <div class="row">
    <div class="col-auto ms-auto">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="請輸入優惠卷:test0630" v-model="couponCode" aria-label="coupon code" aria-describedby="couponBtn" />
        <button class="btn btn-outline-success" type="button" id="couponBtn" @click="useCoupon">送出</button>
      </div>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-danger" type="button" :disabled="isLoadingBtn || carts.carts.length == 0" @click="emptyCart">
        <div class="spinner-border spinner-border-sm" v-show="isLoadingBtn" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        清空購物車
      </button>
    </div>
  </div>

  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in carts.carts" :key="item.id">
        <tr>
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="delCart(item.id)">x</button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success" v-if="carts.total - carts.final_total > 0">已套用優惠券</div>
          </td>
          <td>
            <div class="input-group input-group-sm">{{ item.qty }} / {{ item.product.unit }}</div>
          </td>
          <td class="text-end">
            <small class="text-success" v-if="item.coupon">折扣價：</small>
            {{ item.final_total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ carts.final_total }}</td>
      </tr>
      <template v-if="carts.total - carts.final_total > 0">
        <tr>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ calDiscount(carts.total, carts.final_total) }}</td>
        </tr>
      </template>
    </tfoot>
  </table>
</template>
<script>
import { hexAxios, userAPI } from '@/response/hexAxios';

export default {
  name: 'Cart',
  data() {
    return {
      isLoadingBtn: false,
      couponCode: '',
      carts: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      hexAxios
        .get(userAPI.cart.list())
        .then((res) => {
          const { success, data, message } = res.data;
          if (success) {
            this.carts = data;
            this.$bus.$emit('cartCount', this.carts);
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
    useCoupon() {
      if (!this.couponCode) {
        this.$swal({
          title: '請輸入優惠碼',
          icon: 'error',
          toast: false,
          position: 'center',
          showCloseButton: true,
          showConfirmButton: false,
        });
        return;
      }
      const data = {
        data: {
          code: this.couponCode,
        },
      };
      hexAxios
        .post(userAPI.coupon.src(), data)
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal({
              title: message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              this.getCart();
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
      this.couponCode = '';
    },
    emptyCart() {
      this.isLoadingBtn = true;
      hexAxios
        .delete(userAPI.cart.deleteAll())
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal({
              title: message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              this.getCart();
              this.$bus.$emit('cartCount');
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
    calDiscount(price, newPrice = 0) {
      return Number.parseInt(price, 10) - Number.parseInt(newPrice, 10);
    },
    delCart(pid) {
      hexAxios
        .delete(userAPI.cart.delete(pid))
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.$swal({
              title: message,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              this.getCart();
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
        .then(() => this.getCart())
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
  created() {
    this.getCart();
  },
};
</script>
