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
                  <input type="text" :placeholder="searchInputTit" class="search-input"
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
                    <a href="#" @click.prevent="toCategory('手作布罩燈')">
                      <img src="@/assets/images/products/header/tab-img-Cloth.jpg" alt="tab-img-Cloth" class="style-img">
                      <p>Cloth | <span>手作布罩</span></p>
                      </a>
                    </li>
                  <li>
                    <a href="#" @click.prevent="toCategory('水晶燈')">
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
          <a href="#" @click.prevent="toCategory('正在關注')" class="productList-header-follow">
            <i class="bi bi-heart-fill follow-plus-btn isFollow-icon"></i>關注的產品
          </a>
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
      <router-view @getCart="getCart" @toCategory="toCategory" @openMore="toProduct"
              @addRecentlyViewed="addRecentlyViewed"></router-view>
      <div class="follow-box" v-if="followProducts.length !== 0">
        <h3>關注的產品</h3>
        <ul class="follow-list">
          <li v-for="item in followProducts.slice(0, 6)" :key="item.id">
            <div class="follow-content" @click="toProduct(item)">
              <img :src="item.imageUrl" :alt="item.title" class="follow-thumbnail">
              <h4>{{ item.title }}</h4>
              <p class="price">NT${{ item.price }}</p>
            </div>
              <button class="follow-plus-btn"
                      @click="addFollow(item)">
                          <i class="bi bi-heart" v-if="!isFollowed(item)"></i>
                          <i class="bi bi-heart-fill isFollow-icon" v-else></i>
              </button>
          </li>
        </ul>
      </div>
      <div class="recently-viewed-box" v-if="recentlyViewed.length !== 0">
        <h3>最近瀏覽過</h3>
        <ul class="recently-viewed-list">
          <li v-for="item in recentlyViewed" :key="item.id">
            <div class="recently-viewed-content" @click="toProduct(item)">
              <img :src="item.imageUrl" :alt="item.title" class="recently-viewed-thumbnail">
              <h4>{{ item.title }}</h4>
              <p>NT${{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="current-path-box">
        <CurrentPath :name="name"/>
      </div>
      <div class="notice-box">
        <ul class="notice-list">
          <li>
            <div class="notice-img-box">
              <font-awesome-icon :icon="['fas', 'truck-moving']" class="notice-icon" />
              <h5>運送＆運費須知</h5>
            </div>
            <div class="notice-content">
              <h6>好運物流</h6>
              <p>運費會根據送貨區域而有所不同。</p>
              <br>
              <p>台北市區：NT$200／中部市區：NT$250／高屏地區：NT$250／花東地區：NT$400／
                宜蘭：NT$300／（不含稅）。
                對於離島地區，會另外收取費用。
              </p>
              <br>
              <p>如果一次購買商品總金額達到NT$8000或以上，則運費免費。</p>
            </div>
          </li>
          <li>
            <div class="notice-img-box">
              <font-awesome-icon :icon="['fas', 'circle-xmark']" class="notice-icon" />
              <h5>退貨須知</h5>
            </div>
            <div class="notice-content">
              <h6>瑕疵品</h6>
              <p>收到產品後請立即與我們聯繫。請注意，除非產品有缺陷，否則將不受理退貨。</p>
              <br>
              <h6>退貨期限</h6>
              <p>請在收到產品後 7 天內透過電子郵件或電話聯絡我們以了解詳細資訊。
                請注意，視實際情況可能無法受理退貨、換貨或取消。
              </p>
              <br>
              <h6>退貨運費</h6>
              <p>如因客戶原因造成的退貨將由客戶承擔。如果商品有缺陷，我們將承擔費用。</p>
            </div>
          </li>
          <li>
            <div class="notice-img-box">
              <font-awesome-icon :icon="['fas', 'dollar-sign']" class="notice-icon" />
              <h5>付款方式</h5>
            </div>
            <div class="notice-content">
              <h6>信用卡支付</h6>
              <div class="payment-img-box">
                <img src="@/assets/images/icon/visa_icon.png" alt="visa-icon">
                <img src="@/assets/images/icon/mastercard_icon.png" alt="mastercard-icon">
                <img src="@/assets/images/icon/JCB_icon.png" alt="JCB-icon">
                <img src="@/assets/images/icon/american express_icon.png" alt="american express-icon">
              </div>
              <br>
              <h6>貨到付款</h6>
              <p>超商或宅配取貨付款。
                請注意，付款費用會根據產品價格而有所不同。</p>
              <br>
              <h6>銀行轉帳</h6>
              <p>請將發票金額轉入本公司指定的銀行帳戶，帳戶將於下單後發送給您的訂單確認郵件提供。</p>
            </div>
          </li>
        </ul>
      </div>
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
        transition: transform 0.2s, opacity 0.2s;
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
            animation: flash 0.2s linear;
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
      .isFollow-icon{
        margin-right: 10px;
      }
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

    .productList-header-right{
      flex-direction: column;

      .productList-header-follow{
        margin-right: 0;
        margin-bottom: 50px;
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
.follow-box, .recently-viewed-box{
    margin: 100px 50px 50px 50px;
    padding: 50px 0 0 0;
    border-top: 1px solid $subColor4;

    h3{
      font-weight: bold;
      margin-bottom: 50px;
    }
    .follow-list,.recently-viewed-list{
      display: flex;
      flex-wrap: wrap;

      li{
        margin-right: 20px;
        cursor: pointer;
        position: relative;
        width: 200px;

        .follow-content,.recently-viewed-content{
          .follow-thumbnail,.recently-viewed-thumbnail{
            object-fit: cover;
            width: 200px;
            height: 200px;
          }
          &:hover{
            animation: flash 0.3s;
          }
        }

        .follow-plus-btn{
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
.recently-viewed-box {
  margin: 0 50px;
}
@media (max-width:919px){
  .follow-box, .recently-viewed-box{
    margin: 100px auto 50px auto;
    width: 90%;

    .follow-list,.recently-viewed-list{
      flex-wrap: wrap;
      margin-left: 5%;

      li{
        margin: 5px;
        width: 45%;

        .follow-content,.recently-viewed-content{
          .follow-thumbnail,.recently-viewed-thumbnail{
            width: 100%;
          }
          .recently-viewed-thumbnail{
            height: 150px;
          }
          h4{
            font-size: 14px;
          }
          .price{
            font-size: 16px;
          }
        }
      }
    }
    .recently-viewed-list{
      li{
        width: 30%;
      }
    }
  }
}

.current-path-box{
  margin: 100px 50px 0 50px;

  .current-path{
    justify-content: start;
  }
}

.notice-box{

  .notice-list{
    display: flex;
    align-items: start;
    margin: 0 50px 50px 50px;
    border-top: 1px solid $subColor4;
    padding-top: 50px;

    li{
      margin: 0 20px;
      width: 33%;

      .notice-img-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid $subColor4;
        margin-bottom: 10px;

        .notice-icon{
          font-size: 50px;
        }
        h5{
          font-weight: bold;
          margin: 10px 0;
        }
      }
      .notice-content{
        h6{
          font-weight: bold;
          font-size: 14px;
        }
        p{
          font-size: 14px;
          color: gray;
        }
        .payment-img-box{
          img{
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
        }
      }
    }
  }
}
@media (max-width:919px){
  .current-path-box{
    margin: 100px auto 0 auto;
    width: 90%;
  }
  .notice-box{
    .notice-list{
      margin: 0 auto;
      width: 90%;
      flex-direction: column;

      li{
        width: 100%;
        margin: 20px 0;
      }
    }
  }
}
</style>

<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'
import UserCart from '@/components/user/UserCart.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'
import ToPageTop from '@/components/user/ToPageTop.vue'
import emitter from '@/methods/emitter'
import follow from '@/mixins/followMixin'

export default {
  components: {
    UserCart,
    CurrentPath,
    ToPageTop
  },
  data () {
    return {
      name: '產品資訊',
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
      },
      recentlyViewed: []
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
  computed: {
    searchInputTit () { // 搜尋欄位提示
      if (this.$route.params.category) {
        return '在此類別中搜尋'
      } else {
        return '在所有類別中搜尋'
      }
    }
  },
  mixins: [scrollPosMixin, emitter, follow],
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data.carts
          this.cartsData.finalTotal = res.data.data.final_total
          this.cartsData.total = res.data.data.total
          if (this.carts[0].coupon) {
            this.isCoupon = true
          }
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
        this.$router.push({
          path: '/products/productslist',
          query: {
            searchContent: this.searchContent
          }
        })
      } else {
        emitter.emit('search', this.searchContent)
      }

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
    },
    toProduct (item) {
      this.$router.push(`/products/productslist/product/${item.id}`)
      this.addRecentlyViewed(item)
    },
    addRecentlyViewed (item) {
      const index = this.recentlyViewed.findIndex(recentlyViewedItem => recentlyViewedItem.id === item.id)
      if (index !== -1) { // 避免重複相同產品
        this.recentlyViewed.splice(index, 1)
      } else if (this.recentlyViewed.length >= 5) { // 設置最多顯示5筆
        this.recentlyViewed.pop()
      }
      this.recentlyViewed.unshift(item)
    }
  },
  created () {
    this.getCart()
    console.log(window.history)
  },
  mounted () {
    this.getSectionTops()
  }
}
</script>
