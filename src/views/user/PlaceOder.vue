<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="place-page-frame">
      <div class="place-page-top">
        <div class="place-page-left">
          <div class="delivery-infor-box">
            <div class="delivery-infor-title field-title">
              <font-awesome-icon :icon="['fas', 'truck']" class="field-title-icon" />
              <h3>運送＆運費須知</h3>
            </div>
            <div class="delivery-infor-text">
              <h4>好運物流</h4>
              <p>運費會根據送貨區域而有所不同。</p>
              <br>
              <p>台北市區：NT$200／中部市區：NT$250／高屏地區：NT$250／
                花東地區：NT$400／ 宜蘭：NT$300／（不含稅）。
                對於離島地區，會另外收取費用。
              </p>
              <br>
              <p>如果一次購買商品總金額達到NT$8000或以上，則運費免費。</p>
              <p class="free-shipping-tip" v-if="isFreeShipping">
                再購買NT<span>${{ 8000 - cartsData.finalTotal }}</span>元可免貨運費！
              </p>
            </div>
          </div>
          <div class="form-box">
            <h3>填寫收件資訊</h3>
            <Form v-slot="{errors}" ref="userForm" @submit="placeOrder">
              <div class="mb-3">
                <label for="name" class="form-label">姓名<span class="must-tip">必須</span></label>
                <Field id="name" name="姓名" type="name" class="form-control"
                rules="required" :class="{ 'is-invalid': errors['姓名'], 'is-valid': !errors['姓名'] && form.user.name }"
                v-model="form.user.name"
                placeholder="請輸入姓名"></Field>
                <ErrorMessage class="invalid-feedback" name="姓名"></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email<span class="must-tip">必須</span></label>
                <Field id="email" name="email" type="email" class="form-control"
                rules="email|required" :class="{ 'is-invalid': errors['email'], 'is-valid': !errors['email'] && form.user.email }"
                v-model="form.user.email"
                placeholder="請輸入Email"></Field>
                <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">連絡電話<span class="must-tip">必須</span></label>
                <Field id="phone" name="電話" type="text" class="form-control"
                rules="required" :class="{ 'is-invalid': errors['電話'], 'is-valid': !errors['電話'] && form.user.tel }"
                v-model="form.user.tel"
                placeholder="請輸入連絡電話"></Field>
                <ErrorMessage class="invalid-feedback" name="電話"></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="region" class="form-label">地區<span class="must-tip">必須</span></label>
                <div class="input-group">
                    <Field id="region" name="地區" class="form-select region-select"
                          as="select"
                          rules="required" :class="{ 'is-invalid': errors['地區'], 'is-valid': !errors['地區'] && region }"
                          v-model="region">
                      <option value="">地區</option>
                      <option value="臺北市">臺北市</option>
                      <option value="新北市">新北市</option>
                      <option value="桃園市">桃園市</option>
                      <option value="臺中市">臺中市</option>
                      <option value="臺南市">臺南市</option>
                      <option value="高雄市">高雄市</option>
                      <option value="新竹縣">新竹縣</option>
                      <option value="苗栗縣">苗栗縣</option>
                      <option value="彰化縣">彰化縣</option>
                      <option value="南投縣">南投縣</option>
                      <option value="雲林縣">雲林縣</option>
                      <option value="嘉義縣">嘉義縣</option>
                      <option value="屏東縣">屏東縣</option>
                      <option value="宜蘭縣">宜蘭縣</option>
                      <option value="花蓮縣">花蓮縣</option>
                      <option value="臺東縣">臺東縣</option>
                    </Field>

                    <Field id="other_address" name="地址" type="text" class="form-control"
                    rules="required" :class="{ 'is-invalid': errors['地址'], 'is-valid': !errors['地址'] && other_address }"
                    v-model="other_address"
                    placeholder="請輸入連絡地址"></Field>
                    <ErrorMessage class="invalid-feedback" name="地區"></ErrorMessage>
                    <ErrorMessage class="invalid-feedback" name="地址"></ErrorMessage>
                </div>
              </div>
            </Form>
            <div class="couponCode-box input-group">
              <input type="text" class="form-control"
                      placeholder="請輸入優惠碼" aria-label="Recipient's username"
                      v-model="couponCode" :disabled="isCoupon"
                      :class="{ 'is-valid': isCoupon }">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                      @click="useCoupon(couponCode)" :disabled="isCoupon">套用優惠碼</button>
            </div>
            <p v-if="isCoupon" class="isCoupon">已成功使用優惠券</p>
          </div>
        </div>
        <div class="shopping-cart-box">
          <div class="shopping-cart-title field-title">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="field-title-icon" />
            <h3>購物車</h3>
          </div>
          <ul class="shopping-cart-list">
            <li v-for="item in carts" :key=item.id>
              <div class="shopping-cart-list-title">
                <img :src="item.product.imageUrl" alt="item.product.title">
                <p>{{ item.product.title }}</p>
              </div>
              <div class="shopping-cart-list-content">
                <div class="shopping-cart-list-qty">
                  <input type="number" min="1"  v-model="item.qty" @change="updateOneQty(item)">
                  <span>{{ item.product.unit }}</span>
                </div>
                <div class="shopping-cart-list-price-box">
                  <p v-if="item.qty > 1" class="one-price"><span>單價</span>NT${{ item.product.price }}</p>
                  <p>NT${{ $filters.currency(item.product.price * item.qty) }}</p>
                </div>
              </div>
              <div class="shopping-cart-list-delete">
                <button @click="deleteProduct(item.id)">刪除</button>
              </div>
            </li>
          </ul>
          <div class="shopping-cart-total-box">
            <div class="total">
              <span class="label">合計</span>
              <span class="num">$NT{{ $filters.currency(cartsData.total) }}</span>
            </div>
            <div class="final-total" :class="[ isCoupon ? 'isCoupon': ''  ]">
              <span class="label">應付金額</span>
              <span class="num">$NT{{ $filters.currency(cartsData.finalTotal) }}</span>
            </div>
          </div>
          <div class="back-produst-list">
            <router-link to="/products/productslist">
              <font-awesome-icon :icon="['fas', 'angle-left']" />
              <span>繼續購買</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="place-page-bottom">
        <div class="mb-3">
            <label for="message" class="form-label">備註</label>
            <textarea id="message" name="message" rows="4"
            class="form-control remark-message"
            v-model="form.message"
            placeholder="請輸入訊息"></textarea>
        </div>
        <div class="other-inform">
          <p>本產品由批發商和直營店共享庫存。因此，根據您的下單時間，我們可能會因銷售情況而缺貨。</p>
          <br>
          <p>對於造成您的不便，我們深表歉意，但感謝您的理解。如果訂單狀況有異，我們將與您聯繫。</p>
        </div>
        <button class="confirm-btn" type="submit" @click="handleSubmit">
          我已確認內容，確定下單
        </button>
        <router-link to="/products/productslist" class="back-btn">
          返回商店繼續選購
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.place-page-frame{
  max-width: 84%;
  margin: 0 auto 100px auto;
}
.field-title{
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid $subColor4;

  h3{
    font-weight: bold;
  }
  .field-title-icon{
    font-size: 20px;
    margin-right: 10px;
  }
}

