<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="articles-list-frame">
      <div class="articles-list-title-box">
        <CurrentPath/>
        <h2>CUSTOMIZED</h2>
        <h3>訂製專欄</h3>
      </div>
      <div class="articles-list-tab-box">
        <form class="year-tab">
          <span>年份：</span>
          <input type="checkbox" name="" id="all"><label for="all">全部</label>
          <input type="checkbox" name="" id="y2024"><label for="y2024">2024</label>
          <input type="checkbox" name="" id="y2023"><label for="y2023">2023</label>
          <input type="checkbox" name="" id="y2022"><label for="y2022">2022</label>
        </form>
        <form class="year-tab">
          <label for="key-input">關鍵字：</label>
          <input type="text" id="key-input">
        </form>
      </div>
      <ul class="articles-list">
        <li v-for="item in articles" :key="item.id">
          <img :src="item.imageUrl" alt="article-img">
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <PaginationComponents :pages="pagination" @change-page="getArticles"/>
  </div>
</template>

<script>
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'

export default {
  components: {
    PaginationComponents,
    CurrentPath
  },
  data () {
    return {
      articles: [],
      isLoading: false,
      pagination: {}
    }
  },
  methods: {
    getArticles (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          console.log('請求已傳送')
          if (res.data.success) {
            this.articles = res.data.articles
            this.pagination = res.data.pagination
            console.log('請求已回覆')
          } else {
            console.log(res.data)
          }
        })
        .catch((error) => {
          console.log('取得文章列表失敗', error)
        })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
