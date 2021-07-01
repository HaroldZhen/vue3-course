<template>
  <div class="d-flex justify-content-between align-items-baseline">
    <h2><i class="bi bi-bag-check p-1" style="font-size: 1.5rem;"></i>優惠券</h2>
    <button class="btn btn-primary m-3" @click="openModal">建立新的優惠券</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal({ isNew: false, item })">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pages" :current-page="currentPage" @to-page="toPage" v-if="pages.total_pages"></Pagination>
  <CouponModal
    :isNew="isNew"
    :coupon="tempCoupon"
    ref="couponModal"
    @newOrUpdateCoupon="newOrUpdateCoupon"
  ></CouponModal>
  <DeleteModal :item="tempCoupon" @deletItem="deleteCoupon" ref="deleteModal"></DeleteModal>
</template>
<script>
import { hexAxios, api } from '@/response/hexAxios';

import CouponModal from '@/components/CouponModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    CouponModal,
    DeleteModal,
    Pagination,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
      currentPage: 1,
      pages: {},
    };
  },
  methods: {
    getCoupon() {
      this.$swal({
        title: '讀取優惠卷',
        icon: 'info',
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
      });
      hexAxios.get(api.coupon.page(this.currentPage)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          const { coupons, pagination } = res.data;
          this.coupons = coupons;
          this.pages = { ...pagination };
        }
      });
    },
    toPage(page) {
      this.currentPage = page;
      this.getCoupon();
    },
    openModal({ isNew = true, item = {} } = {}) {
      this.isNew = isNew;
      this.tempCoupon = (isNew) ? {} : { ...item };
      this.$refs.couponModal.openModal();
    },
    openDeleteModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.deleteModal.openModal();
    },
    newOrUpdateCoupon(tempCoupon) {
      const data = {
        data: {
          ...tempCoupon,
        },
      };
      if (this.isNew) {
        this.newCoupon(data);
      } else {
        this.updateCoupon(data);
      }
    },
    updateCoupon(data) {
      const { id } = data.data;
      hexAxios.put(api.coupon.src(id), data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getCoupon(this.currentPage);
          this.$swal({
            title: '更新優惠卷',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    newCoupon(data) {
      hexAxios.post(api.coupon.new, data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getCoupon();
          this.$swal({
            title: '已新增優惠卷',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    deleteCoupon() {
      hexAxios.delete(api.order.src(this.tempCoupon.id)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getCoupon(this.currentPage);
          this.$swal({
            title: '已刪除優惠卷',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
