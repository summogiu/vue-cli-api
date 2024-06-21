<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">優惠券名稱</label>
                <input type="text" class="form-control" id="title"
                        placeholder="請輸入優惠券名稱" v-model="tempCoupon.title">
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">優惠碼</label>
                <input type="text" class="form-control" id="code"
                        placeholder="請輸入優惠碼" v-model="tempCoupon.code">
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="percent" class="form-label">折扣百分比</label>
                  <input type="number" class="form-control" id="percent"
                          placeholder="請輸入折扣百分比" v-model.number="tempCoupon.percent">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="due_date" class="form-label">到期日</label>
                  <input type="date" class="form-control" id="due_date"
                          placeholder="請輸入到期日" v-model="due_date">
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                          :true-value="1"
                          :false-value="0"
                          id="is_enabled"
                          v-model="tempCoupon.is_enabled">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-coupon', tempCoupon)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/ModalMixin'

export default {
  props: {
    coupon: {}
  },
  mixins: [modalMixin],
  data () {
    return {
      due_date: '',
      tempCoupon: {}
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      // ↓將this.tempCoupon.due_date轉為毫秒 因new Date是以毫秒為單位
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T'); // .toISOString => 轉為ISO 8601日期格式 即"YYYY-MM-DDTHH:MM:SS.sssZ"
        // ↑.split('T') => 將日期格式拆為[YYYY-MM-DD, THH:MM:SS.sssZ]
      [this.due_date] = dateAndTime // 將dateAndTime[0]賦值到this.due_date (即YYYY-MM-DD)
      // ↑若是要改成將dateAndTime[1]賦值到某個變數 則使用[, 變數名稱] = dateAndTime (即THH:MM:SS.sssZ)

      console.log('coupon監聽生效') // isNew時 coupon的值從{}變為due_date 觸發監聽事件

      if (!this.tempCoupon.is_enabled) {
        this.tempCoupon.is_enabled = 0
      }
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000) // 將日期格式轉為Unix時間戳
    }
  },
  mounted () {
    this.tempCoupon = this.coupon
  }
}
</script>
