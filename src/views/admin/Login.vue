<template>
  <main class="login">
    <div class="container-fluid g-0">
      <div class="row g-0">
        <div class="col-md-6">
          <div class="d-none d-md-block login__image img-fluid"></div>
        </div>
        <div class="login__black col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div class="col-8 text-center ">
            <h1 class="h3 font-weight-normal">管理者後台</h1>
            <form class="login__form" @submit.prevent="login">
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
            <router-link v-if="isLogin" class="d-block text-secondary" to="/dashboard/product">直接登入</router-link>
            <footer>
              <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 2021</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </main>
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
            this.$swal({
              title: res.data.message,
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
    const authTOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = authTOKEN;
    this.checkUser();
  },
};
</script>
<style lang="scss">
.login__image {
  background-image: url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  position: relative;
  &::before{
    content: " ";
    position: absolute;
    background-color: rgba(#111111, 20%);
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
}
.login__black{
  min-height: 100vh;
}

.login__form {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
