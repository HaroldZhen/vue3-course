<template>
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="newProductModal">建立新的產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="product in products" :key="product.id">
        <tr>
          <td>
            <span class="badge mx-1" :class="tagColor(key)" v-for="(item, key) in product.category.split(',')" :key="item.id">{{ item }}</span>
          </td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              啟用</span
            >
            <span v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              未啟用</span
            >
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="editProductModal(product)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteProductModal(product)">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <Pagination :pages="pages" :current-page="currentPage" @to-page="toPage" v-if="pages.total_pages"></Pagination>
  <ProductModal :tempProduct="tempProduct" @addImage="addImage" @newOrUpdateProduct="newOrUpdateProduct" @deleteImage="deleteImage" ref="productModal"></ProductModal>
  <DeleteModal :tempProduct="tempProduct" @deleteProduct="deleteProduct" ref="deleteModal"></DeleteModal>
</template>

<script>
import { hexAxios, api } from '@/response/hexAxios';
import Pagination from '@/components/Pagination.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import ProductModal from '@/components/ProductModal.vue';

export default {
  components: {
    Pagination,
    DeleteModal,
    ProductModal,
  },
  data() {
    return {
      tempProduct: {},
      products: [],
      currentPage: 1,
      pages: {},
    };
  },
  created() {
    const authTOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = authTOKEN;
    this.tempProduct = this.defaultProduct();
    this.checkUser();
  },
  mounted() {},
  methods: {
    tagColor(index) {
      const color = ['bg-primary', 'bg-success', 'bg-danger', 'bg-warning text-dark', 'bg-info text-dark'];
      return color[index % color.length];
    },
    defaultProduct() {
      return {
        imagesUrl: [],
      };
    },
    async checkUser() {
      await hexAxios
        .post(api.check)
        .then((res) => {
          const { success } = res.data;
          if (success) {
            this.getProduct();
          } else {
            this.$router.push('/login');
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
    getProduct() {
      const { total_pages: totalPages = 5 } = this.pages;
      this.currentPage = this.currentPage > totalPages ? totalPages : this.currentPage;
      hexAxios
        .get(api.product.page(this.currentPage))
        .then((res) => {
          const { success: isSuccess = false, products, pagination } = res.data;
          if (isSuccess) {
            this.products = Object.values(products).map((item) => item);
            this.pages = { ...pagination };
            console.log('讀取產品');
          } else {
            console.log(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
    newOrUpdateProduct(tempProduct) {
      this.$refs.productModal.modal.hide();
      const data = {
        data: {
          ...tempProduct,
          price: tempProduct.price,
          origin_price: tempProduct.origin_price,
          is_enabled: tempProduct.is_enabled ? 1 : 0,
        },
      };
      if (data.data.id) {
        this.updateProduct(data);
      } else {
        this.addProducts(data);
      }
    },
    addProducts(data) {
      hexAxios
        .post(api.product.path, data)
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            console.log(data.data.title);
            this.getProduct();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
    addImage(tempImage) {
      const { imagesUrl = [] } = this.tempProduct;
      imagesUrl.push(tempImage.url);
      this.tempProduct.imagesUrl = imagesUrl;
    },
    updateProduct(data) {
      hexAxios
        .put(api.product.src(data.data.id), data)
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            console.log('更新成功');
            this.getProduct();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    },
    deleteProduct(id) {
      this.$refs.deleteModal.modal.hide();
      hexAxios
        .delete(api.product.src(id))
        .then((res) => {
          const { success: isSuccess = false } = res.data;
          if (isSuccess) {
            console.log('刪除成功');
            this.getProduct();
          } else {
            console.log(res.data.message);
          }
        })
        .then(this.getProduct())
        .catch((error) => {
          console.log(error.toString());
        });
    },
    deleteImage(index) {
      this.tempProduct.imagesUrl.splice(index, 1);
    },
    toPage(page) {
      this.currentPage = page;
      this.getProduct();
    },
    newProductModal() {
      this.tempProduct = this.defaultProduct();
      this.$refs.productModal.modal.show();
    },
    editProductModal(prodcut) {
      this.tempProduct = { ...prodcut };
      this.$refs.productModal.modal.show();
    },
    deleteProductModal(prodcut) {
      this.tempProduct = { ...prodcut };
      this.$refs.deleteModal.modal.show();
    },
  },
};
</script>
