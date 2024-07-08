<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="product-list-box">
          <ul class="product-list-ul toRight-1">
            <li v-for="(item, i) in showProducts" :key="item.id"
                    :class="{ 'big-size-li' : i === 0 || i === showProducts.length-1 }">
              <div class="product-content" @click="openMore(item.id)">
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
              <button class="btn follow-plus-btn"
                      @click="addFollow(item)">
                          <i class="bi bi-heart" v-if="!isFollowed(item)"></i>
                          <i class="bi bi-heart-fill" v-else></i>
                          </button>
            </li>
          </ul>
        </div>
        <PaginationComponents :pages="pagination" @change-page="getPagination"></PaginationComponents>
        <p class="totle-item-num">共{{ this.nowProductsTotle }}項產品</p>
  </div>
</template>

<style lang="scss">
.product-list-box{
    margin-top: 200px;
    animation: fadeIn 1s;

    .product-list-ul{
      display: flex;
      flex-wrap: wrap;
      width: 920px;
      justify-content: space-around;
      margin: 0 auto;

      li{
        width: 200px;
        margin-bottom: 30px;

        .product-content{
          cursor: pointer;
        }
        .thumbnail{
          width: 200px;
          height: 200px;
        }
        .cart-plus-btn,.follow-plus-btn{
          padding: 0;
          width: 30px;
          height: 30px;

          .cart-plus-i{
            font-size: 20px;
          }
        }
        .follow-plus-btn{
          border: none;
          color: rgb(209, 83, 104);
          background-color: transparent;

          i{
            font-size: 20px;
          }
        }

        &:hover .thumbnail{
          animation: flash 0.2s ease-out;
        }
      }
      .big-size-li{
        width: 400px;

        .thumbnail{
          width: 400px;
          height: 400px;
        }
      }
    }
  }
@media (max-width:919px){
  .product-list-box{
    margin: 0 auto;

    .product-list-ul{
      width: 90%;

      li{
        width: 400px;

        .thumbnail{
          width: 400px;
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

export default {
  components: {
    PaginationComponents
  },
  data () {
    return {
      products: [],
      product: {},
      followProducts: [],
      searchContent: '',
      pagination: {
        current_page: 1,
        has_next: '',
        has_pre: '',
        total_pages: 0
      },
      perpage: 10,
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項ID 製作讀取效果
      }
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
    }
  },
  computed: {
    showProducts () {
      const minData = (this.pagination.current_page * this.perpage) - this.perpage + 1
      const maxData = (this.pagination.current_page * this.perpage)
      if (!this.searchContent) {
        return this.products.filter((item, i) => i + 1 >= minData && i + 1 <= maxData)
      } else if (this.searchContent) {
        const includesList = this.products.filter(item => item.title.includes(this.searchContent))
        return includesList.filter((item, i) => i + 1 >= minData && i + 1 <= maxData)
      }
      return []
    },
    nowProductsTotle () {
      if (!this.searchContent) {
        return this.products.length
      } else if (this.searchContent) {
        const includesList = this.products.filter(item => item.title.includes(this.searchContent))
        return includesList.length
      }
      return 0
    }
  },
  mixins: [emitter],
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
    openMore (id) {
      this.$router.push(`/products/productslist/product/${id}`)
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
    },
    addFollow (item) { // 增加、移除關注
      const index = this.followProducts.findIndex(followedItem => followedItem.id === item.id)
      console.log('index', index)
      if (index !== -1) {
        console.log('相同id', item.id === this.followProducts[index].id)
        this.followProducts.splice(index, 1)
      } else {
        this.followProducts.push(item)
        console.log('不同id，已加入')
      }
      localStorage.setItem('followArray', JSON.stringify(this.followProducts))
    },
    isFollowed (item) { // 判斷是否為關注狀態
      return this.followProducts.some(followedItem => followedItem.id === item.id)
    }
  },
  created () {
    this.getProducts()
    this.searchContent = this.$route.query.searchContent // 接收全類搜尋結果
    this.followProducts = JSON.parse(localStorage.getItem('followArray')) || []
  },
  mounted () {
    emitter.on('search', this.searchKey) // 接收分類搜尋結果
  }
}
</script>
