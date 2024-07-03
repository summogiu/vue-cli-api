<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center page-list">
      <li class="">
        <button class="page-np-btn" href="#" aria-label="Previous"
                @click.prevent="changePage(pages.current_page - 1)"
                :disabled="!pages.has_pre">
          <i class="bi bi-arrow-left page-np-i"
                  :class="{ 'page-disabled' : !pages.has_pre }"></i>
        </button>
      </li>
      <li class="page-li" v-for="item in pages.total_pages" :key="item">
        <button class="page-btn" href="#" @click.prevent="changePage(item)"
                :class="{ 'page-active': pages.current_page === item }"
                :disabled="pages.current_page === item"
                >{{ item }}</button>
      </li>
      <li class="">
        <button class="page-np-btn" href="#" aria-label="Next"
                @click.prevent="changePage(pages.current_page + 1)"
                :disabled="!pages.has_next">
          <i class="bi bi-arrow-right page-np-i"
                  :class="{ 'page-disabled' : !pages.has_next }"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.page-list{
  display: flex;
  align-items: center;
  margin: 50px 0;

  .page-np-btn{
    border: none;
    background-color: transparent;
  }
  .page-btn{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid $subColor2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    color: $subColor2;
    background-color: transparent;
  }
  .page-active{
    background-color: $subColor2;
    color: $subColor;
  }

  .page-np-i{
    color: $subColor2;
    font-size: 24px;
    margin: 0 15px;
  }
  .page-disabled{
    color: $more-linkColor;
    cursor: default;
  }
}
</style>

<script>
export default {
  props: ['pages'],
  methods: {
    changePage (page) {
      this.$emit('change-page', page)
      window.scrollTo(0, 0)
    }
  }
}
</script>
