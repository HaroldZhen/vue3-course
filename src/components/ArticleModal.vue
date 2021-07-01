<template>
  <div
    class="modal fade"
    id="articleModal"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="articleModalLabel">
            <span v-if="isNew">新增文章</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input type="date" class="form-control" id="create_at" v-model="createDate" />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div class="col-md-2 mb-1" v-for="(label, key) in tempArticle.tag" :key="key">
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button type="button" class="btn btn-outline-danger" @click="tempArticle.tag.splice(key, 1)">
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="tempArticle.tag[tempArticle.tag.length - 1] || !tempArticle.tag.length"
                >
                  <button class="btn btn-outline-primary btn-sm d-block w-100" @click="tempArticle.tag.push('')">
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">文章說明</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  v-model="tempArticle.content"
                  placeholder="請輸入文章說明"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" v-model="tempArticle.isPublic" id="isPublic" />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="onUpdate">更新文章</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap';

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['newOrUpdateArticle'],
  data() {
    return {
      bsModal: '',
      tempArticle: {
        tag: [''],
      },
      createDate: 0,
    };
  },
  methods: {
    openModal() {
      this.bsModal.show();
    },
    hideModal() {
      this.bsModal.hide();
    },
    onUpdate() {
      this.$emit('newOrUpdateArticle', this.tempArticle);
      this.hideModal();
    },
  },
  watch: {
    article() {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false,
      };
      const createAtDate = this.tempArticle.create_at || Math.floor(Date.now() / 1000);
      const date = new Date(createAtDate * 1000).toISOString().split('T');
      this.createDate = date.shift();
    },
    createDate() {
      this.tempArticle.create_at = this.$filters.dateToTimestamp(this.createDate);
    },
  },
  mounted() {
    this.bsModal = new Modal(this.$refs.modal);
  },
};
</script>
