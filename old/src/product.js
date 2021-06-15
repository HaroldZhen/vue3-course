/* global Vue, VeeValidate, VeeValidateRules, VeeValidateI18n */
import '@/styles/dashborad.scss';
import * as bootstrap from 'bootstrap';
import { hexAxios, userAPI } from './js/hexAxios';
import 'sweetalert2/src/sweetalert2.scss';
import utilitMethods from './js/utilit';
import bsPagination from './component/pagination';

Object.keys(VeeValidateRules).forEach((rule) => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
  }
});

VeeValidateI18n.loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json');

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});

const App = {
  components: {
    pagination: bsPagination,
  },
  data() {
    return {
      isLoadingBtn: false,
      firstTab: '',
      productModal: '',
      products: [],
      tempProduct: {
        qty: 1,
      },
      currentPage: 1,
      pages: {},
      couponCode: '',
      carts: {
        carts: [],
      },
      formData: {
        user: {},
        message: '',
      },
    };
  },
  methods: {
    ...utilitMethods,
    useCoupon() {
      if (!this.couponCode) {
        this.swaError({ title: '請輸入優惠碼' });
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
            this.swaAlert({ title: message, text: '' });
          } else {
            this.swaError({ title: message });
          }
        })
        .then(() => {
          this.getCart();
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
      this.couponCode = '';
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    getProduct() {
      hexAxios
        .get(userAPI.product.page(this.currentPage))
        .then((res) => {
          const { success, products, message, pagination } = res.data;
          if (success) {
            this.products = products;
            this.pages = { ...pagination };
          } else {
            this.swaError({ title: message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    getSignProduct(pid) {
      this.tempProduc = {};
      hexAxios
        .get(userAPI.product.sigle(pid))
        .then((res) => {
          const { success, product, message } = res.data;
          if (success) {
            this.tempProduct = {
              ...product,
              qty: 1,
            };
          } else {
            this.swaError({ title: message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    getCart() {
      hexAxios
        .get(userAPI.cart.list())
        .then((res) => {
          const { success, data, message } = res.data;
          if (success) {
            this.carts = data;
          } else {
            this.swaError({ title: message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    addCart(pid, qty = 1) {
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
            this.swaAlert({ title: message });
          } else {
            this.swaError({ title: message });
          }
        })
        .then(() => {
          this.getCart();
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        })
        .finally(() => {
          this.isLoadingBtn = false;
        });
    },
    delCart(pid) {
      hexAxios
        .delete(userAPI.cart.delete(pid))
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.swaAlert({ title: message, text: '' });
          } else {
            this.swaError({ title: message });
          }
        })
        .then(() => this.getCart())
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    emptyCart() {
      this.isLoadingBtn = true;
      hexAxios
        .delete(userAPI.cart.deleteAll())
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            this.swaAlert({ title: message, text: '' });
          } else {
            this.swaError({ title: message });
          }
        })
        .then(() => this.getCart())
        .catch((error) => {
          this.swaError({ title: error.toString() });
        })
        .finally(() => {
          this.isLoadingBtn = false;
        });
    },
    toPage(page = 1) {
      this.currentPage = page;
    },
    calDiscount(price, newPrice = 0) {
      return Number.parseInt(price, 10) - Number.parseInt(newPrice, 10);
    },
    onSubmit(values, { resetForm }) {
      this.isLoadingBtn = true;
      console.log(values);
      if (!this.carts.carts.length) {
        this.swaError({ title: '購物車是空的唷！' });
        return;
      }
      const data = {
        data: {
          ...this.formData,
        },
      };
      hexAxios
        .post(userAPI.order.src(), data)
        .then((res) => {
          const { success, message, orderId } = res.data;
          if (success) {
            this.swaAlert({ title: message, text: `訂單ID:${orderId}` });
          } else {
            this.swaError({ title: message });
          }
        })
        .then(() => {
          this.getCart();
          this.formData.user = {};
          this.formData.message = '';
          resetForm();
          this.firstTab.show();
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        })
        .finally(() => {
          this.isLoadingBtn = false;
        });
    },
  },
  created() {
    this.getProduct();
    this.getCart();
  },
  mounted() {
    const modalDom = document.getElementById('productModal');
    this.productModal = new bootstrap.Modal(modalDom);
    const tabDom = document.querySelector('#myTab li:first-child button');
    this.firstTab = new bootstrap.Tab(tabDom);
  },
};

Vue.createApp(App)
  .component('VForm', VeeValidate.Form)
  .component('VField', VeeValidate.Field)
  .component('ErrorMessage', VeeValidate.ErrorMessage)
  .mount('#app');
