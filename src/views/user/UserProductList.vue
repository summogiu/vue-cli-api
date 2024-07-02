<template>
  <div>
    <div class="productList-frame">
      <Loading :active="isLoading"></Loading>
      <div class="productList-header toDown-1"
              :class="[ scrollPosition > 0 ? 'productList-header-close' : '',
              isHeaderSlide ? 'productList-header-slide' : '' ]"
              ref="productListHeader">
        <ul class="productList-header-nav">
          <li>
            <button type="button" class="tab-bottom PC-btn"
                    @mouseover="changeSearchTabOpen"
                    :class="[ isSearchTabOpen ? 'tab-bottom-active' : '' ]">
                    關鍵字搜尋</button>
            <button type="button" class="tab-bottom MB-btn"
                    @click="changeSearchTabOpen"
                    :class="[ isSearchTabOpen ? 'tab-bottom-active' : '' ]">
                    關鍵字搜尋</button>
            <div class="pullDown-frame"
                    :class="[ isSearchTabOpen ? 'pullDown-frame-100' : '' ]">
              <div class="tab-bottom-pullDown-box"
                   :class="[ isSearchTabOpen ? 'tab-bottom-pullDown-box-open' : '' ]"
                   @mouseleave="changeSearchTabOpen">
                <div class="tab-bottom-pullDown-SearchTab">
                  <input type="text" placeholder="請輸入內容" class="search-input">
                  <button type="button" class="search-btn"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <button type="button" class="tab-bottom PC-btn"
                    @mouseover="changeStyleTabOpen"
                    :class="[ isStyleTabOpen ? 'tab-bottom-active' : '' ]">
                    依風格搜尋</button>
            <button type="button" class="tab-bottom MB-btn"
                    @click="changeStyleTabOpen"
                    :class="[ isStyleTabOpen ? 'tab-bottom-active' : '' ]">
                    依風格搜尋</button>
            <div class="pullDown-frame"
                    :class="[ isStyleTabOpen ? 'pullDown-frame-100' : '' ]">
              <div class="tab-bottom-pullDown-box"
                   :class="[ isStyleTabOpen ? 'tab-bottom-pullDown-box-open' : '' ]"
                   @mouseleave="changeStyleTabOpen">
                <ul class="tab-bottom-pullDown-Tab">
                  <li>
                    <a href="#">
                      <img src="@/assets/images/products/header/tab-img-Cloth.jpg" alt="tab-img-Cloth" class="style-img">
                      <p>Cloth | <span>手做布罩</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/products/header/tab-img-Crystal.jpg" alt="tab-img-Crystal" class="style-img">
                      <p>Crystal | <span>水晶燈</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/products/header/tab-img-Industrial.jpg" alt="tab-img-Industrial" class="style-img">
                      <p>Industrial | <span>工業風</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#">
                      <img src="@/assets/images/products/header/tab-img-Nordic.jpg" alt="tab-img-Nordic" class="style-img">
                      <p>Nordic | <span>北歐風</span></p>
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <button type="button" class="tab-bottom PC-btn"
                    @mouseover="changeTypeTabOpen"
                    :class="[ isTypeTabOpen ? 'tab-bottom-active' : '' ]">
                    依種類搜尋</button>
            <button type="button" class="tab-bottom MB-btn"
                    @click="changeTypeTabOpen"
                    :class="[ isTypeTabOpen ? 'tab-bottom-active' : '' ]">
                    依種類搜尋</button>
             <div class="pullDown-frame"
                    :class="[ isTypeTabOpen ? 'pullDown-frame-100' : '' ]">
              <div class="tab-bottom-pullDown-box"
                    :class="[ isTypeTabOpen ? 'tab-bottom-pullDown-box-open' : '' ]"
                    @mouseleave="changeTypeTabOpen">
                <ul class="tab-bottom-pullDown-Tab">
                  <li>
                    <a href="">
                      <img src="@/assets/images/products/header/type-chandelier.png" alt="type-chandelier" class="type-img">
                      <p>Chandelier | <span>吊燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="">
                      <img src="@/assets/images/products/header/type-wall-lamp.png" alt="type-chandelier" class="type-img">
                      <p>Wall Lamp | <span>壁燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="">
                      <img src="@/assets/images/products/header/type-desk-lamp.png" alt="type-chandelier" class="type-img">
                      <p>Desk Lamp | <span>檯燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="">
                      <img src="@/assets/images/products/header/type-ceiling-lamp.png" alt="type-chandelier" class="type-img">
                      <p>DeskCeiling Lamp | <span>吸頂燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="">
                      <img src="@/assets/images/products/header/type-standing-lamp.png" alt="type-chandelier" class="type-img">
                      <p>Standing Lamp | <span>落地燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="">
                      <img src="@/assets/images/products/header/type-light-bulb.png" alt="type-chandelier" class="type-img">
                      <p>Light Bulb | <span>燈泡</span></p>
                    </a>
                    </li>
                </ul>
              </div>
             </div>
            </li>
        </ul>
        <div class="productList-header-logo">
          <h1>In My Light</h1>
          <p>返回所有商品</p>
        </div>
        <CurrentPath :name="name" :curPaths="currentPaths"/>
      </div>
      <UserCart :cart="carts" :cartData="cartsData" @delete-one="deleteOne"
              @update-qty="updateOneQty" :loading="status.loadingItem"
              @use-coupon="useCoupon" :isCoupon="isCoupon"></UserCart>
      <div class="product-list-box">
        <ul class="product-list-ul toRight-1">
          <li v-for="(item, i) in products" :key="item.id"
                  :class="{ 'big-size-li' : i === 0 || i === products.length-1 }">
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
          </li>
        </ul>
      </div>
      <PaginationComponents :pages="pagination" @change-page="getProducts"></PaginationComponents>
    </div>
  </div>
