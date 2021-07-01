import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // == Front 前台 ==
  // http://localhost:8080/#/
  // http://localhost:8080/#/about
  // http://localhost:8080/#/cart
  // http://localhost:8080/#/customer
  // http://localhost:8080/#/product/-M_sdyzjVAwppye84kaW
  {
    path: '/',
    component: () => import('@/views/layout/FrontLayout.vue'),
    meta: {
      breadcrumb: '首頁',
    },
    children: [
      {
        path: '',
        name: 'front.index',
        component: () => import('@/views/front/Home.vue'),
      },
      {
        path: 'about',
        name: 'front.about',
        component: () => import('@/views/front/About.vue'),
      },
      {
        path: 'product/:id',
        name: 'front.product',
        component: () => import('@/views/front/Product.vue'),
      },
      {
        path: 'cart',
        name: 'front.cart',
        component: () => import('@/views/front/Cart.vue'),
      },
      {
        path: 'customer',
        name: 'front.customer',
        component: () => import('@/views/front/Customer.vue'),
        meta: {
          breadcrumb: '表單',
          showBanner: false,
        },
      },
    ],
  },
  // == Admin 管理者後台 ==
  // http://localhost:8080/#/admin/login
  // http://localhost:8080/#/admin
  // http://localhost:8080/#/admin/order
  // http://localhost:8080/#/admin/coupon
  // http://localhost:8080/#/admin/article
  // http://localhost:8080/#/admin/phoneorder
  {
    path: '/admin/login',
    name: 'admin.login',
    component: () => import('@/views/admin/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin.index',
    component: () => import('@/views/layout/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin.prodcut',
        component: () => import('@/views/admin/Prodcut.vue'),
      },
      {
        path: 'order',
        name: 'admin.order',
        component: () => import('@/views/admin/Order.vue'),
      },
      {
        path: 'coupon',
        name: 'admin.coupon',
        component: () => import('@/views/admin/Coupon.vue'),
      },
      {
        path: 'article',
        name: 'admin.article',
        component: () => import('@/views/admin/Article.vue'),
      },
      {
        path: 'phoneorder',
        name: 'admin.phoneOrder',
        component: () => import('@/views/admin/PhoneOrder.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
