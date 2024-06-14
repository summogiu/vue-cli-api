<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous"
        :class="{ disabled : !pages.has_pre }"
        @click.prevent="changePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="item in pages.total_pages" :key="item">
        <a class="page-link" href="#" @click.prevent="changePage(item)"
        :class="{ active: pages.current_page === item }"
        >{{ item }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"
        :class="{ disabled : !pages.has_next }"
        @click.prevent="changePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    changePage (page) {
      this.$emit('change-page', page)
    }
  }
}
</script>