</template>

<style lang="scss">
.productList-frame{
  position: relative;
  z-index: 60;
  background-color: white;
  overflow: hidden;
}
  .productList-header{
    position: absolute;
    z-index: 65;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    width: 100%;
    padding: 0 50px;
    background-color: white;

    .productList-header-nav{
      display: flex;

      .MB-btn{
        display: none;
      }

      li{

        .tab-bottom{
          position: relative;
          background-color: transparent;
          border: none;
          font-size: 20px;
          margin: 0 10px;
          padding: 10px 0;
          z-index: 80;

          &::before{
            content:'';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 3px;
            background-color: $subColor3;
            border-radius: 5px;
            transition: all .5s;
            transform-origin: center;
          }
        }
        .tab-bottom-active{
          &::before{
            width: 100%;
          }
        }

        .tab-bottom-pullDown-box{
          position: absolute;
          z-index: 70;
          left: 0;
          width: 100%;
          padding: 50px 0;
          background-color: white;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10%);
          transition: transform 0.5s, opacity 0.5s;
          border-bottom: 3px solid $subColor3;
        }
        .tab-bottom-pullDown-Tab{
          display: flex;
          justify-content: start;
          flex-wrap: wrap;
          width: 920px;
          margin: 0 auto;

          li{
            font-size: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 20px;
            margin: 0 12px 20px 12px;
            width: 280px;

            a{
              color: $subColor2;
            }
            .style-img{
              width: 280px;
              height: 195px;
              object-fit: cover;
              transition: all 0.5s;
            }
            .type-img{
              width: 200px;
              height: 200px;
            }
            p{
              opacity: 1;
              transition: all 0.5s;

              span{
                font-size: 20px;
              }
            }

            &:hover img{
              animation: flash 0.2s ease-out;
            }
            &:hover p{
              opacity: 0.7;
            }
          }

        }

        .tab-bottom-pullDown-box-open{
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        .tab-bottom-pullDown-SearchTab{
          display: flex;
          justify-content: center;

          .search-input{
            font-size: 20px;
            padding: 10px;
            border-radius: 25px;
            border: 1px solid gray;
          }
          .search-btn{
            background: transparent;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid gray;
            margin-left: 10px;

            i{
              font-size: 24px;
            }
            &:active{
              box-shadow: 0px 0px 5px gray inset;
              i{
                color: $subColor3;
              }
            }
          }
        }
      }
    }

    .productList-header-logo{
      position: absolute;
      z-index: 70;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;

      &::before{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0%;
        height: 3px;
        background-color: black;
        transition: all .5s;
      }
      h1{
        font-size: 50px;
      }
      p{
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: all .5s;
      }

      &:hover::before{
        width: 100%;
      }
      &:hover p{
        opacity: 1;
      }
    }
  }
  .productList-header-close{
    position: fixed;
    top: -200px;
    left: 0;
    z-index: 90;
    transition: top 0.5s;
  }
  .productList-header-slide{
    top: 0;
    transition: all 0.5s;
  }
  .productList-MB-header{
    height: 100%;
    background-color: white;

  }
