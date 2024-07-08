<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="product-content-frame">
      <div class="img-box">
        <img :src="product.imageUrl" alt="" class="main-img">
      </div>
      <div class="content-title-box">
        <a href="#" @click.prevent="$emit('toCategory', product.category)" class="category-link">{{ product.category }}</a>
        <h2 class="product-name">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
      </div>
      <div class="content-center-box">
        <div class="price-box">
          <span class="price">NT${{ product.price }}</span>
          <span class="origin_price">NT${{ product.origin_price }}</span>
        </div>
         <button class="cart-plus-btn"
              @click="addCart(product.id)"
              :disabled="status.loadingItem">
              <div class="spinner-border text-danger spinner-border-sm" role="status"
              v-if="status.loadingItem"></div>
              加到購物車</button>
      </div>
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

  .content-title-box{
    padding-bottom: 25px;
    border-bottom: 1px solid rgb(197, 197, 197);

    .category-link{
      color: black;

      &:hover{
        opacity: 0.8;
      }
    }
    .product-name{
      padding: 0;
    }
  }
  .content-center-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;

    .price-box{
      .price{
        margin-right: 5px;
        font-size: 36px;
      }
    }
    .cart-plus-btn{
      background-color: black;
      color: white;
      border: 1px solid black;
      border-radius: 50px;
      height: 60px;
      padding: 0 30px;
    }
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
