<template>
  <div>
    <div class="text-end">
      <button type="button" @click="openModal(true)" class="btn btn-primary">新增文章</button>
    </div>
    <table class="table mt-4 article-list-table">
      <thead>
        <tr>
          <th width="120">建立者</th>
          <th width="200">標籤</th>
          <th>標題</th>
          <th width="120">公開/隱藏</th>
          <th width="100">建立時間</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in articles" :key="item.id">
          <td>{{ item.author }}</td>
          <td>
            <span v-for="(item,i) in item.tag" :key="i" class="article-tag">#{{ item }}</span>
          </td>
          <td>{{ item.title }}</td>
          <td :class="{ 'public' : item.isPublic }">{{ item.isPublic ? '公開' : '隱藏' }}</td>
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="deleteModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ArticleModal ref="articleModal" :article="tempArticle" @update-article="updateArticle" :isLoading="isLoading"/>
    <DeleteModal ref="deleteModal" :item="tempArticle" @delete-item="deleteArticle" />
    <PaginationComponents :pages="pagination" @change-page="getCoupons" />
    <Loading :active="isLoading"></Loading>
  </div>
</template>

<style lang="scss">

.article-list-table{
  .article-tag{
    margin-right: 5px;
    background-color: $subColor4;
    padding: 0 5px;
  }
  .public{
    color: $subColor5;
  }
}

</style>

<script>
import ArticleModal from '@/components/backstage/ArticleModal.vue'
import DeleteModal from '@/components/backstage/DeleteModal.vue'
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'

export default {
  components: {
    ArticleModal,
    DeleteModal,
    PaginationComponents
  },
  data () {
    return {
      articles: [],
      tempArticle: {},
      isNew: false,
      isLoading: false,
      pagination: {}
    }
  },
  methods: {
    getArticle (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.articles = res.data.articles
            this.pagination = res.data.pagination
          }
        })
        .catch((error) => {
          console.log('取得文章列表失敗', error)
        })
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (isNew) {
        this.tempArticle = {
          create_at: new Date().getTime() / 1000
        }
        this.$refs.articleModal.showModal()
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
        this.$http.get(api)
          .then((res) => {
            if (res.data.success) {
              this.tempArticle = JSON.parse(JSON.stringify(res.data.article))
              console.log(this.tempArticle)
              const tagsArray = this.tempArticle.tag.map(tag => `#${tag}`).join(' ') // 先將陣列轉回字串以便編輯
              this.tempArticle.tag = tagsArray
              this.$refs.articleModal.showModal()
            } else {
              console.log('取得文章失敗')
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    updateArticle (item) {
      const tagsArray = (item.tag?.match(/#[^\s#]+/g) ?? []).map(tag => tag.substring(1)) // 提取每个#後面的詞彙
      item.tag = tagsArray

      this.tempArticle = item
      this.isLoading = true

      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: item })
        .then((res) => {
          this.isLoading = false
          this.getArticle()
          this.$pushMessage(res, '更新')
        })
        .catch((error) => {
          console.log('更新文章失敗', error)
        })
      const articleModal = this.$refs.articleModal
      articleModal.hideModal()
    },
    deleteModal (item) {
      this.tempArticle = JSON.parse(JSON.stringify(item))

      const deleteModal = this.$refs.deleteModal
      deleteModal.showModal()
    },
    deleteArticle (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false
          this.getArticle()
          this.$pushMessage(res, '刪除')
        })
        .catch((error) => {
          console.log('刪除文章失敗', error)
        })
      this.$refs.deleteModal.hideModal()
    }
  },
  created () {
    this.getArticle()
  },
  mounted () {
    document.title = '文章管理-In My Light'
  }
}
</script>
