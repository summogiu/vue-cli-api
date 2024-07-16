<template>
  <div>
    <transition name="upScale">
      <div class="product-cart" v-if="isCartOpen">
        <table class="table">
          <thead>
            <tr>
              <th class="product-cart-title-th">商品名稱</th>
              <th>單價</th>
              <th colspan="2">數量</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key=item.id>
              <td class="product-cart-title">{{ item.product.title }}
                <p v-if="isCoupon" class="useCoupon-tip">已套用優惠券</p>
                </td>
              <td>{{ item.product.price }}</td>
              <td>
                <div class="input-group">
                  <input type="number"  min="1" class="form-control"
                          v-model.number="item.qty"
                          @change="updateQty(item)"
                          :disabled="loading === item.id">
                  <span class="input-group-text">/件</span>
                </div>
                </td>
              <td class="product-cart-delete">
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="deleteItem(item.id)">
                  <i class="bi bi-trash-fill"></i>
                  </button>
                  </td>
            </tr>
          </tbody>
        </table>
        <p class="product-cart-Total"><span>總計</span><span>NT${{ $filters.currency(cartsData.total) }}</span></p>
        <p class="product-cart-Total final-total" v-if="isCoupon"><span>應付金額</span><span>NT${{ $filters.currency(cartsData.finalTotal) }}</span></p>
        <div class="input-group user-cart-couponCode">
          <input type="text" class="form-control"
                  placeholder="請輸入優惠碼" aria-label="Recipient's username"
                  v-model="couponCode">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                  @click="$emit('use-coupon', couponCode)">套用優惠碼</button>
                  </div>
        <div class="id-grid gap-2 col-6 mx-auto place-oder-box">
          <button type="button" class="place-oder-btn">
                  <router-link to="/paymentPage/placeOder" class="nav-link place-oder-a">前往結帳</router-link>
                  </button></div>
      </div>
    </transition>
    <div class="product-cart-btns">
      <transition name="Scale">
        <button type="button" class="product-cart-open-btn"
                  v-if="!isCartOpen" @click="changeCartOpen(true)">
          <i class="bi bi-cart-fill product-cart-open-i"></i>
        </button>
      </transition>
      <transition name="Scale">
      <button  type="button" class="product-cart-close-btn"
                v-if="isCartOpen" @click="changeCartOpen(false)">
        <i class="bi bi-dash-lg product-cart-close-i"></i>
      </button>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  .product-cart{
    position: fixed;
    bottom: 10px;
    z-index: 66;
    right: 1%;
    border: 1px solid rgb(173, 173, 173);
    border-radius: 10px;
    background: white;
    box-shadow: 0 2px 2px gray;
    width: 400px;
    transform-origin: bottom right;

    thead, tbody tr {
      display:table;
      width: 100%;
      table-layout:fixed;

      .product-cart-title{
        width: 100px;
      }
    }
    th{
      border-radius: 10px;
      width: 100%;
      font-size: 12px;
    }
    .product-cart-title-th{
      width: 100px;
    }
    tbody{
      display: block;
      overflow-y: scroll;
      height: 420px;
    }
    .product-cart-title{
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .product-cart-delete{
      width: 50px;
    }
  }
  .product-cart-Total{
    text-align: right;
    padding-right: 1%;
    border-bottom: 1px solid gray;
    margin: 24px 10px 0 10px;

    span{
      margin-right: 10px;
    }
  }

  .final-total{
    color: $subColor5;
}

.user-cart-couponCode{
  width: 100%;
  justify-content: center;
}
.user-cart-couponCode,.place-oder-box{
  padding: 1%;
}

.useCoupon-tip{
  color: $subColor5;
  font-size: 12px;
}
.place-oder-btn{
  border-radius: 8px;
  border: none;
  padding: 10px;
  width: 100%;
  color: $subColor;
  background-color: $subColor2;
  transition: all 0.2s;

  &:hover{
    opacity: 0.8;
  }
}
.place-oder-a{
  color: white;
}

@media (max-width:919px){
  .product-cart{
    width: 95%;
    max-width: 400px;
  }
}

.product-cart-btns{
  position: fixed;
  z-index: 70;
  bottom: 10px;
  right: 10px;

  .product-cart-open-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: black;
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;

    .product-cart-open-i{
      color: white;
      font-size: 24px;
    }
  }

  .product-cart-close-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: transparent;
    border: none;
    width: 80px;
    height: 60px;

    .product-cart-close-i{
      color: black;
      font-size: 30px;
      margin-top: 10px;
    }
  }
}
@media (max-width:919px){
  .product-cart-btns{
    .product-cart-open-btn{
      width: 50px;
      height: 50px;
    }
    .product-cart-close-btn{
      width: 50px;
      height: 50px;
    }
  }
}
</style>

<script>
export default {
  props: ['cart', 'cartData', 'loading', 'isCoupon'],
  data () {
    return {
      carts: [],
      cartsData: {},
      couponCode: '',
      isCartOpen: false
    }
  },
  watch: {
    cart () {
      this.carts = this.cart
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('delete-one', id)
    },
    updateQty (item) {
      this.$emit('update-qty', item)
    },
    changeCartOpen (change) {
      this.isCartOpen = change
    }
  },
  mounted () {
    this.carts = this.cart
    this.cartsData = this.cartData
  }
}
</script>
