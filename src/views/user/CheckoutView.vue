<template>
  <div class="form-box">
    <table class="table">
      <thead>
        <tr>
          <th class="product-cart-title-th">商品名稱</th>
          <th>數量</th>
          <th colspan="2" class="ta-end">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in oderData.products" :key=item.id>
          <td>{{ item.product.title }}
            <p v-if="isCoupon" class="useCoupon-tip">已套用優惠券</p>
            </td>
          <td>
            <div class="input-group">
              <p>{{ item.qty }}/{{ item.product.unit }}</p>
            </div>
            </td>
          <td class="ta-end">{{ item.product.price }}</td>
        </tr>
        <tr>
          <td colspan="2" class="ta-end">總計</td>
          <td class="ta-end">NT${{ $filters.currency(oderData.total) }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table">
      <tbody>
        <tr>
          <th>Email</th>
          <td>{{ oderData.user.email }}</td>
          </tr>
        <tr>
          <th>收件人姓名</th>
          <td>{{ oderData.user.name }}</td>
          </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{ oderData.user.tel }}</td>
          </tr>
        <tr>
          <th>收件地址</th>
          <td>{{ oderData.user.address }}</td>
          </tr>
        <tr>
          <th>付款狀態</th>
          <td :class="{ 'isPay': oderData.is_paid }">{{ oderData.is_paid ? '付款完成' : '尚未付款' }}</td>
          </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-success"
            v-if="!oderData.is_paid"
            @click="paying">
              前往結帳</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oderId: '',
      oderData: {
        user: {}, // 初始化 oderData 中的 user 為一個空對象
        products: [],
        total: 0,
        is_paid: false
      }
    }
  },
  methods: {
    getOder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.oderId}`
      this.$http.get(api)
        .then((res) => {
          console.log(res.data)
          this.oderData = res.data.order
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    paying () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.oderId}`
      this.$http.post(api, {})
        .then((res) => {
          console.log(res.data)
          this.getOder()
        })
    }
  },
  created () {
    this.oderId = this.$route.params.oderid
    this.getOder()
  }
}
</script>
