<template>
  <div class="my-5 row justify-content-center">
    <VForm ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
      <div class="mb-3">
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
      <div class="mb-3">
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
      <div class="mb-3">
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
      <div class="mb-3">
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
          <textarea v-bind="field" class="form-control" cols="30" rows="10"></textarea>
        </VField>
      </div>
      <button class="btn btn-primary" :disabled="isLoadingBtn">
        <div class="spinner-border spinner-border-sm" v-show="isLoadingBtn" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        送出
      </button>
    </VForm>
  </div>
</template>
<script>
import { hexAxios, userAPI } from '@/response/hexAxios';

export default {
  name: 'Customer',
  data() {
    return {
      isLoadingBtn: false,
      formData: {
        user: {},
        message: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.isLoadingBtn = true;
      const data = {
        data: {
          ...this.formData,
        },
      };
      hexAxios
        .post(userAPI.order.src(), data)
        .then((res) => {
          const { success, orderId } = res.data;
          if (success) {
            this.$swal({
              title: `訂單ID:${orderId}`,
              icon: 'success',
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              this.$refs.form.resetForm();
              this.$router.push('/');
            });
          }
        })
        .finally(() => {
          this.isLoadingBtn = false;
          this.$bus.$emit('cartCount');
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
};
</script>
