<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="articles-list-frame">
      <CurrentPath/>
      <div class="articles-list-title-box">
        <h2>CUSTOMIZED</h2>
        <h3>訂製專欄</h3>
        <img src="@/assets/images/icon/anvil.png">
      </div>
      <div class="articles-list-tab-box">
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
        </div>
        <div class="keywords-tab">
          <label for="key-input" class="keywords-tab-text-pc">關鍵字：</label>
          <div class="keywords-tab-search-box">
            <input type="text" id="key-input">
            <button type="button">搜尋</button>
          </div>
        </div>
      </div>
      <div class="articles-list-box">
        <h4>HANDLER NOTES</h4>
        <ul class="articles-list">
          <li v-for="item in articles" :key="item.id">
            <router-link class="articles-link">
              <img :src="item.imageUrl" alt="article-img">
              <p class="articles-author">{{ item.author }}</p>
              <p class="articles-create">{{ $filters.date(item.create_at) }}</p>
              <p class="articles-tag">{{ '#' + item.tag.join(' #') }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <PaginationComponents :pages="pagination" @change-page="getArticles"/>
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

export default {
  components: {
    PaginationComponents,
    CurrentPath
  },
  data () {
    return {
      articles: [],
      isLoading: false,
      pagination: {},
      isYearLabelBoxOpen: false
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
    },
    changeYearLabelBoxOpen () { // 開關年份選單
      this.isYearLabelBoxOpen = !this.isYearLabelBoxOpen
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
