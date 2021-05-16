import '@/styles/index.scss';
import { hexAxios, api } from './js/hexAxios';

// Dom
const loginForm = document.getElementById('form');

function saveCookie(token, expired) {
  document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
}

function login(e) {
  e.preventDefault();
  const formTarget = e.target;
  const data = {
    username: formTarget.username.value,
    password: formTarget.password.value,
  };
  hexAxios.post(api.signin, data).then((res) => {
    const { success } = res.data;
    if (success) {
      const { token, expired } = res.data;
      saveCookie(token, expired);
      window.location.href = './dashborad/';
    }
  });
}

function init() {
  loginForm.addEventListener('submit', login);
}

init();
