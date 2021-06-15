export default {
  props: ['pages', 'currentPage'],
  methods: {
    toPage(page) {
      if (this.pages.current_page === page) {
        return;
      }
      this.$emit('to-page', page);
    },
  },
  template: `<nav aria-label="pagination">
  <ul class="pagination justify-content-center">
    <li class="page-item" :disabled="pages.has_pre" :class="[ pages.has_pre ? '' : 'disabled' ]">
      <a class="page-link" href="#" @click.prevent="toPage(pages.current_page - 1)">Previous</a>
    </li>
    <li class="page-item" v-for="n in pages.total_pages" :class="[ pages.current_page === n ? 'active' : '' ]">
      <a class="page-link" href="#" @click.prevent="toPage(n)">{{ n }}</a>
    </li>
    <li class="page-item" :disabled="pages.has_next" :class="[ pages.has_next ? '' : 'disabled' ]">
      <a class="page-link" href="#" @click.prevent="toPage(pages.current_page + 1)">Next</a>
    </li>
  </ul>
</nav>`,
};
