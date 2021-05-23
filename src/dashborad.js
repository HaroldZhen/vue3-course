/* global Vue */
import * as bootstrap from 'bootstrap';
import '@/styles/dashborad.scss';
import Swal from 'sweetalert2';
import { hexAxios, api } from './js/hexAxios';
import 'sweetalert2/src/sweetalert2.scss';

const utilitMethods = {
  tagColor(index) {
    const color = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning text-dark', 'bg-info text-dark'];
    return color[index % color.length];
  },
  swaAlert({ position = 'center', title = 'success!', text = '新增成功', icon = 'success', timer = 2000 } = {}) {
    Swal.fire({
      position,
      title,
      text,
      icon,
      timer,
    });
  },
  swaError({ toast = false, position = 'center', title = 'title', icon = 'error', showCloseButton = true, showConfirmButton = false } = {}) {
    Swal.fire({
      toast,
      position,
      icon,
      title,
      showCloseButton,
      showConfirmButton,
    });
  },
};

const App = {
  data() {
    return {
      productModal: '',
      tempProduct: {},
      tempImage: {
        isEnable: false,
        url: '',
      },
      products: [],
    };
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
      hexAxios.post(api.check).then((res) => {
        const { success } = res.data;
        if (!success) {
          window.location.href = './';
        }
      });
    },
    getProduct() {
      hexAxios.get(api.product.all).then((res) => {
        const { success: isSuccess = false, products } = res.data;
        if (isSuccess) {
          this.products = Object.values(products).map((item) => item);
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            icon: 'info',
            title: '讀取產品',
          });
        } else {
          this.swaError({ title: res.data.message });
        }
      });
    },
    newOrUpdateProduct() {
      const data = {
        data: {
          ...this.tempProduct,
          price: parseInt(this.tempProduct.price, 10),
          origin_price: parseInt(this.tempProduct.origin_price, 10),
          is_enabled: this.tempProduct.is_enabled ? 1 : 0,
        },
      };
      if (data.data.id) {
        this.updateProduct(data);
      } else {
        this.addProducts(data);
      }
      this.productModal.hide();
    },
    addProducts(data) {
      hexAxios.post(api.product.path, data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.swaAlert({ title: data.data.title });
          this.getProduct();
        } else {
          this.swaError({ title: res.data.message });
        }
      });
    },
    updateProduct(data) {
      hexAxios.put(api.product.src(data.data.id), data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.swaAlert({ title: data.data.title, text: '更新成功' });
          this.getProduct();
        }
      });
    },
    deleteProduct(id) {
      hexAxios.delete(api.product.src(id)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.swaAlert({ title: '刪除成功', text: '' });
          this.getProduct();
        } else {
          this.swaError({ title: res.data.message });
        }
      });
    },
    addImage() {
      const { imagesUrl = [] } = this.tempProduct;
      imagesUrl.push(this.tempImage.url);
      this.tempProduct.imagesUrl = imagesUrl;
      this.tempImage = {
        isEnable: false,
        url: '',
      };
    },
    deleteImage(index) {
      this.tempProduct.imagesUrl.splice(index, 1);
    },
    newProductModal() {
      this.tempProduct = this.defaultProduct();
      this.productModal.show();
    },
    editProductModal(prodcut) {
      this.tempProduct = { ...prodcut };
      this.productModal.show();
    },
  },
  created() {
    this.tempProduct = this.defaultProduct();
    const AUTH_TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = AUTH_TOKEN;
    this.getProduct();
  },
  mounted() {
    this.productModal = new bootstrap.Modal(document.getElementById('productModal'));
  },
};
Vue.createApp(App).mount('#app');
