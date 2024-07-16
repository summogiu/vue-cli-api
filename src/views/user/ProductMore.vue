<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="product-content-frame">
      <div class="img-box">
        <transition name="fadeScale">
          <img :src="focusImg" alt="main-img" class="main-img" :key="focusImg">
        </transition>
        <div class="img-list">
          <img v-for="(item,i) in imgs" :key="item" :src="item" :alt="`img${i}`"
                  @click="changeImg(item)" :class="{ 'focus-img' : focusImg === item}">
        </div>
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
        <div class="cart-plus-box">
          <div class="cart-plus-qty-box">
            <button class="qty-btn sub-btn" @click="changeQty(-1)">－</button>
            <input type="number" class="cart-plus-qty" v-model="addQty">
            <button class="qty-btn add-btn" @click="changeQty(1)">＋</button>
          </div>
          <button class="cart-plus-btn"
              @click="addCart(product.id)"
              :disabled="status.loadingItem">
              <div class="spinner-border text-danger spinner-border-sm" role="status"
              v-if="status.loadingItem"></div>
              加到購物車</button>
        </div>
      </div>
      <div class="other-box">
        <div class="follow-plus-box">
          <button class="btn follow-plus-btn"
                      @click="addFollow(product)">
                          <i class="bi bi-heart" v-if="!isFollowed(product)"></i>
                          <i class="bi bi-heart-fill isFollow-icon" v-else></i>
                          <p>添加到關注</p>
                          </button>
        </div>
        <div class="provision-box">
          <a href="#">退貨條款</a>
          <a href="#">特定商業交易法</a>
        </div>
      </div>
      <div class="text-content-box" ref="textContent"></div>
      <div class="related-products-box" v-if="filterProducts.length !== 0">
        <h3>相關產品</h3>
        <ul class="related-products-list">
          <li v-for="item in filterProducts.slice(0, 5)" :key="item.id"
                  @click="toProducts(item)">
            <div class="left">
              <img :src="item.imageUrl" :alt="item.title" class="related-products-thumbnail">
              <h4>{{ item.title }}</h4>
            </div>
            <img src="@/assets/images/icon/related-products-to.png" alt="to-related-products" class="to-icon">
          </li>
        </ul>
      </div>
      <div class="ask-box">
        <a href="#" class="ask-link">
          <i class="bi bi-envelope"></i>
          <p>詢問此產品</p>
        </a>
      </div>
      <div class="back-produsts-list">
        <button type="button" @click="backProductList">
          <p>繼續購買</p>
          <img src="@/assets/images/icon/related-products-to.png" alt="to-related-products" class="to-icon">
        </button>
      </div>
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
    position: relative;
    height: 500px;

    .main-img{
      height: 500px;
      object-fit: cover;
      position: absolute;
    }

    .img-list{
      position: absolute;
      bottom: -40px;

      img{
        width: 60px;
        height: 60px;
        border: 2px solid white;
        margin-right: 10px;
        cursor: pointer;
      }
      .focus-img{
        border: 2px solid black;
      }
    }
  }

  .content-title-box{
    padding-bottom: 25px;
    border-bottom: 1px solid $subColor4;

    .category-link{
      color: black;
      padding-bottom: 1px;
      border-bottom: 1px solid black;

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
    .cart-plus-box{
      display: flex;
      align-items: center;

      .cart-plus-qty,.cart-plus-btn,.qty-btn{
        height: 60px;
      }
      .cart-plus-qty-box{
        display: flex;
        align-items: center;
        border: 1px solid $subColor4;
        border-radius: 50px;
        margin-right: 16px;

        .cart-plus-qty{
          font-size: 24px;
          text-align: center;
          width: 48px;
          border: none;
          outline: none;
        }
        .cart-plus-qty::-webkit-outer-spin-button,
        .cart-plus-qty::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
        .qty-btn{
          background-color: transparent;
          font-size: 36px;
          border: none;

          &:hover{
            animation: flash 0.3s linear;
          }
        }
      }

      .cart-plus-btn{
        background-color: black;
        color: white;
        border: 1px solid black;
        border-radius: 50px;
        padding: 0 30px;

        &:hover{
            animation: flash 0.3s linear;
          }
      }
    }
  }
  .other-box{
    display: flex;
    justify-content: space-between;
    line-height: 2;

    .follow-plus-box{

      .follow-plus-btn{
          border: none;
          color: black;
          background-color: transparent;
          display: flex;
          align-items: center;
          padding: 0;

          i{
            font-size: 20px;
            margin-right: 5px;
          }
          p{
            font-weight: bold;
          }
          .isFollow-icon{
            color: rgb(209, 83, 104);
          }
        }
    }
    .provision-box{
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      a{
        color: black;
        font-weight: bold;

        &:hover{
          opacity: 0.8;
        }
      }
    }
  }
  .text-content-box{
    margin: 50px 0;
  }
  .related-products-box{
    margin: 50px 0;
    h3{
      text-align: center;
      font-weight: bold;
    }
    .related-products-list{
      max-width: 800px;
      margin: 0 auto;
      li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        border-top: 1px solid $subColor4;
        padding-top: 20px;
        font-weight: bold;
        cursor: pointer;

        .left{
          display: flex;
          align-items: center;

          .related-products-thumbnail{
            height: 50px;
            width: 50px;
            margin-right: 20px;
          }
        }

        &:hover{
          animation: flash 0.3s ease-out;
        }
      }
    }
  }
  .ask-box{

    .ask-link{
      margin: 0 auto;
      display: flex;
      align-items: center;
      width: 150px;
      font-size: 20px;
      color: black;

      i{
        margin-right: 5px;
        font-size: 24px;
      }
      &:hover{
        animation: flash 0.3s;
      }
    }
  }
  .back-produsts-list{
    button{
      height: 60px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      padding: 30px;
      border: 1px solid $subColor4;
      background-color: white;
      margin: 30px auto;

      a{
        margin-right: 20px;
        color: black;
      }
      &:hover{
        animation: flash 0.3s;
        .to-icon{
          animation: BounceToRight 0.3s;
        }
      }
    }
  }
  .to-icon{
    width: 30px;
    height: 30px;
  }
}
@media (max-width:919px){
  .product-content-frame{
    margin: 0 auto 100px auto;
    width: 90%;

    .content-title-box{
      h2{
        white-space: pre-wrap;
        font-size: 24px;
      }
    }
    .content-center-box{
      flex-direction: column;
      align-items: start;

      .cart-plus-box{
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 20px 0;

        .cart-plus-qty-box{
          width: 100%;
          margin-right: 0;
          margin-bottom: 20px;

          .cart-plus-qty{
            width: 100%;
          }
        }
        .cart-plus-btn{
          width: 100%;
        }
      }
    }
    .text-content-box{
      p{
        text-align: center;
      }
    }
    .back-produsts-list{
      button{
        width: 100%;
        justify-content: center;
      }
    }
  }
}
@media (max-width:414px){
  .product-content-frame{
    .img-box{
      position: absolute;
      left: 0;
      top: 200px;
      height: 300px;
      width: 100%;
      margin-bottom: 50px;

      .main-img{
        height: 300px;
        width: 100%;
        object-position: center center;
        object-fit: cover;
      }
    }
    .content-title-box{
      margin-top: 400px;
      p{
        display: none;
      }
    }
  }
}
</style>

