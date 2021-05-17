import '@/styles/index.scss';
import { hexAxios, api } from './js/hexAxios';

const app = {
  loginForm: document.getElementById('form'),
  saveCookie(token, expired) {
    document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
  },
  login(evt) {
    evt.preventDefault();
    const data = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };
    hexAxios.post(api.signin, data).then((res) => {
      const { success } = res.data;
      if (success) {
        const { token, expired } = res.data;
        this.saveCookie(token, expired);
        window.location.href = './dashborad/';
      }
    });
  },
  init() {
    this.loginForm.addEventListener('submit', this.login.bind(this));
  },
};

app.init();
