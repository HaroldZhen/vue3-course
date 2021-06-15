import axios from 'axios';

const url = 'https://vue3-course-api.hexschool.io/';
const apiPath = 'haroldapi';

export const hexAxios = axios.create({
  baseURL: url,
});

export const api = {
  signin: '/admin/signin',
  check: '/api/user/check',
  product: {
    path: `/api/${apiPath}/admin/product`,
    src: (id) => `/api/${apiPath}/admin/product/${id}`,
    page: (id) => `/api/${apiPath}/admin/products?page=${id}`,
    all: `/api/${apiPath}/admin/products/all`,
  },
};

export const userAPI = {
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
