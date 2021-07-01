import Swal from 'sweetalert2';
import axios from 'axios';

const apiPath = process.env.VUE_APP_PATH;

const hexAxios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});
const authTOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
hexAxios.defaults.headers.common.Authorization = authTOKEN || '';

hexAxios.interceptors.response.use(
  (response) => {
    const { success: isSuccess = false } = response.data;
    if (!isSuccess) {
      Swal.fire({
        title: response.data.message,
        icon: 'error',
        toast: false,
        position: 'center',
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          Swal.fire({
            title: '你要找的頁面不存在',
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
          // go to 404 page
          break;
        case 500:
          Swal.fire({
            title: '程式發生問題',
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
          // go to 500 page
          break;
        default:
          Swal.fire({
            title: error.toString(),
            icon: 'error',
            toast: false,
            position: 'center',
            showCloseButton: true,
            showConfirmButton: false,
          });
      }
    }
    return Promise.reject(error);
  },
);

const api = {
  signin: '/admin/signin',
  logout: '/logout',
  check: '/api/user/check',
  upload: `/api/${apiPath}/admin/upload`,
  product: {
    path: `/api/${apiPath}/admin/product`,
    src: (id) => `/api/${apiPath}/admin/product/${id}`,
    page: (id) => `/api/${apiPath}/admin/products?page=${id}`,
    all: `/api/${apiPath}/admin/products/all`,
  },
  order: {
    src: (id) => `/api/${apiPath}/admin/order/${id}`, // put,delete
    page: (page = 1) => `/api/${apiPath}/admin/orders?page=${page}`, // GET
    all: () => `/api/${apiPath}/admin/orders/all`, // get,delete
  },
  coupon: {
    new: `/api/${apiPath}/admin/coupon`, // post
    src: (id) => `/api/${apiPath}/admin/coupon/${id}`, // put,delete
    page: (page = 1) => `/api/${apiPath}/admin/coupons?page=${page}`, // get
  },
  article: {
    new: `/api/${apiPath}/admin/article`, // post
    src: (id) => `/api/${apiPath}/admin/article/${id}`, // get,put,delete
    page: (page = 1) => `/api/${apiPath}/admin/articles?page=${page}`, // get
  },
};

const userAPI = {
  product: {
    page: (id = 1) => `/api/${apiPath}/products?page=${id}`, // GET
    sigle: (id) => `/api/${apiPath}/product/${id}`, // GET
    all: () => `/api/${apiPath}/products/all`, // GET
  },
  cart: {
    src: () => `/api/${apiPath}/cart`,
    delete: (id) => `/api/${apiPath}/cart/${id}`, // DETEL
    list: () => `/api/${apiPath}/cart`, // GET
    deleteAll: () => `/api/${apiPath}/carts`, // DETEL
  },
  order: {
    src: () => `/api/${apiPath}/order`,
  },
  coupon: {
    src: () => `/api/${apiPath}/coupon`, // POST
  },
};

export { hexAxios, userAPI, api };
