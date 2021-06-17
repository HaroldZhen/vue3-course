<template>
  <div class="login">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="col-8">
          <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" v-model="user.username" placeholder="name@example.com" id="email" required autofocus />
              <label for="email">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" v-model="user.password" placeholder="Password" required />
              <label for="password">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3">登入</button>
          </form>
          <div>
            <router-link to="/">Home</router-link>
            <p><router-link v-if="isLogin" to="/dashboard/product">直接登入</router-link></p>
          </div>
        </div>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 2021</p>
    </div>
  </div>
</template>

<script>
import { hexAxios, api } from '@/response/hexAxios';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLogin: false,
    };
  },
  methods: {
    setUser(userData) {
      this.user = { ...userData };
      this.login();
    },
    login() {
      const data = { ...this.user };
      hexAxios
        .post(api.signin, data)
        .then((res) => {
          const { success = false } = res.data;
          if (success) {
            this.saveCookie(res.data);
            this.$router.push('/dashboard/product');
          } else {
            console.warn(res.data.message);
          }
        })
        .catch((error) => {
          console.warn(error.toString());
        });
    },
    saveCookie({ token, expired }) {
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    },
    async checkUser() {
      this.isLogin = false;
      await hexAxios
        .post(api.check)
        .then((res) => {
          const { success } = res.data;
          if (success) {
            this.isLogin = true;
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
  },
  created() {
    const authTOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = authTOKEN;
    // this.tempProduct = this.defaultProduct();
    this.checkUser();
  },
};
</script>
<style>
.login {
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
