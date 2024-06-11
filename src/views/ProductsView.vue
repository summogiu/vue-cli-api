<template>
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
          {{ item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span> <!--回傳true則顯示此行-->
          <span class="text-muted" v-else>未啟用</span> <!--否則顯示此行-->
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="deleteProduct(item.id)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imagesUrl: []
      },
      isNew: false
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      this.$http.get(api)
        .then((res) => {
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
          if (res.data.success) {
            this.getProducts()
            const productModal = this.$refs.productModal
            productModal.hideModal()
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http.delete(api)
        .then((res) => {
          this.getProducts()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getProducts()
  },
  components: {
    ProductModal
  }
}
</script>
