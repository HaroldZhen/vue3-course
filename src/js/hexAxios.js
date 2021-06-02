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
