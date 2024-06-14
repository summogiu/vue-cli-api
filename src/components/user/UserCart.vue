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
          <td class="product-cart-title">{{ item.product.title }}</td>
          <td>{{ item.product.price }}</td>
          <td>{{ item.qty }}</td>
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm"
              @click="deleteItem(item.id)">
              <i class="bi bi-trash-fill"></i>
              </button>
              </td>
        </tr>
      </tbody>
    </table>
    <p class="product-cart-Total"><span>總計</span><span>NT${{ $filters.currency(cartsData.finalTotal) }}</span></p>
  </div>
</template>

<script>
export default {
  props: ['cart', 'cartData'],
  data () {
    return {
      carts: [],
      cartsData: {}
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
      console.log('觸發刪除')
    }
    // getTotalQty () {
    //   const qtys = this.carts.map(item => item.qty)
    //   this.qty = qtys.reduce((a, b) => a + b, 0)
    // }
  },
  mounted () {
    this.carts = this.cart
    this.cartsData = this.cartData
    console.log('接收到的', this.carts)
  }
}
</script>
