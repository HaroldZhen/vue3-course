/* global Vue */
import '@/styles/dashborad.scss';
import * as bootstrap from 'bootstrap';
import { hexAxios, userAPI } from './js/hexAxios';
import 'sweetalert2/src/sweetalert2.scss';
import utilitMethods from './js/utilit';
import bsPagination from './component/pagination';

const App = {
  components: {
    pagination: bsPagination,
  },
  data() {
    return {
      productModal: '',
      products: [],
      tempProduct: {
        qty: 1,
      },
      currentPage: 1,
      pages: {},
      carts: {},
    };
  },
  methods: {
    ...utilitMethods,
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
          console.log(product);
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
          console.log(res.data);
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
      const data = {
        data: {
          product_id: pid,
          qty,
        },
      };
      hexAxios
        .post(userAPI.cart.src(), data)
        .then((res) => {
          console.log(res.data);
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
        });
    },
    delCart(pid) {
      hexAxios
        .delete(userAPI.cart.delete(pid))
        .then((res) => {
          console.log(res.data);
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
      hexAxios
        .delete(userAPI.cart.deleteAll())
        .then((res) => {
          console.log(res.data);
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
    toPage(page = 1) {
      this.currentPage = page;
    },
    calDiscount(price, newPrice = 0) {
      return Number.parseInt(price, 10) - Number.parseInt(newPrice, 10);
    },
  },
  created() {
    this.getProduct();
    this.getCart();
  },
  mounted() {
    const modalDom = document.getElementById('productModal');
    this.productModal = new bootstrap.Modal(modalDom);
  },
};

Vue.createApp(App).mount('#app');