.place-page-top{
  display: flex;
  justify-content: space-around;

  .place-page-left{
    width: 50%;

    .delivery-infor-box{
      margin-bottom: 50px;

      .delivery-infor-text{
        h4{
          font-size: 14px;
          color: $subColor3;
        }
        .free-shipping-tip{
          background-color: #fff5e6;
          color: #ff9800;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin-top: 20px;

          span{
            font-weight: bold;
          }
        }
      }
    }
    .form-box{
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 80px auto 0 auto;
      border-top: 1px solid $subColor4;
      padding: 20px 5px;

      h3{
        position: absolute;
        right: 20px;
        top: -45px;
        border: 1px solid $subColor4;
        border-bottom: none;
        padding: 10px;
        border-radius: 5px 5px 0 0;
        background-color: white;
      }
      .form-label{
        display: flex;
        align-items: center;

        .must-tip{
          background-color: #ff9800;
          color: white;
          font-size: 14px;
          padding: 0 5px;
          margin-left: 5px;
        }
      }
      .region-select{
        flex: 0.2 1 auto !important
      }
      .remark-message{
        resize: none;
      }
      .isPay{
        color: $mainColor;
      }

      .couponCode-box{
        margin-top: 20px;
      }
      .isCoupon{
        font-size: 14px;
        color: $subColor5;
      }
    }
  }

  .shopping-cart-box{
    width: 40%;

    .shopping-cart-list{
      li{
        border-bottom: 1px solid $subColor4;
        margin-bottom: 20px;
        padding-bottom: 20px;
        position: relative;

        .shopping-cart-list-title{
          display: flex;
          align-items: center;

          img{
            width: 100px;
            height: 100px;
            margin: 0 20px 20px 0;
            border: 1px solid $subColor4;
          }
          p{
            font-size: 14px;
          }
        }
        .shopping-cart-list-content{
          display: flex;
          align-items: center;
          justify-content: space-between;

          .shopping-cart-list-qty{
            display: flex;
            align-items: center;
            font-size: 24px;
            background-color: $subColor4;
            border-radius: 2px;
            box-shadow: 0px 1px 2px gray;
            width: 100px;
            height: 50px;
            padding: 0 10px;
            color: gray;

            input{
              border: none;
              outline: none;
              width: 80%;
              background-color: transparent;
              text-align: center;
              color: gray;
            }
          }
          .shopping-cart-list-price-box{
            p{
            font-size: 20px;
          }
          .one-price{
            font-size: 16px;
            color: gray;

            span{
              margin-right: 10px;
            }
          }
          }
        }
        .shopping-cart-list-delete{
          position: absolute;
          top: 0;
          right: 0;

          button{
            border: none;
            background-color: $subColor4;
            color: gray;
            box-shadow: 0px 1px 2px gray;
            font-size: 14px;
          }
        }
      }
    }
    .shopping-cart-total-box{
      width: 90%;
      margin: 0 auto;

      .total,.final-total{
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(240, 240, 240);
        display: flex;
        justify-content: end;
        align-items: center;

        .label{
          margin-right: 20px;
        }
      }
      .final-total{
        font-weight: bold;
        color: black;

        .num{
          font-size: 24px;
        }
      }
      .isCoupon{
        color: $subColor5;
      }
    }
    .back-produst-list{
      text-align: end;
      width: 90%;

      span{
        margin-left: 10px;
      }
    }
  }
}
@media (max-width:919px){
  .place-page-top{
    flex-direction: column;

    .place-page-left,.shopping-cart-box{
      width: 100%;

      .back-produst-list{
        display: none;
      }
    }
  }
}
.place-page-bottom{
  max-width: 500px;
  margin: 0 auto;

  .other-inform{
    background-color: #fff5e6;
    color: #a66300;
    padding: 10px;
    margin-bottom: 50px;
  }
  .confirm-btn,.back-btn{
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 20px;

  }
  .confirm-btn{
    background-color: black;
    color: white;

    &:hover{
      color: $subColor4;
      box-shadow: 0px 1px 2px gray inset;
    }
  }
  .back-btn{
    display: block;
    border: 1px solid black;
    color: black;
    text-align: center;
    line-height: 60px;

    &:hover{
      box-shadow: 0px 1px 2px black inset;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      region: '',
      other_address: '',
      carts: [],
      cartsData: {
        finalTotal: 0,
        total: 0
      },
      couponCode: '',
      isCoupon: false,
      isLoading: false
    }
  },
  computed: {
    isFreeShipping () {
      return this.cartsData.finalTotal < 8000
    }
  },
  methods: {
    handleSubmit () { // 手動觸發表單的submit事件
      const userForm = this.$refs.userForm
      userForm && userForm.$el.dispatchEvent(new Event('submit', { bubbles: true }))
    },
    placeOrder () {
      this.form.user.address = `${this.region}${this.other_address}` // 組合完整地址

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.isLoading = true
      this.$http.post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.$router.push(`checkout/${res.data.orderId}`)
          } else {
            this.isLoading = false
            const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message
            alert(message.join('\n'))
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          this.carts = res.data.data.carts
          this.cartsData.finalTotal = res.data.data.final_total
          this.cartsData.total = res.data.data.total
          if (this.carts[0].coupon) {
            this.isCoupon = true
            this.couponCode = this.carts[0].coupon.code
          }
        })
        .catch((error) => {
          console.log('取得列表失敗', error)
        })
    },
    updateOneQty (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.id,
        qty: item.qty
      }

      this.$http.put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            console.log('更新數量成功', res.data.message)
            this.getCart()
          } else {
            console.log('更新數量失敗', res.data.message)
          }
        })
        .catch((error) => {
          console.log('更新數量失敗', error)
        })
    },
    deleteProduct (id) {
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
    }
  },
  created () {
    this.getCart()
  },
  mounted () {
    document.title = '填寫收件資訊-In My Light'
  }
}
</script>
