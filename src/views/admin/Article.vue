<template lang="">
  <div class="d-flex justify-content-between align-items-baseline">
    <h2><i class="bi bi-bank2 p-1" style="font-size: 1.5rem;"></i>最新消息</h2>
    <button class="btn btn-primary m-3" @click="openModal">建立新的最新消息</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th style="width: 200px">標題</th>
        <th style="width: 200px">作者</th>
        <th>描述</th>
        <th style="width: 100px">建立時間</th>
        <th style="width: 100px">是否公開</th>
        <th style="width: 120px">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in articles" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.description }}</td>
        <td>{{ $filters.date(item.create_at) }}</td>
        <td>
          <span class="text-success" v-if="item.isPublic">已上架</span>
          <span class="text-muted" v-else>未上架</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" type="button" @click="getArticle(item.id)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" type="button" @click="openDeleteModal(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pages" :current-page="currentPage" @to-page="toPage" v-if="pages.total_pages"></Pagination>
  <ArticleModal
    :isNew="isNew"
    :article="tempArticle"
    ref="articleModal"
    @newOrUpdateArticle="newOrUpdateArticle"
  ></ArticleModal>
  <DeleteModal :item="tempArticle" @deletItem="deleteArticle" ref="deleteModal"></DeleteModal>
</template>
<script>
import { hexAxios, api } from '@/response/hexAxios';

import ArticleModal from '@/components/ArticleModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    ArticleModal,
    DeleteModal,
    Pagination,
  },
  data() {
    return {
      articles: [],
      isNew: false,
      tempArticle: {},
      currentPage: 1,
      pages: {},
    };
  },
  methods: {
    getArticles() {
      this.$swal({
        title: '讀取中...',
        icon: 'info',
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
      });
      hexAxios.get(api.article.page(this.currentPage)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          const { articles, pagination } = res.data;
          this.articles = articles;
          this.pages = { ...pagination };
        }
      });
    },
    getArticle(id) {
      this.$swal({
        title: '讀取中...',
        icon: 'info',
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
      });
      hexAxios
        .get(api.article.src(id))
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            const { article } = res.data;
            this.openModal({ isNew: false, item: article });
          }
        })
        .then(() => {});
    },
    newOrUpdateArticle(tempArticle) {
      const data = {
        data: {
          ...tempArticle,
        },
      };
      if (this.isNew) {
        this.newArticle(data);
      } else {
        this.updateArticle(data);
      }
    },
    updateArticle(data) {
      const { id } = data.data;
      hexAxios.put(api.article.src(id), data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getArticles(this.currentPage);
          this.$swal({
            title: '更新文章',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    newArticle(data) {
      hexAxios.post(api.article.new, data).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getArticles();
          this.$swal({
            title: '已新增文章',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    deleteArticle() {
      hexAxios.delete(api.article.src(this.tempArticle.id)).then((res) => {
        const { success: isSuccess = false } = res.data;
        if (isSuccess) {
          this.getArticles(this.currentPage);
          this.$swal({
            title: '已刪除文章',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
    toPage(page) {
      this.currentPage = page;
      this.getArticles();
    },
    openModal({ isNew = true, item = {} } = {}) {
      this.isNew = isNew;
      this.tempArticle = isNew ? {} : { ...item };
      this.$refs.articleModal.openModal();
    },
    openDeleteModal(item) {
      this.tempArticle = { ...item };
      this.$refs.deleteModal.openModal();
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
