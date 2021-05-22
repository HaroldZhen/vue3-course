/* global Vue */
import '@/styles/index.scss';
import { hexAxios, api } from './js/hexAxios';

const App = {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const data = { ...this.user };
      hexAxios.post(api.signin, data).then((res) => {
        const { success = false } = res.data;
        if (success) {
          this.saveCookie(res.data);
          window.location.href = './dashborad/';
        }
      });
    },
    saveCookie({ token, expired }) {
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    },
  },
};
Vue.createApp(App).mount('#app');