@media (max-width:1100px){
  .productList-header{

    .productList-header-logo{
      position: relative;
      top: -10px;
      left: 0;
      transform: translateX(0);
    }
  }
}
@media (max-width:919px){
.productList-header{
  flex-direction: column;
  height: 100%;
  position: fixed;
  top: 0;
  padding: 50px 0;

  .productList-header-nav{
    flex-direction: column;

    .MB-btn{
      display: block;
      transition: all 0.5s;
    }
    .PC-btn{
      display: none;
    }

    li{
      .pullDown-frame{
        height: 0;
        transition: height 0.5s;
      }
      .pullDown-frame-100{
        height: 100%;
      }
      .tab-bottom-pullDown-box{
        position: relative;

        .tab-bottom-pullDown-Tab{
          width: 100%;
          justify-content: space-around;

          li{
            width: 40%;

            .style-img{
              width: 140px;
              height: 97px;
            }
            .type-img{
              width: 100px;
              height: 100px;
            }
            p{
              font-size: 14px;

              span{
                font-size: 14px;
              }
            }
          }
        }
      }
    }
}

  .productList-header-logo{
    z-index: 66;

    &::before{
      width: 100%;
    }
    p{
      opacity: 1;
    }
  }
}
}

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
        .origin_price{
          color: gray;
          text-decoration: line-through;
        }
        .price{
          color: rgb(179, 47, 47);
          font-size: 24px;
        }
        .cart-plus-btn{
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
        width: 400px;

        .thumbnail{
          width: 400px;
          height: 400px;
        }
      }
    }
  }
</style>
<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'
import UserCart from '@/components/user/UserCart.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'

export default {
  components: {
    PaginationComponents,
    UserCart,
    CurrentPath
  },
  data () {
    return {
      name: '產品資訊',
      currentPaths: [],
      scrollPosition: 0,
      sectionTops: {
        productListHeaderPosition: 0
      },
      products: [],
      product: {},
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項ID 製作讀取效果
      },
      carts: [],
      cartsData: {
        total: 0,
        finalTotal: 0
      },
      isHeaderSlide: false,
      isCoupon: false,
      isStyleTabOpen: false,
      isTypeTabOpen: false,
      isSearchTabOpen: false
    }
  },
  watch: {
    scrollPosition (n, o) {
      if (n < o) {
        this.isHeaderSlide = true
      } else {
        this.isHeaderSlide = false
      }
    }
  },
  mixins: [scrollPosMixin],
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
            this.getCart()
            this.status.loadingItem = ''
          } else {
            console.log('加到購物車失敗', res.data.message)
          }
        })
        .catch((error) => {
          console.log('加到購物車失敗', error)
        })
    },
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data.carts
          this.cartsData.finalTotal = res.data.data.final_total
          this.cartsData.total = res.data.data.total
        })
        .catch((error) => {
          console.log('取得列表失敗', error)
        })
    },
    deleteOne (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCart()
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log('取得列表', error)
        })
    },
    updateOneQty (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.status.loadingItem = item.id
      this.$http.put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = ''
            this.getCart()
          } else {
            console.log('更新數量失敗', res.data.message)
          }
        })
        .catch((error) => {
          console.log('更新數量失敗', error)
        })
    },
    useCoupon (couponCode) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const code = {
        code: couponCode
      }
      this.$http.post(api, { data: code })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data)
            this.isCoupon = true
            this.getCart()
          } else {
            console.log('套用優惠券失敗', res.data.message)
          }
        })
        .catch((error) => {
          console.log('套用優惠券失敗', error)
        })
    },
    changeStyleTabOpen () {
      this.isStyleTabOpen = !this.isStyleTabOpen
      this.isTypeTabOpen = false
      this.isSearchTabOpen = false
    },
    changeTypeTabOpen () {
      this.isTypeTabOpen = !this.isTypeTabOpen
      this.isStyleTabOpen = false
      this.isSearchTabOpen = false
    },
    changeSearchTabOpen () {
      this.isSearchTabOpen = !this.isSearchTabOpen
      this.isStyleTabOpen = false
      this.isTypeTabOpen = false
    },
    getSectionTops () {
      this.sectionTops.productListHeaderPosition = this.$refs.productListHeader.getBoundingClientRect().top + window.pageYOffset
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  mounted () {
    this.getSectionTops()
  }
}
</script>
