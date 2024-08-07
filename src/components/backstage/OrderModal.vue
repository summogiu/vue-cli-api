<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單詳細</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="title" class="form-label">訂單成立日期</label>
                <p>{{ $filters.date(tempOrder.create_at) }}</p>
              </div>
              <div class="mb-3 col-md-6">
                <label for="title" class="form-label">訂單編號</label>
                <p>{{ tempOrder.id }}</p>
              </div>
            </div>
            <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="total" class="form-label">訂單總額(NT$)</label>
                  <input type="number" class="form-control" id="total"
                          v-model.number="tempOrder.total">
                </div>
                <div class="mb-3 col-md-6">
                  <p>付款狀態</p>
                  <input class="form-check-input" type="checkbox"
                          :true-value="true"
                          :false-value="false"
                          id="is_paid"
                          v-model="tempOrder.is_paid">
                  <label class="form-check-label" for="is_paid">
                    已付款
                  </label>
                </div>
              </div>
              <hr>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label class="form-label">客戶名稱</label>
                  <input v-if="tempOrder.user" v-model="tempOrder.user.name" class="form-control" disabled>
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">聯絡號碼</label>
                  <input v-if="tempOrder.user" v-model="tempOrder.user.tel" class="form-control">
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label class="form-label">電子信箱</label>
                  <input v-if="tempOrder.user" v-model="tempOrder.user.email" class="form-control">
                </div>
                <div class="mb-3 col-md-6">
                  <label class="form-label">寄送地址</label>
                  <input v-if="tempOrder.user" v-model="tempOrder.user.address" class="form-control">
                </div>
              </div>
              <div class="mb-3 message-box">
                <label for="message" class="form-label">備註訊息</label>
                <textarea id="message" v-model="tempOrder.message" class="form-control message-textarea"></textarea>
              </div>
              <hr>
              <div class="mb-3">
                <label for="title" class="form-label">商品內容</label>
                <ul>
                  <li v-for="productContent,i in tempOrder.products" :key="i">
                    <span>▪︎ {{ productContent.product.title }}</span>
                    <span>NT${{ productContent.product.price }}</span>
                    <span>×<input type="number" v-model.number="productContent.qty" @input="validateQty(productContent)" class="form-control product-qty-input">{{ productContent.product.unit }}</span>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-order', tempOrder)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .product-qty-input{
    display: inline;
    width: 50px;
  }
  .message-box{
    display: flex;
    flex-direction: column;
  }
  .message-textarea{
    width: 100%;
    height: 100px;
    resize: none
  }
</style>

<script>
import modalMixin from '@/mixins/ModalMixin'

export default {
  props: {
    order: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      tempOrder: {}
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
      if (!this.tempOrder.user) {
        this.tempOrder.user = {}
      }
    }
  },
  mixins: [modalMixin],
  methods: {
    validateQty (productContent) { // 限制商品數量不得小於0
      if (productContent.qty < 0) {
        productContent.qty = 0
      }
    }
  },
  mounted () {
    this.tempOrder = this.order
  }
}
</script>
