<template>
  <div class="d-flex justify-content-between align-items-baseline">
    <h2><i class="bi bi-award p-1"></i>訂單管理</h2>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orders" :key="item.id">
        <tr class="text-secondary">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span>{{ item.user.email }}</span>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, key) in item.products" :key="key">
                {{ product.product.title }} 數量：{{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paid${item.id}`"
                v-model="item.is_paid"
                @change="updatePayment(item)"
              />
              <label class="form-check-label" :for="`paid${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(item)" type="button">檢視</button
              ><button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)" type="button">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <Pagination :pages="pages" :current-page="currentPage" @to-page="toPage" v-if="pages.total_pages"></Pagination>
  <OrderModal :order="tempOrder" ref="orderModal" @update-payment="updatePayment"></OrderModal>
  <DeleteModal :item="tempOrder" @deletItem="deleteOrder" ref="deleteModal"></DeleteModal>
</template>
<script>
import { hexAxios, api } from '@/response/hexAxios';

import OrderModal from '@/components/OrderModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'admin.order',
  components: {
    OrderModal,
    DeleteModal,
    Pagination,
  },
  data() {
    return {
      tempOrder: {},
      orders: [],
      currentPage: 1,
      pages: {},
    };
  },
  methods: {
    getOrder() {
      const { total_pages: totalPages = 5 } = this.pages;
      this.currentPage = this.currentPage > totalPages ? totalPages : this.currentPage;
      this.$swal({
        title: '讀取訂單',
        icon: 'info',
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
      });
      hexAxios.get(api.order.page(this.currentPage)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pages = { ...pagination };
        }
      });
    },
    updatePayment(item) {
      const data = {
        data: {
          is_paid: item.is_paid,
          paid_date: Math.floor(Date.now() / 1000),
        },
      };
      hexAxios.put(api.order.src(item.id), data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getOrder(this.currentPage);
          this.$swal({
            title: '更新付款狀態',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    toPage(page) {
      this.currentPage = page;
      this.getOrder();
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.$refs.orderModal.openModal();
    },
    openDeleteModal(item) {
      this.tempOrder = { ...item };
      this.$refs.deleteModal.openModal();
    },
    deleteOrder() {
      hexAxios.delete(api.order.src(this.tempOrder.id)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getOrder(this.currentPage);
          this.$swal({
            title: '已刪除訂單',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
