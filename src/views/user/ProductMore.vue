<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="product-content-frame">
      <div class="img-box">
        <img :src="product.imageUrl" alt="" class="main-img">
      </div>
      <a @click.prevent="$emit('toCategory', product.category)">{{ product.category }}</a>
      <h2>{{ product.title }}</h2>
      <button class="btn btn-outline-danger btn-sm"
              @click="addCart(product.id)"
              :disabled="status.loadingItem">
              <div class="spinner-border text-danger spinner-border-sm" role="status"
              v-if="status.loadingItem"></div>
              加到購物車</button><br>
      <p>{{ product.description }}</p>
      <span class="origin_price">原價：NT${{ product.origin_price }}</span>
      <span class="price">售價：NT${{ product.price }}</span>
      <img v-for="item in product.imagesUrl" :key="item" :src="item"
              alt="" class="thumbnail">
      <p>{{ product.content }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.product-content-frame{
  margin: 0 100px;
  margin-top: 200px;

  .img-box{
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
}
</style>

<script>
export default {
  data () {
    return {
      product: {},
      isLoading: false,
      status: {
        loadingItem: false
      }
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.productid}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.product = res.data.product
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = true
      this.$http.post(api, { data: { product_id: id, qty: 1 } })
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = false
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