<script>
import follow from '@/mixins/followMixin'

export default {
  data () {
    return {
      product: {},
      isLoading: false,
      status: {
        loadingItem: false
      },
      imgs: [],
      focusImg: '',
      addQty: 1,
      filterProducts: []
    }
  },
  watch: {
    addQty () {
      if (this.addQty < 1) {
        this.addQty = 1
      }
    },
    '$route.params.productid' () {
      this.getProduct()
      // this.$route.name = this.product.title
      // console.log('從內頁切換觸發', this.$route.name)
    }
  },
  mixins: [follow],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.productid}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          window.scrollTo(0, 0)
          if (res.data.success) {
            this.isLoading = false
            this.product = res.data.product

            this.focusImg = this.product.imageUrl // 預設主圖
            this.imgs = this.product.imagesUrl ? this.product.imagesUrl : [] // 圖片列表
            this.imgs.unshift(this.product.imageUrl)

            // 將連貫的文字分段重組
            const container = this.$refs.textContent // 選取容器
            container.innerHTML = '' // 先清空容器內容 以免不同頁疊加
            const productContent = this.product.content
            const paragraphs = productContent.split(' ') // 按空格切段

            paragraphs.forEach(item => {
              const pElement = document.createElement('p') // 建立p標籤
              pElement.textContent = item.trim() // 改變p標籤內容
              container.appendChild(pElement) // 在容器內新增p標籤
            })

            this.getrelatedProducts()
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
      this.$http.post(api, { data: { product_id: id, qty: this.addQty } })
        .then((res) => {
          if (res.data.success) {
            this.$emit('getCart')
            this.status.loadingItem = false
            this.addQty = 1
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    changeQty (formula) { // 增減加到購物車的數量
      this.addQty += formula
    },
    changeImg (url) {
      this.focusImg = url
    },
    getrelatedProducts () { // 取得同類商品
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then((res) => {
          const products = res.data.products
          this.filterProducts = products.filter(item => item.category === this.product.category)

          const index = this.filterProducts.findIndex(filterItem => filterItem.id === this.product.id)
          if (index !== -1) {
            this.filterProducts.splice(index, 1)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    toProducts (item) {
      this.$router.push(`/products/productslist/product/${item.id}`)
      this.$emit('addRecentlyViewed', item)
    },
    backProductList () {
      this.$router.push('/products/productslist')
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
