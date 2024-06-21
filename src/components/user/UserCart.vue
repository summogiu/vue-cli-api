<template>
  <div class="product-cart" v-if="carts.length !== 0">
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
      <button type="button" class="btn btn-danger place-oder-btn">
              <router-link to="/user/placeOder" class="nav-link place-oder-a">前往結帳</router-link>
              </button></div>
  </div>
</template>

<script>
export default {
  props: ['cart', 'cartData', 'loading', 'isCoupon'],
  data () {
    return {
      carts: [],
      cartsData: {},
      couponCode: ''
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
    }
  },
  mounted () {
    this.carts = this.cart
    this.cartsData = this.cartData
  }
}
</script>
