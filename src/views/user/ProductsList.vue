<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="product-list-box">
      <div class="filter-select-box">
        <select class="filter-select" v-model="selectedOption">
          <option v-for="item in options" :key="item.text" :data-sort="item.sort"
                  :disabled="item.text === '價格排序'">
            {{ item.text }}
            </option>
        </select>
      </div>
      <ul class="product-list-ul toRight-1">
        <li v-for="(item, i) in showProducts" :key="item.id"
                :class="[ i === 0 ? 'big-size-li' : '',
                          i === showProducts.length-1 && showProducts.length > 9 ? 'big-size-li' : '']">
          <div class="product-content" @click="openMore(item)">
            <img :src="item.imageUrl" alt="" class="thumbnail">
            <p>{{ item.title }}</p>
            <p>
              <span class="origin_price">NT${{ $filters.currency(item.origin_price) }}</span>
              <span class="price">NT${{ $filters.currency(item.price) }}</span>
            </p>
          </div>
          <button class="btn btn-outline-danger cart-plus-btn"
              @click="addCart(item.id)"
                  :disabled="this.status.loadingItem === item.id">
                  <div class="spinner-border text-danger spinner-border-sm" role="status"
                      v-if="this.status.loadingItem === item.id"></div>
                      <i class="bi bi-cart-plus cart-plus-i" v-else></i></button>
          <button class="follow-plus-btn"
                  @click="addFollow(item)">
                      <i class="bi bi-heart" v-if="!isFollowed(item)"></i>
                      <i class="bi bi-heart-fill" v-else></i>
                      </button>
        </li>
      </ul>
    </div>
    <PaginationComponents :pages="pagination" @change-page="getPagination" v-if="showProducts.length !== 0"></PaginationComponents>
    <p class="totle-item-num">共{{ this.nowProductsTotle }}項產品</p>
  </div>
</template>

