<template>
  <div>
    <div class="form-box">
      <table class="table products-content-table">
        <thead>
          <tr>
            <th class="product-cart-title-th">品項</th>
            <th>數量</th>
            <th colspan="2" class="ta-end">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in oderData.products" :key=item.id>
            <td>{{ item.product.title }}</td>
            <td>
              <div class="input-group">
                <p>{{ item.qty }}/{{ item.product.unit }}</p>
              </div>
              </td>
            <td class="ta-end">{{ item.product.price }}</td>
          </tr>
          <tr>
            <td colspan="2" class="ta-end">總計</td>
            <td class="ta-end">
              NT${{ $filters.currency(oderData.total) }}
              <span v-if="isCoupon" class="coupon-percent">(已套用{{ couponPercent * 0.1 }}折優惠)</span>
              </td>
          </tr>
        </tbody>
      </table>

      <table class="table user-content-table">
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
            <td :class="{ 'isPay': oderData.is_paid }" class="paid-box">
              {{ oderData.is_paid ? '付款完成' : '尚未付款' }}
              <button type="button" class="btn paid-btn"
              v-if="!oderData.is_paid" @click="paying">
                立即付款</button>
            </td>
            </tr>
        </tbody>
      </table>

      <transition name="upScale">
        <div class="paid-success-box" v-if="successMessageBox">
          <p>付款成功！</p>
          <p>訂單已為您安排。</p>
          <button type="button" @click="closeMessage">
            <font-awesome-icon :icon="['fas', 'xmark']" class="close-success-message" />
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.form-box{
  width: 90%;
  margin: 0 auto 100px auto;

  .products-content-table{
    border: 1px solid $subColor4;
    margin-bottom: 50px;

    thead{
      th{
        background-color: black;
        color: white;
      }
    }
    .coupon-percent{
      margin-left: 10px;
      color: $subColor5;
    }
  }
  .user-content-table{
    border: 1px solid $subColor4;

    tr{
      border-bottom: 1px solid $subColor4;
    }
    th{
      background-color: black;
      color: white;
      width: 100px;
    }
    .paid-box{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .paid-btn{
        background-color: $subColor5;
        color: white;
      }
    }
    .isPay{
        color: $subColor5;
        font-weight: bold;
      }
  }

  .paid-success-box{
    background-color: white;
    border: 1px solid $subColor5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: $subColor5;

    button{
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      border: none;
      color: $subColor5;
    }
  }
}
</style>

<script>
import emitter from '@/methods/emitter'

export default {
  data () {
    return {
      oderId: '',
      oderData: {
        user: {}, // 初始化 oderData 中的 user 為一個空對象
        products: [],
        total: 0,
        is_paid: false
      },
      isCoupon: false,
      couponPercent: 100,
      successMessageBox: false
    }
  },
  mixins: [emitter],
  methods: {
    getOder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.oderId}`
      this.$http.get(api)
        .then((res) => {
          this.oderData = res.data.order
          emitter.emit('isPaid', this.oderData.is_paid)

          // 是否有使用優惠券
          const productid = Object.keys(this.oderData.products)[0]
          const productData = this.oderData.products[productid]
          if (productData.coupon.is_enabled) {
            this.isCoupon = true
            this.couponPercent = productData.coupon.percent
          }
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    paying () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.oderId}`
      this.$http.post(api, {})
        .then((res) => {
          this.successMessageBox = true
          this.getOder()
        })
    },
    closeMessage () {
      this.successMessageBox = false
    }
  },
  created () {
    this.oderId = this.$route.params.oderid
    this.getOder()
  }
}
</script>
