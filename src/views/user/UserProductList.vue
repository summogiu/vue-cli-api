<template>
  <Loading :active="isLoading"></Loading>
  <UserCart :cart="carts" :cartData="cartsData" @delete-one="deleteOne"></UserCart>
  <table class="productTable mt-4">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>售價</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item) in products" :key="item.id">
        <td><img :src="item.imageUrl" alt="" class="thumbnail"></td>
        <td><p>{{ item.title }}</p></td>
        <td class="price-box">
          <p class="origin_price">NT${{ $filters.currency(item.origin_price) }}</p>
          <p class="price">NT${{ $filters.currency(item.price) }}</p>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
                    @click="openMore(item.id)"
                    >查看更多</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="addCart(item.id)"
                    :disabled="this.status.loadingItem === item.id">
                    <div class="spinner-border text-danger spinner-border-sm" role="status"
                    v-if="this.status.loadingItem === item.id"></div>
                    加到購物車</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagenation :pages="pagination" @change-page="getProducts"></Pagenation>
</template>

<script>
import Pagenation from '@/components/user/ProductListPagination.vue'
import UserCart from '@/components/user/UserCart.vue'

export default {
  components: {
    Pagenation,
    UserCart
  },
  data () {
    return {
      products: [],
      product: {},
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項ID 製作讀取效果
      },
      carts: [],
      cartsData: {
        finalTotal: 0
      }
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openMore (id) {
      this.$router.push(`product/${id}`)
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      this.$http.post(api, { data: { product_id: id, qty: 1 } })
        .then((res) => {
          if (res.data.success) {
            console.log('加到購物車', res.data)
            this.getCart()
            this.status.loadingItem = ''
          } else {
            console.log('加到購物車', res.data.message)
          }
        })
        .catch((error) => {
          console.log('加到購物車', error)
        })
    },
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data.carts
          this.cartsData.finalTotal = res.data.data.final_total
          console.log('取得列表', res.data.data)
        })
        .catch((error) => {
          console.log('取得列表', error)
        })
    },
    deleteOne (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            this.getCart()
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log('取得列表', error)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
