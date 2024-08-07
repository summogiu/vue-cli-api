<template>
<Loading :active="isLoading"></Loading>
<div class="text-end">
  <button type="button" @click="openModal(true)" class="btn btn-primary">新增產品</button>
</div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item) in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span> <!--回傳true則顯示此行-->
          <span class="text-muted" v-else>未啟用</span> <!--否則顯示此行-->
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
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DeleteModal ref="deleteModal" :item="tempProduct" @delete-item="deleteProduct"></DeleteModal>
  <PaginationComponents :pages="pagination" @change-page="getProducts"></PaginationComponents>
</template>

<script>
import ProductModal from '@/components/backstage/ProductModal.vue'
import DeleteModal from '@/components/backstage/DeleteModal.vue'
import PaginationComponents from '@/components/backstage/PaginationComponents.vue'

export default {
  components: {
    ProductModal,
    DeleteModal,
    PaginationComponents
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true // 添加讀取效果
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false // 結果已回傳 結束讀取效果
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    openModal (isNew, item) {
      this.isNew = isNew // 切換產品的新增/編輯狀態
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = JSON.parse(JSON.stringify(item))
      }
      // 透過綁定ref 可使用子元件的methods
      const productModal = this.$refs.productModal
      productModal.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item // 確保tempProduct內容與子元件傳回的item內容保持同步

      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      if (!this.isNew) { // 如果產品非新增狀態 使用此api及方法
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: item })
        .then((res) => {
          this.getProducts()
          this.$pushMessage(res)

          const productModal = this.$refs.productModal
          productModal.hideModal()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteProduct (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(api)
        .then((res) => {
          this.getProducts()
          this.$pushMessage(res, '刪除')
        })
        .catch((error) => {
          console.log(error)
        })
      const deleteModal = this.$refs.deleteModal
      deleteModal.hideModal()
    },
    deleteModal (item) {
      this.tempProduct = JSON.parse(JSON.stringify(item))

      const deleteModal = this.$refs.deleteModal
      deleteModal.showModal()
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    document.title = '商品管理-In My Light'
  }
}
</script>
