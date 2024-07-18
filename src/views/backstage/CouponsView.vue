<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button type="button" @click="openModal(true)" class="btn btn-primary">建立優惠券</button>
  </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th width="120">折扣百分比</th>
          <th width="120">到期日</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.percent }}
          </td>
          <td class="text-right">
            {{ $filters.date(item.due_date) }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="deleteModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal ref="couponModal" @update-coupon="updateCoupon" :coupon="tempCoupon"></CouponModal>
    <DeleteModal ref="deleteModal" :item="tempCoupon" @delete-item="deleteCoupon"></DeleteModal>
    <PaginationComponents :pages="pagination" @change-page="getCoupons"></PaginationComponents>
</template>

<script>
import CouponModal from '@/components/backstage/CouponModal.vue'
import DeleteModal from '@/components/backstage/DeleteModal.vue'
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'

export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
          }
        })
        .catch((error) => {
          console.log('取得優惠券失敗', error)
        })
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      const couponModal = this.$refs.couponModal
      couponModal.showModal()
    },
    updateCoupon (item) {
      this.tempCoupon = item
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: item })
        .then((res) => {
          this.isLoading = false
          this.getCoupons()
          this.$pushMessage(res, '更新')
        })
        .catch((error) => {
          console.log('更新優惠券失敗', error)
        })
      const couponModal = this.$refs.couponModal
      couponModal.hideModal()
    },
    deleteModal (item) {
      this.tempCoupon = JSON.parse(JSON.stringify(item))

      const deleteModal = this.$refs.deleteModal
      deleteModal.showModal()
    },
    deleteCoupon (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false
          this.getCoupons()
          this.$pushMessage(res, '刪除')
        })
        .catch((error) => {
          console.log('刪除優惠券失敗', error)
        })
      this.$refs.deleteModal.hideModal()
    }
  },
  created () {
    this.getCoupons()
  },
  components: {
    CouponModal,
    DeleteModal,
    PaginationComponents
  }
}
</script>
