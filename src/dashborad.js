import '@/styles/dashborad.scss';
import { hexAxios, api } from './js/hexAxios';

const productList = document.getElementById('productList');
const productCount = document.getElementById('productCount');
// Dom
const app = {
  productList,
  productCount,
  data: {
    productData: [],
  },
  renderList() {
    let template = '';
    this.data.productData.forEach((item) => {
      template += `<tr>
      <td>${item.title}</td>
      <td width="120">
      ${item.origin_price}
      </td>
      <td width="120">
      ${item.price}
      </td>
      <td width="100">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="is_enabled" 
          ${item.is_enabled ? 'checked' : ''} 
          data-action="complete" data-id="${item.id}">
          <label class="form-check-label" for="is_enabled">
          ${item.is_enabled ? '啟用' : '未啟用'}
          </label>
        </div>
      </td>
      <td width="120">
        <button type="button" class="btn btn-sm btn-outline-danger move deleteBtn" data-action="remove" data-id="
        ${item.id}
        "> 刪除 </button>
      </td>
    </tr>`;
    });

    this.productList.innerHTML = template;
    this.productCount.textContent = this.data.productData.length;
  },
  checkUser() {
    hexAxios.post(api.check).then((res) => {
      const { success } = res.data;
      if (!success) {
        window.location.href = './';
      }
    });
  },
  getProduct() {
    hexAxios.get(api.product.all).then((res) => {
      const { products } = res.data;
      this.data.productData = Object.values(products).map((item) => item);
      this.renderList();
    });
  },
  switchProductEnabled(id) {
    const product = this.data.productData.find((item) => item.id === id);
    if (!product) {
      return;
    }
    product.is_enabled = !product.is_enabled;
    hexAxios.put(api.product.src(product.id), { data: product }).then((res) => {
      if (res.data.success) {
        this.getProduct();
      }
    });
  },
  delProduct(id) {
    hexAxios.delete(api.product.src(id)).then((res) => {
      if (res.data.success) {
        this.data.productData = this.data.productData.filter((item) => item.id !== id);
        this.renderList();
      }
    });
  },
  productAction(evt) {
    if (Object.keys(evt.target.dataset).length === 0) {
      return;
    }
    const { action, id } = evt.target.dataset;
    const productId = id.trim();
    switch (action) {
      case 'remove':
        this.delProduct(productId);
        break;
      case 'complete':
        this.switchProductEnabled(productId);
        break;
      default:
        break;
    }
  },
  setAuth() {
    const AUTH_TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    hexAxios.defaults.headers.common.Authorization = AUTH_TOKEN;
  },
  init() {
    this.setAuth();
    this.checkUser();
    this.getProduct();
    this.productList.addEventListener('click', this.productAction.bind(this));
  },
};

app.init();
