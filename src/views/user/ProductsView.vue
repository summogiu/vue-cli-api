<template>
  <div>
    <div class="productList-frame">
      <div class="productList-header toDown-1"
              :class="[ scrollPosition > 0 ? 'productList-header-close' : '',
              isHeaderSlide ? 'productList-header-slide' : '',
              isMBMenuOpen ? 'MB-productList-menu-open' : '' ]"
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
                  <input type="text" placeholder="請輸入內容" class="search-input"
                        ref="searchContent">
                  <button type="button" class="search-btn" @click="search">
                    <i class="bi bi-search"></i>
                  </button>
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
                    <a href="#" @click.prevent="toCategory('布罩')">
                      <img src="@/assets/images/products/header/tab-img-Cloth.jpg" alt="tab-img-Cloth" class="style-img">
                      <p>Cloth | <span>手作布罩</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('水晶')">
                      <img src="@/assets/images/products/header/tab-img-Crystal.jpg" alt="tab-img-Crystal" class="style-img">
                      <p>Crystal | <span>水晶燈</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('工業風')">
                      <img src="@/assets/images/products/header/tab-img-Industrial.jpg" alt="tab-img-Industrial" class="style-img">
                      <p>Industrial | <span>工業風</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('北歐風')">
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
                    <a href="#" @click.prevent="toCategory('吊燈')">
                      <img src="@/assets/images/products/header/type-chandelier.png" alt="type-chandelier" class="type-img">
                      <p>Chandelier | <span>吊燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('壁燈')">
                      <img src="@/assets/images/products/header/type-wall-lamp.png" alt="type-chandelier" class="type-img">
                      <p>Wall Lamp | <span>壁燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('檯燈')">
                      <img src="@/assets/images/products/header/type-desk-lamp.png" alt="type-chandelier" class="type-img">
                      <p>Desk Lamp | <span>檯燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('吸頂燈')">
                      <img src="@/assets/images/products/header/type-ceiling-lamp.png" alt="type-chandelier" class="type-img">
                      <p>DeskCeiling Lamp | <span>吸頂燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('落地燈')">
                      <img src="@/assets/images/products/header/type-standing-lamp.png" alt="type-chandelier" class="type-img">
                      <p>Standing Lamp | <span>落地燈</span></p>
                    </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('燈泡')">
                      <img src="@/assets/images/products/header/type-light-bulb.png" alt="type-chandelier" class="type-img">
                      <p>Light Bulb | <span>燈泡</span></p>
                    </a>
                    </li>
                </ul>
              </div>
             </div>
            </li>
        </ul>
        <div class="productList-header-logo" @click="backProductList">
          <h1>In My Light</h1>
          <p>返回所有商品</p>
        </div>
        <div class="productList-header-right">
          <a href="#" @click.prevent="toCategory('正在關注')" class="productList-header-follow">關注的產品</a>
          <CurrentPath :name="name" :curPaths="currentPaths"/>
        </div>
      </div>
      <div class="open-MB-productList-menu-btn">
        <button type="button"
                @click="changeMBMenuOpen">
                <transition name="rotate"><i class="bi bi-filter-left" v-if="!isMBMenuOpen"></i></transition>
                <transition name="rotate"><i class="bi bi-x-lg" v-if="isMBMenuOpen"></i></transition>
                </button>
      </div>
      <div class="MB-title">
          <h2>In My Light</h2>
          <p>產品資訊</p>
        </div>
      <UserCart :cart="carts" :cartData="cartsData" @delete-one="deleteOne"
              @update-qty="updateOneQty" :loading="status.loadingItem"
              @use-coupon="useCoupon" :isCoupon="isCoupon"></UserCart>
      <router-view @getCart="getCart"></router-view>
    </div>
    <ToPageTop :class="[ isHeaderSlide ? 'fadeIn' : '' ]" />
  </div>
</template>

<style lang="scss">
.productList-frame{
  position: relative;
  z-index: 60;
  background-color: white;
  overflow: hidden;
  min-height: 100vh;
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

    .PC-btn{
      cursor: default;
    }
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
  .productList-header-right{
    display: flex;
    align-items: center;

    a{
      color: black;

      &:hover{
        color: $subColor3;
      }
    }
    .productList-header-follow{
      margin-right: 50px;
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

 .open-MB-productList-menu-btn{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;

    button{
      background-color: transparent;
      border: none;

      i{
        font-size: 50px;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 0;
      }
    }
 }
 .MB-title{
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;

    h2{
      font-size: 50px;
      border-bottom: 3px solid black;
      margin-bottom: 5px;
    }
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
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;

    .productList-header-nav{
      flex-direction: column;

      li{
        .MB-btn{
          display: block;
          margin: 0 auto;
        }
        .PC-btn{
          display: none;
        }
        .pullDown-frame{
          max-height: 0;
          transition: all 0.3s;
        }
        .pullDown-frame-100{
          max-height: 900px;
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
  .MB-productList-menu-open{
    visibility: visible;
    opacity: 1;
  }
  .open-MB-productList-menu-btn{
    display: block;
  }
  .MB-title{
    display: flex;
  }
}

</style>

<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'
import UserCart from '@/components/user/UserCart.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'
import ToPageTop from '@/components/user/ToPageTop.vue'
import emitter from '@/methods/emitter'

export default {
  components: {
    UserCart,
    CurrentPath,
    ToPageTop
  },
  data () {
    return {
      name: '產品資訊',
      currentPaths: [],
      scrollPosition: 0,
      sectionTops: {
        productListHeaderPosition: 0
      },
      carts: [],
      cartsData: {
        total: 0,
        finalTotal: 0
      },
      isCoupon: false,
      isHeaderSlide: false,
      isStyleTabOpen: false,
      isTypeTabOpen: false,
      isSearchTabOpen: false,
      isMBMenuOpen: false,
      searchContent: '',
      status: {
        loadingItem: ''
      }
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
  mixins: [scrollPosMixin, emitter],
  methods: {
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
    },
    changeMBMenuOpen () {
      this.isMBMenuOpen = !this.isMBMenuOpen
    },
    search () {
      this.searchContent = this.$refs.searchContent.value
      if (this.$route.params.productid) {
        console.log('準備跳轉')
        this.backProductList()
        console.log('跳轉完畢')
      }
      console.log('準備發送', this.searchContent)
      emitter.emit('search', this.searchContent)
      console.log('發送完畢', this.searchContent)
      this.isSearchTabOpen = false
      this.isMBMenuOpen = false
      this.$refs.searchContent.value = ''
    },
    backProductList () { // 回到所有產品
      this.isMBMenuOpen = false
      this.$router.push('/products/productslist')
      this.searchContent = ''
      emitter.emit('search', this.searchContent)
      window.scrollTo(0, 0)
    },
    toCategory (category) { // 前往產品分類
      this.isMBMenuOpen = false
      this.$router.push(`/products/productslist/${category}`)
      this.searchContent = ''
      emitter.emit('search', this.searchContent)
      window.scrollTo(0, 0)
    }
  },
  created () {
    this.getCart()
  },
  mounted () {
    this.getSectionTops()
  }
}
</script>