<style lang="scss">
.product-list-box{
    margin-top: 250px;
    animation: fadeIn 1s;

    .filter-select-box{
      display: flex;
      justify-content: end;
      width: 90%;
      margin: 50px 0;

      .filter-select{
        height: 60px;
        border-radius: 50px;
        padding: 0 66px 0 50px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url('@/assets/images/icon/211614_down_b_arrow_icon.png');
        background-repeat: no-repeat;
        background-position: 120px 20px;
        background-size: 16px;
      }
    }

    .product-list-ul{
      display: flex;
      flex-wrap: wrap;
      width: 920px;
      justify-content: start;
      margin: 0 auto;

      li{
        max-width: 440px;
        margin: 0 5px;
        margin-bottom: 30px;

        .product-content{
          cursor: pointer;

          p{
            font-size: 15px;
            width: 220px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .thumbnail{
          width: 220px;
          height: 400px;
          object-fit: cover;
        }
        .cart-plus-btn,.follow-plus-btn{
          padding: 0;
          width: 30px;
          height: 30px;

          .cart-plus-i{
            font-size: 20px;
          }
        }

        &:hover .thumbnail{
          animation: flash 0.2s ease-out;
        }
      }
      .big-size-li{

        .thumbnail{
          width: 440px;
          height: 400px;
        }
      }
    }
  }
@media (max-width:919px){
  .product-list-box{
    margin: 0 auto;

    .filter-select-box{
      justify-content: center;
      width: 100%;
    }

    .product-list-ul{
      width: 90%;
      flex-direction: column;
      align-items: center;

      li{

        .thumbnail{
          width: 440px;
          height: 400px;
          object-fit: cover;
        }
      }
    }
  }
  }

.totle-item-num{
  text-align: center;
  margin-bottom: 50px;
}
</style>

<script>
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'
import emitter from '@/methods/emitter'
import follow from '@/mixins/followMixin'

export default {
  components: {
    PaginationComponents
  },
  data () {
    return {
      products: [],
      product: {},
      searchContent: '',
      pagination: {
        current_page: 1,
        has_next: '',
        has_pre: '',
        total_pages: 0
      },
      perpage: 10, // 每頁顯示筆數
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項ID 製作讀取效果
      },
      options: [ // 價格排序選項
        {
          text: '價格排序',
          sort: ''
        },
        {
          text: '由低至高',
          sort: 'up'
        },
        {
          text: '由高至低',
          sort: 'down'
        }
      ],
      selectedOption: '價格排序' // 選擇中的排序選項
    }
  },
  watch: {
    '$route.params.category' () {
      this.getProducts()
    },
    showProducts () { // 控制頁數
      if (this.searchContent) {
        const includesList = this.products.filter(item => item.title.includes(this.searchContent))
        this.pagination.total_pages = Math.ceil(includesList.length / this.perpage)
      } else {
        this.pagination.total_pages = Math.ceil(this.products.length / this.perpage)
      }
      this.selectedOption = '價格排序'
    },
    selectedOption (newV) { // 控制價格排序
      const nowOption = this.options.find(option => option.text === newV)
      if (nowOption.sort === 'up') {
        this.products.sort((a, b) => a.price - b.price) // (低至高)
      } else if (nowOption.sort === 'down') {
        this.products.sort((a, b) => b.price - a.price) // (高至低)
      }
    }
  },
  computed: {
    showProducts () {
      const minData = (this.pagination.current_page * this.perpage) - this.perpage + 1 // 每頁第一筆
      const maxData = (this.pagination.current_page * this.perpage) // 每頁最後一筆
      if (!this.searchContent) {
        return this.products.filter((item, i) => i + 1 >= minData && i + 1 <= maxData)
      } else if (this.searchContent) {
        const includesList = this.products.filter(item => item.title.includes(this.searchContent))
        return includesList.filter((item, i) => i + 1 >= minData && i + 1 <= maxData)
      }
      return []
    },
    nowProductsTotle () { // 篩選後商品數
      if (!this.searchContent) {
        return this.products.length
      } else if (this.searchContent) {
        const includesList = this.products.filter(item => item.title.includes(this.searchContent))
        return includesList.length
      }
      return 0
    }
  },
  mixins: [emitter, follow],
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) { // 篩選產品分類
            if (!this.$route.params.category) { // 不分類
              this.products = res.data.products
            } else if (this.$route.params.category === '正在關注') {
              this.products = this.followProducts
            } else if (res.data.products.some(item => item.category.includes(this.$route.params.category))) { // 風格
              const categoryList = res.data.products.filter(item => item.category.includes(this.$route.params.category))
              this.products = categoryList
            } else { // 種類
              const categoryList = res.data.products.filter(item => item.title.includes(this.$route.params.category))
              this.products = categoryList
            }
            this.getTotlePage()
            this.getPagination()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getTotlePage () {
      this.pagination.total_pages = Math.ceil(this.products.length / this.perpage)
    },
    getPagination (page = 1) {
      this.pagination.current_page = page
      this.pagination.has_next = this.pagination.current_page < this.pagination.total_pages
      this.pagination.has_pre = this.pagination.current_page > 1
    },
    openMore (item) {
      this.$emit('openMore', item)
      this.$emit('addRecentlyViewed', item)
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      this.$http.post(api, { data: { product_id: id, qty: 1 } })
        .then((res) => {
          if (res.data.success) {
            this.$emit('getCart')
            this.status.loadingItem = ''
          } else {
            console.log('加到購物車失敗', res.data.message)
          }
        })
        .catch((error) => {
          console.log('加到購物車失敗', error)
        })
    },
    searchKey (key) {
      this.getPagination() // 先換回第一頁 在進行篩選 避免篩選解果只有一頁導致顯示錯誤
      this.searchContent = key
    }
  },
  created () {
    this.getProducts()
    this.searchContent = this.$route.query.searchContent // 接收全類搜尋結果
  },
  mounted () {
    emitter.on('search', this.searchKey) // 接收分類搜尋結果
  }
}
</script>