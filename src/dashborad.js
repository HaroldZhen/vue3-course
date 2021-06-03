/* global Vue */
import '@/styles/dashborad.scss';
import { hexAxios, api } from './js/hexAxios';
import 'sweetalert2/src/sweetalert2.scss';
import delModal from './component/delProductModal';
import prodModal from './component/productModal';
import bsPagination from './component/pagination';
import utilitMethods from './js/utilit';

const App = {
  components: {
    'product-modal': prodModal,
    'delete-product-modal': delModal,
    pagination: bsPagination,
  },
  data() {
    return {
      showProductModal: false,
      showDelProductModal: false,
      tempProduct: {},
      products: [],
      currentPage: 1,
      pages: {},
    };
  },
  created() {
    const AUTH_TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = AUTH_TOKEN;
    this.tempProduct = this.defaultProduct();
    this.getProduct();
  },
  methods: {
    ...utilitMethods,
    defaultProduct() {
      return {
        title: '',
        category: '',
        unit: '',
        origin_price: 0,
        price: 0,
        description: '',
        content: '',
        is_enabled: 0,
        imageUrl: '',
        imagesUrl: [],
      };
    },
    checkUser() {
      hexAxios
        .post(api.check)
        .then((res) => {
          const { success } = res.data;
          if (!success) {
            window.location.href = './';
          } else {
            this.swaError({ title: res.data.message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    getProduct() {
      const { total_pages: totalPages = 5 } = this.pages;
      this.currentPage = this.currentPage > totalPages ? totalPages : this.currentPage;
      hexAxios
        .get(api.product.page(this.currentPage))
        .then((res) => {
          const { success: isSuccess = false, products, pagination } = res.data;
          if (isSuccess) {
            this.products = Object.values(products).map((item) => item);
            this.pages = { ...pagination };
            this.swaInfo({ title: '讀取產品' });
          } else {
            this.swaError({ title: res.data.message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    newOrUpdateProduct(tempProduct) {
      const data = {
        data: {
          ...tempProduct,
          price: parseInt(tempProduct.price, 10),
          origin_price: parseInt(tempProduct.origin_price, 10),
          is_enabled: tempProduct.is_enabled ? 1 : 0,
        },
      };
      if (data.data.id) {
        this.updateProduct(data);
      } else {
        this.addProducts(data);
      }
    },
    addProducts(data) {
      hexAxios
        .post(api.product.path, data)
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            this.swaAlert({ title: data.data.title });
            this.getProduct();
          } else {
            this.swaError({ title: res.data.message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    addImage(tempImage) {
      const { imagesUrl = [] } = this.tempProduct;
      imagesUrl.push(tempImage.url);
      this.tempProduct.imagesUrl = imagesUrl;
    },
    updateProduct(data) {
      hexAxios
        .put(api.product.src(data.data.id), data)
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            this.swaAlert({ title: data.data.title, text: '更新成功' });
            this.getProduct();
          } else {
            this.swaError({ title: res.data.message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    deleteProduct(id) {
      this.showDelProductModal = false;
      hexAxios
        .delete(api.product.src(id))
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            this.swaAlert({ title: '刪除成功', text: '' });
            this.getProduct();
          } else {
            this.swaError({ title: res.data.message });
          }
        })
        .catch((error) => {
          this.swaError({ title: error.toString() });
        });
    },
    deleteImage(index) {
      this.tempProduct.imagesUrl.splice(index, 1);
    },
    newProductModal() {
      this.tempProduct = this.defaultProduct();
      this.showProductModal = true;
    },
    editProductModal(prodcut) {
      this.tempProduct = { ...prodcut };
      this.showProductModal = true;
    },
    deleteProductModal(prodcut) {
      this.tempProduct = { ...prodcut };
      this.showDelProductModal = true;
    },
    toPage(page) {
      this.currentPage = page;
      this.getProduct();
    },
    hideModal(modalName) {
      this[modalName] = false;
    },
  },
};
Vue.createApp(App).mount('#app');
