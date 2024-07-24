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
        <div class="year-tab">
          <span>年份：</span>
          <label class="year-label">
            <input type="radio" value="all" name="year-group">
            <span>全部</span>
          </label>
          <label class="year-label">
            <input type="radio" value="2024" name="year-group">
            <span>2024年</span>
          </label>
          <label class="year-label">
            <input type="radio" value="2023" name="year-group">
            <span>2023年</span>
          </label>
          <label class="year-label">
            <input type="radio" value="2022" name="year-group">
            <span>2022年</span>
          </label>
        </div>
        <div class="keywords-tab">
          <label for="key-input">關鍵字：</label>
          <div class="keywords-tab-search-box">
            <input type="text" id="key-input">
            <button type="button">搜尋</button>
          </div>
        </div>
      </div>
      <div class="articles-list-box">
        <ul class="articles-list">
          <li v-for="item in articles" :key="item.id">
            <img :src="item.imageUrl" alt="article-img">
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
    <PaginationComponents :pages="pagination" @change-page="getArticles"/>
  </div>
</template>

<style lang="scss">
.articles-list-frame{
  margin-top: 150px;
}

// 條件搜尋列
.articles-list-title-box{
  width: 90%;
  margin: 0 auto;

  .current-path{
    justify-content: start;
  }
  h2{
    font-size: 60px;
  }
  h3{
    font-size: 20px;
    font-weight: bold;
  }
}
.articles-list-tab-box{
  margin: 100px auto;
  width: 90%;

  .year-tab,.keywords-tab{
    font-weight: bold;
    display: flex;
    align-items: center;

    >span,>label{
      margin-right: 30px;
    }
  }

  .year-label {
    position: relative;
    padding-left: 5px;
    margin-right: 30px;
    font-size: 18px;
    cursor: pointer;
  }
  .year-label input[type="radio"]{
    opacity: 0;

    &:checked{
      ~ span::before{
        opacity: 0;
      }
      ~ span::after{
        opacity: 1;
      }
    }
  }
  .year-label span::before{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid black;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    transition: opacity .5s;
  }
  .year-label span::after{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $linearColor;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity .5s;
  }

  .keywords-tab{
    .keywords-tab-search-box{
      display: flex;
      justify-content: space-between;
      width: 60%;
    }
    input[type="text"] {
      border: none;
      border-bottom: 1px solid black;
      transition: border-bottom .5s;
      outline: none;
      width: 70%;

      &:focus{
        border-bottom: 1px solid $subColor3;
      }
    }
    button{
      border: none;
      background: $linearColor;
      width: 200px;
      height: 30px;
      border-radius: 15px;
      font-size: 14px;
      transition: scale .5s;
      color: white;

      &:hover{
        scale: 1.1;
      }
    }
  }
}

//文章列
.articles-list-box{
  width: 90%;
  margin: 0 auto;
}
.articles-list{
  display: flex;
  flex-wrap: wrap;

  li{
    margin: 0 12px 24px;
    width: calc(33.3333% - 24px);
    max-height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
}

</style>

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
