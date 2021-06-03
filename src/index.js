/* global Vue */
import '@/styles/index.scss';
import { hexAxios, api } from './js/hexAxios';
import 'sweetalert2/src/sweetalert2.scss';
import utilitMethods from './js/utilit';

/**
 * 登入元件 Login From Component
 */
const loginFrom = {
  template: '#loginForm',
  emits: ['sub-login'],
  data() {
    return {
      name: '',
      pwd: '',
    };
  },
  methods: {
    submit() {
      const data = {
        username: this.name,
        password: this.pwd,
      };
      this.$emit('sub-login', data);
    },
  },
};
/**
 * Vue app
 */
const App = {
  components: {
    'login-form': loginFrom,
  },
  data() {
    return {
      user: {
        username: '123213',
        password: '',
      },
    };
  },
  methods: {
    ...utilitMethods,
    /**
     * 接收元件資訊
     * @param {Object} userData 登入資訊
     * @param {string} userData.username 帳號
     * @param {string} userData.password 密碼
     */
    setUser(userData) {
      this.user = { ...userData };
      this.login();
    },
    /**
     * 登入
     */
    login() {
      const data = { ...this.user };
      hexAxios.post(api.signin, data).then((res) => {
        const { success = false } = res.data;
        if (success) {
          this.saveCookie(res.data);
          window.location.href = './dashborad/';
        } else {
          this.swaError({ title: res.data.message });
        }
      });
    },
    /**
     * 儲存Cookie
     * @param {Object} cookie cookie資訊
     * @param {string} cookie.token token
     * @param {string} cookie.expired 到期時間
     */
    saveCookie({ token, expired }) {
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    },
  },
};
Vue.createApp(App).mount('#app');
