<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="articles-list-frame">
      <CurrentPath/>
      <div class="articles-list-content-box" v-if="!isArticleMore">
        <div class="articles-list-title-box">
          <h2>CUSTOMIZED</h2>
          <h3>訂製專欄</h3>
          <img src="@/assets/images/icon/anvil.png">
        </div>
        <div class="articles-list-tab-box" ref="articlesListBox">
          <div class="year-tab">
            <span class="year-tab-text-pc">年份：</span>
            <button type="button" class="year-tab-btn-mb" @click="changeYearLabelBoxOpen">
              <span>選擇年份</span>
              <transition name="clockwise">
                <span v-if="!isYearLabelBoxOpen" class="expand-icon"><i class="bi bi-plus"></i></span>
                <span v-else class="expand-icon"><i class="bi bi-dash"></i></span>
              </transition>
            </button>
            <div class="year-label-box" :class="[isYearLabelBoxOpen ? 'open' : '']">
              <label class="year-label">
                <input type="radio" value="" name="year-group" v-model="selectedYearTab">
                <span>全部</span>
              </label>
              <label class="year-label">
                <input type="radio" value="2024" name="year-group" v-model="selectedYearTab">
                <span>2024年</span>
              </label>
              <label class="year-label">
                <input type="radio" value="2023" name="year-group" v-model="selectedYearTab">
                <span>2023年</span>
              </label>
              <label class="year-label">
                <input type="radio" value="2022" name="year-group" v-model="selectedYearTab">
                <span>2022年</span>
              </label>
            </div>
          </div>
          <div class="keywords-tab">
            <label for="key-input" class="keywords-tab-text-pc">關鍵字：</label>
            <div class="keywords-tab-search-box">
              <input type="text" id="key-input" ref="keywordInput">
              <button type="button" @click="searchKeyword">搜尋</button>
            </div>
          </div>
        </div>
        <div class="articles-list-box">
          <h4>HANDLER NOTES</h4>
          <div class="search-tip">
            <span v-if="selectedYearTab">{{ `"${selectedYearTab}"` }}</span>
            <span v-if="selectedYearTab && keywordContent">,</span>
            <span v-if="keywordContent">{{ `"${ keywordContent}"` }}</span>
            <span v-if="selectedYearTab || keywordContent">{{ '的搜尋結果：' + showArticles.length + '篇文章' }}</span>
          </div>
          <ul class="articles-list">
            <li v-for="item in showArticles" :key="item.id">
              <router-link class="articles-link" :to="`/customized/article/${item.id}`">
                <img :src="item.imageUrl" alt="article-img">
                <p class="articles-author">{{ item.author }}</p>
                <p class="articles-create">{{ item.create_at }}</p>
                <p class="articles-tag">{{ '#' + item.tag.join(' #') }}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ToPageTop :class="[isBackToTopBtnShow ? 'fadeIn' : '']" />
    <PaginationComponents :pages="pagination" @change-page="getArticles" v-if="!isArticleMore"/>
    <router-view v-if="isArticleMore"></router-view>
  </div>
</template>

<style lang="scss">
.articles-list-frame{
  margin-top: 100px;
  opacity: 0;
  animation: fadeIn .8s .5s forwards;

  .current-path{
    justify-content: start;
    padding: 10px 5% 50px;
  }
}
@media (max-width:919px){
  .articles-list-frame{
    margin-top: 50px;
  }
}

// 標題列
.articles-list-title-box{
  width: 90%;
  margin: 0 auto;
  background: $linearColor2;
  padding: 50px;
  border-radius: 30px;
  color: white;
  position: relative;

  h2{
    font-size: 60px;
    font-weight: bold;
  }
  h3{
    font-size: 20px;
    font-weight: bold;
  }
  img{
    position: absolute;
    right: 10px;
    bottom: -50px;
    width: 300px;
    rotate: (-5deg);
  }
}
@media (max-width:919px){
  .articles-list-title-box{
    padding: 50px 5% 80px;

    h2{
      font-size: 40px;
    }
    img{
      width: 150px;
      bottom: -20px;
      right: 0;
    }
  }
}

