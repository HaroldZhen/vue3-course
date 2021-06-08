import * as bootstrap from 'bootstrap';

export default {
  props: ['tempProduct', 'showModalName'],
  emits: ['delete-product', 'hide-modal', 'delete-image'],
  data() {
    return {
      product: this.tempProduct,
      tempImage: {
        isEnable: false,
        url: '',
      },
      modalDom: '',
    };
  },
  mounted() {
    const modalDom = document.getElementById('productModal');
    this.modalDom = new bootstrap.Modal(modalDom);
    this.modalDom.show();
    modalDom.addEventListener('hidden.bs.modal', () => {
      this.$emit('hide-modal', this.showModalName);
    });
  },
  unmounted() {
    this.modalDom.hide();
  },
  methods: {
    addImage() {
      this.$emit('add-image', this.tempImage);
      this.tempImage = {
        isEnable: false,
        url: '',
      };
    },
  },
  template: `<div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
  <form @submit.prevent="$emit('new-or-update-product', product);modalDom.hide();">
  
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="productModalLabel" class="modal-title">
          <span v-if="product.id">編輯產品:{{ product.title }}</span>
          <span v-else>新增產品</span>
        </h5>
        <button type="button" class="btn-close btn btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-1">
              <div class="form-group">
                <label class="h5" for="imageUrl">輸入圖片網址</label>
                <input type="text" class="form-control" id="imageUrl" v-model="product.imageUrl" placeholder="請輸入圖片連結" />
              </div>
              <img class="img-fluid" :src="product.imageUrl" alt="主圖片" />
            </div>
            <label for="tempImages" class="h5">輸入子圖片網址</label>
            <div class="input-group">
              <input type="text" v-model="tempImage.url" id="tempImages" class="form-control" placeholder="請輸入子圖片連結" />
              <button class="btn btn-outline-primary" type="button" @click="addImage">新增</button>
            </div>
            <div class="row mt-2">
              <template v-for="(imageItem, index) in product.imagesUrl">
                <div class="col-4 mb-1 position-relative">
                  <a class="del-icon text-danger stretched-link" href="#" @click.prevent="$emit('delete-image', index)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                      />
                    </svg>
                  </a>
                  <img class="img-thumbnail w-100" :src="imageItem" alt="" />
                </div>
              </template>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">標題</label>
              <input id="title" type="text" class="form-control" v-model.trim="product.title" placeholder="請輸入標題" required />
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input id="category" type="text" class="form-control" v-model.trim="product.category" placeholder="請輸入分類" />
              </div>
              <div class="form-group col-md-6">
                <label for="price">單位</label>
                <input id="unit" type="text" class="form-control" v-model.trim="product.unit" placeholder="請輸入單位" required />
              </div>
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價</label>
                <input id="origin_price" type="number" min="0" v-model.number="product.origin_price" class="form-control" placeholder="請輸入原價" required />
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input id="price" type="number" min="0" v-model.number="product.price" class="form-control" placeholder="請輸入售價" required />
              </div>
            </div>
            <hr />

            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea id="description" type="text" class="form-control" v-model="product.description" placeholder="請輸入產品描述" required> </textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea id="content" type="text" class="form-control" v-model="product.content" placeholder="請輸入說明內容"> </textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input id="is_enabled" class="form-check-input" type="checkbox" v-model="product.is_enabled" :true-value="1" :false-value="0" />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button class="btn btn-primary">確認</button>
      </div>
    </div>
  </div>
  </form>
</div>`,
};
