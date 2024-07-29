<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="article-page-frame">
      <div class="article-information">
        <span class="article-create">{{ $filters.date(article.create_at) }}</span>
        <span v-for="item,i in article.tag" :key="i" class="article-tag">#{{ item }}</span>
      </div>
      <h2 class="article-title">{{ article.title }}</h2>
      <p class="article-description">{{ article.description }}</p>
      <div class="article-content"></div>
      <router-link to="/customized" class="back-to-articles-link"><span>返回文章列表</span></router-link>
    </div>
    <ToPageTop/>
  </div>
</template>

<style lang="scss">
.article-page-frame{
  width: 80%;
  margin: 0 auto;
  opacity: 0;
  animation: fadeIn .8s .5s forwards;
}

.article-information{
  margin: 30px 0 50px;
  display: flex;
  flex-wrap: wrap;

  .article-create{
    color: gray;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-right: 10px;
  }
  .article-tag{
    background-color: $subColor4;
    border-radius: 15px;
    font-size: 14px;
    color: $subColor9;
    padding: 2px 10px;
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
.article-title{
  font-size: 30px;
  font-weight: bold;
}
.article-description{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
}
.article-content{
  line-height: 2;
  margin-bottom: 100px;

  img{
    border-radius: 15px;
    margin-top: 10px;
  }
}
.back-to-articles-link{
  background: $linearColor;
  padding: 2px;
  border-radius: 30px;
  justify-content: center;
  display: flex;
  width: 150px;
  margin: 0 auto;
  margin-bottom: 100px;
  transition: all .3s;

  span{
    background-color: white;
    border-radius: 30px;
    padding: 15px 25px;
    color: rgb(75, 176, 184);
  }
  &:hover {
    opacity: 0.8;
    scale: 0.98;
  }
}
</style>

<script>
import ToPageTop from '@/components/user/ToPageTop.vue'
import emitter from '@/methods/emitter'

export default {
  components: {
    ToPageTop
  },
  data () {
    return {
      article: {},
      isLoading: false
    }
  },
  mixins: [emitter],
  methods: {
    getArticle () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.$route.params.articleid}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.article = res.data.article
            const content = document.querySelector('.article-content')
            content.innerHTML = this.article.content
            emitter.emit('pageName', this.article.title)
          } else {
            console.log('取得文章失敗', res.data.message)
          }
        })
        .catch((error) => {
          console.log('取得文章失敗', error)
        })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>