// 條件搜尋列
.articles-list-tab-box{
  margin: 100px auto;
  width: 90%;

  .year-tab,.keywords-tab{
    font-weight: bold;
    display: flex;
    align-items: center;

    .year-tab-text-pc,.year-label,.keywords-tab-text-pc{
      white-space: nowrap;
    }
    .year-tab-text-pc{
      margin-right: 30px;
    }
    .keywords-tab-text-pc{
      margin-right: 15px;
    }

    .year-tab-btn-mb{
      width: 100%;
      display: none;
      padding: 10px 5px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $subColor4;
    }
  }

  .year-label-box{
    .year-label {
      position: relative;
      padding-left: 5px;
      margin-right: 30px;
      font-size: 20px;
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
      transition: opacity .2s;
    }
  }

  .keywords-tab{
    .keywords-tab-search-box{
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    input[type="text"] {
      border: none;
      border-bottom: 1px solid black;
      transition: border-bottom .2s;
      outline: none;
      width: 70%;
      margin-right: 10px;

      &:focus{
        border-bottom: 1px solid $subColor3;
      }
    }
    button{
      border: none;
      background: $linearColor;
      width: 40%;
      max-width: 300px;
      height: 40px;
      border-radius: 20px;
      font-size: 14px;
      transition: scale .5s;
      color: white;

      &:hover{
        scale: 1.1;
      }
    }
  }
}
@media (max-width:919px){
  .articles-list-tab-box{
    .year-tab,.keywords-tab{
      flex-direction: column;
      align-items: flex-start;

      .year-tab-text-pc{
        display: none;
      }
      .year-tab-btn-mb{
        display: flex;
        position: relative;

        .expand-icon{
          position: absolute;
          top: 15px;
          right: 5px;
          line-height: 1;
          height: 16px;
        }
      }
      .year-label-box{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-height: 0;
        transition: max-height 0.3s;
        overflow: hidden;

        .year-label{
          padding: 10px 0;
          width: 50%;
          margin: 0;
        }
      }
      .year-label-box.open{
        max-height: 100px;
      }

      .keywords-tab-text-pc{
        font-weight: normal;
        padding: 10px 5px 5px;
      }
      .keywords-tab-search-box{
        flex-direction: column;

        input[type="text"] {
          width: 100%;
        }
        button{
          min-width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
}

//文章列
.articles-list-box{
  width: 90%;
  margin: 200px auto 0;
  position: relative;

  &::before{
    content: '';
    height: 3px;
    width: 30%;
    background: $linearColor3;
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
  h4{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 40px;
    position: absolute;
    top: -140px;
    left: 50%;
    transform: translateX(-50%);
  }

  .search-tip{
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
}
.articles-list{
  display: flex;
  flex-wrap: wrap;

  li{
    margin: 0 12px 24px;
    width: calc(25% - 24px);
    max-height: 740px;
    border: 1px solid $subColor4;

    .articles-link{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: start;
      color: black;

      &::before{
        content: '';
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
      p{
        text-align: center;
        z-index: 10;
      }
      .articles-author,.articles-create{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .articles-author{
        font-weight: bold;
        margin: 10px auto;
        bottom: 70px;
      }
      .articles-create{
        bottom: 50px;
        white-space: nowrap;
      }
      .articles-tag{
        font-size: 14px;
        color: gray;
        margin: 30px 0 20px;
        font-weight: bold;
      }
      &:hover{
        animation: flash .2s ease-in;
      }
    }
  }
}
@media (max-width:919px){
  .articles-list-box{
    h4{
      font-size: 20px;
      top: -120px;
      white-space: nowrap;
    }
  }
  .articles-list{
    li{
      width: calc(50% - 24px);

      .articles-link{
        &::before{
          width: 70px;
          height: 70px;
        }
        .articles-author,.articles-create{
          margin: 5px 0 0;
        }
        .articles-author{
          bottom: 50px;
        }
        .articles-create{
          bottom: 30px;
        }
        .articles-tag{
          margin-bottom: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

</style>

<script>
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'
import ToPageTop from '@/components/user/ToPageTop.vue'
import scrollPosMixin from '@/mixins/scrollPosMixin'

export default {
  components: {
    PaginationComponents,
    CurrentPath,
    ToPageTop
  },
  data () {
    return {
      articles: [],
      isLoading: false,
      pagination: {},
      isYearLabelBoxOpen: false,
      selectedYearTab: '',
      keywordContent: '',
      sectionTops: {
        articlesListBoxTops: 0
      }
    }
  },
  computed: {
    showArticles () {
      // 轉換日期格式
      const copyList = JSON.parse(JSON.stringify(this.articles))
      copyList.forEach(item => {
        const date = new Date(item.create_at * 1000).toISOString().split('T')
        item.create_at = date[0]
      })
      // 篩選
      if (this.selectedYearTab || this.keywordContent) {
        window.scrollTo(0, this.sectionTops.articlesListBoxTops)
        const filterList = copyList.filter(item => item.create_at.includes(this.selectedYearTab)) // 年份
        return filterList.filter(item => {
          return item.title.includes(this.keywordContent) || item.tag.join('').includes(this.keywordContent) // 關鍵字
        })
      }
      return copyList
    },
    isBackToTopBtnShow () {
      return this.scrollPosition >= 500 / 1.5 || false
    },
    isArticleMore () { // 判斷是否開啟文章內容
      if (this.$route.params.articleid) {
        return true
      }
      return false
    }
  },
  mixins: [scrollPosMixin],
  methods: {
    getArticles (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.articles = res.data.articles
            this.pagination = res.data.pagination
          } else {
            console.log(res.data)
          }
        })
        .catch((error) => {
          console.log('取得文章列表失敗', error)
        })
    },
    changeYearLabelBoxOpen () { // 開關年份選單
      this.isYearLabelBoxOpen = !this.isYearLabelBoxOpen
    },
    searchKeyword () {
      if (!this.$refs.keywordInput.value) { // 沒有輸入內容就按下搜尋 回到全部結果
        this.selectedYearTab = ''
      }
      this.keywordContent = this.$refs.keywordInput.value
      this.$refs.keywordInput.value = ''
    },
    getSectionTops () {
      if (this.$refs.articlesListBox) {
        this.sectionTops.articlesListBoxTops = this.$refs.articlesListBox.getBoundingClientRect().top + window.pageYOffset
      }
    }
  },
  created () {
    this.getArticles()
  },
  mounted () {
    this.getSectionTops()
  }
}
</script>
