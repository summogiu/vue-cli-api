<template>
  <div class="order-view-frame">
    <table class="table mt-4 article-list-table">
      <thead>
        <tr>
          <th width="120">成立時間</th>
          <th width="220">訂單編號</th>
          <th>商品內容</th>
          <th>訂單總額(NT$)</th>
          <th width="120">付款狀態</th>
          <th>備註訊息</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.id }}</td>
          <td>
            <ul>
              <li v-for="productContent,i in item.products" :key="i">
                <span>▪︎ {{ productContent.product.title }}</span>
                <span>NT${{ productContent.product.price }}</span>
                <span>×{{ productContent.qty }}{{ productContent.product.unit }}</span>
              </li>
            </ul>
          </td>
          <td>{{ $filters.currency(item.total) }}</td>
          <td :class="{ 'public' : item.is_paid }">{{ item.is_paid ? '已付款' : '未付款' }}</td>
          <td>{{ item.message }}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="deleteModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <OrderModal ref="orderModal" @update-order="updateOrder" :order="tempOrder"/>
    <DeleteModal ref="deleteModal" :item="tempOrder" @delete-item="deleteOrder"/>
    <PaginationComponents :pages="pagination" @change-page="getOrders" />
    <Loading :active="isLoading"></Loading>
  </div>
</template>

<style lang="scss">
.order-view-frame{
  padding-bottom: 50px;
}
.table{
  tbody{
    tr{
      td{
        ul{
          border: 1px solid $subColor4;
          padding: 5px;

          li{
            span{
              margin-right: 5px;
            }
          }
        }
      }
      .public{
        color: $subColor5;
      }
    }
  }
}
</style>

<script>
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'
import OrderModal from '@/components/backstage/OrderModal.vue'
import DeleteModal from '@/components/backstage/DeleteModal.vue'

export default {
  components: {
    PaginationComponents,
    OrderModal,
    DeleteModal
  },
  data () {
    return {
      orders: [],
      tempOrder: {},
      isLoading: false,
      pagination: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
            console.log(res.data.orders)
          } else {
            console.log(res.data.success)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openModal (item) {
      this.tempOrder = JSON.parse(JSON.stringify(item))
      const orderModal = this.$refs.orderModal
      orderModal.showModal()
    },
    updateOrder (item) {
      this.tempOrder = item
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`

      this.$http.put(api, { data: item })
        .then((res) => {
          this.getOrders()
          this.$pushMessage(res)

          const orderModal = this.$refs.orderModal
          orderModal.hideModal()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteOrder (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      this.$http.delete(api)
        .then((res) => {
          this.getOrders()
          this.$pushMessage(res, '刪除')
        })
        .catch((error) => {
          console.log(error)
        })
      const deleteModal = this.$refs.deleteModal
      deleteModal.hideModal()
    },
    deleteModal (item) {
      this.tempOrder = JSON.parse(JSON.stringify(item))

      const deleteModal = this.$refs.deleteModal
      deleteModal.showModal()
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
