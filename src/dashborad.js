import '@/styles/dashborad.scss';
import { hexAxios, api } from './js/hexAxios';

// Dom
const productList = document.getElementById('productList');
const productCount = document.getElementById('productCount');
let productData = [];

function renderProductCount() {
  productCount.innerHTML = productData.length;
}

function renderList(data) {
  let template = '';
  data.forEach((item) => {
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

  productList.innerHTML = template;
  renderProductCount();
}

function checkUser() {
  hexAxios.post(api.check).then((res) => {
    const { success } = res.data;
    if (!success) {
      window.location.href = './';
    }
  });
}

function getProduct() {
  hexAxios.get(api.product.all).then((res) => {
    const { products } = res.data;
    productData = Object.values(products).map((item) => item);
    renderList(productData);
  });
}

function switchProductEnabled(id) {
  const product = productData.find((item) => item.id === id);
  if (!product) {
    return;
  }
  product.is_enabled = !product.is_enabled;
  hexAxios.put(api.product.src(product.id), { data: product }).then((res) => {
    if (res.data.success) {
      getProduct();
    }
  });
}

function delProduct(id) {
  const productId = id;
  hexAxios
    .delete(api.product.src(productId))
    .then((res) => {
      if (res.data.success) {
        productData = productData.filter((item) => item.id !== productId);
        renderList(productData);
      }
    })
    .then(() => {
      getProduct();
    });
}

function productAction(evt) {
  if (!evt.target.dataset) {
    return;
  }
  const { action, id } = evt.target.dataset;
  const productId = id.trim();
  switch (action) {
    case 'remove':
      delProduct(productId);
      break;
    case 'complete':
      switchProductEnabled(productId);
      break;
    default:
      break;
  }
}

function setAuth() {
  const AUTH_TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  hexAxios.defaults.headers.common.Authorization = AUTH_TOKEN;
}

function init() {
  setAuth();
  checkUser();
  getProduct();
  productList.addEventListener('click', productAction);
}

init();
