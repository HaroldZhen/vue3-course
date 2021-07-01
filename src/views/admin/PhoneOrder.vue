<template>
  <div class="d-flex justify-content-between align-items-baseline">
    <h2><i class="bi bi-book-fill p-1" style="font-size: 1.5rem;"></i>電話接單</h2>
  </div>
  <div class="row">
    <div class="col-md-8">
      <div class="phone-prodcut h-100">
        <h3>產品清單</h3>
        <table class="table">
          <thead>
            <tr>
              <th style="width: 80px;">照片</th>
              <th>名稱</th>
              <th style="width: 120px;">數量</th>
              <th>價格</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="product in products" :key="product.id">
              <tr>
                <td>
                  <div
                    class="img-fluid"
                    style="min-height: 50px; background-position: center; background-size: cover;"
                    :style="{ backgroundImage: `url(${product.imageUrl})` }"
                  ></div>
                </td>
                <td>{{ product.title }}</td>
                <td>
                  <div class="input-group input-group-sm mb-3">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon1"
                      @click="product.qty = Math.max(0, product.qty - 1)"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      min="0"
                      class="form-control text-center"
                      v-model="product.qty"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon1"
                      @click="product.qty = product.qty + 1"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${{ product.price }}</td>
                <td>
                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      :disabled="product.qty === 0"
                      @click="
                        addToCart(product);
                        product.qty = 0;
                      "
                      class="btn btn-outline-primary btn-sm"
                    >
                      新增
                    </button>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4">
      <div class="mb-3">
        <h3>購物車</h3>
        <div class="phone-carts">
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
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3>輸入訂單</h3>
        <VForm ref="form" v-slot="{ errors }" @submit="onSubmit">
          <div class="mb-1">
            <label for="email" class="form-label">Email</label>
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="formData.user.email"
            ></VField>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-1">
            <label for="email" class="form-label">收件人姓名</label>
            <VField
              id="name"
              name="name"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['name'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="formData.user.name"
            ></VField>
            <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-1">
            <label for="tel" class="form-label">收件人電話</label>
            <VField
              id="tel"
              name="tel"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['tel'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="formData.user.tel"
            ></VField>
            <ErrorMessage name="tel" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-1">
            <label for="address" class="form-label">收件人地址</label>
            <VField
              id="address"
              name="address"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['address'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="formData.user.address"
            ></VField>
            <ErrorMessage name="address" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <VField id="message" name="message" v-model="formData.message" v-slot="{ field }">
              <textarea v-bind="field" class="form-control" cols="10" rows="10"></textarea>
            </VField>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary" :disabled="carts.total === 0">送出</button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script>
import { hexAxios, api, userAPI } from '@/response/hexAxios';

export default {
  data() {
    return {
      products: {},
      carts: {},
      formData: {
        user: {},
        message: '',
      },
    };
  },
  methods: {
    getProducts() {
      hexAxios.get(api.product.all).then((res) => {
        const { success: isSuccess = false, products } = res.data;
        if (isSuccess) {
          this.products = Object.values(products).map((item) => item);
          this.products.forEach((item, index) => {
            this.products[index] = {
              ...item,
              qty: 0,
            };
          });
        }
      });
    },
    getCart() {
      hexAxios.get(userAPI.cart.list()).then((res) => {
        const { success, data } = res.data;
        if (success) {
          this.carts = data;
        }
      });
    },
    addToCart(product) {
      const { id, qty } = product;
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      hexAxios.post(userAPI.cart.src(), data).then((res) => {
        const { success, message } = res.data;
        if (success) {
          this.$swal({
            title: message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
          this.getCart();
        }
      });
    },
    delCart(pid) {
      hexAxios.delete(userAPI.cart.delete(pid)).then((res) => {
        const { success, message } = res.data;
        if (success) {
          this.$swal({
            title: message,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
          this.getCart();
        }
      });
    },
    onSubmit() {
      const data = {
        data: {
          ...this.formData,
        },
      };
      hexAxios.post(userAPI.order.src(), data).then((res) => {
        const { success, orderId } = res.data;
        if (success) {
          this.$swal({
            title: `訂單ID:${orderId}`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            this.$refs.form.resetForm();
          });
        }
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style>
.phone-carts {
  max-height: 400px;
  overflow: auto;
}
.phone-form {
  height: 360px;
  overflow: auto;
}
</style>
