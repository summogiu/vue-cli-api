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
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="customFile" class="form-label">上傳封面
                  <div class="spinner-border spinner-border-sm" role="status" v-if="status.loadingItem">
                  </div>
                </label>
                <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data"
                            method="post">
                  <input type="file" id="customFile" class="form-control"
                  @change="uploadFile" ref="fileInputMain"
                  :disabled="status.loadingItem">
                </form>
                <span>封面預覽：</span>
                <span v-if="!tempProduct.imageUrl">暫無封面</span>
                <img :src="tempProduct.imageUrl" class="fileImg">
              </div>
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <label>上傳其他圖片</label>
                <div class="mb-3 input-group" >
                  <input type="file" class="form-control form-control"
                          @change="uploadFiles1" ref="filesInput1">
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div class="mb-3 input-group" >
                  <input type="file" class="form-control form-control"
                          @change="uploadFiles2" ref="filesInput2">
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="startUpload">
                    新增圖片
                  </button>
                </div>
                <span>圖片預覽：</span>
                <div class="images">
                  <img v-for="item in tempProduct.imagesUrl" :key="item" :src="item" class="thumbnail">
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title"
                        placeholder="請輸入標題" v-model="tempProduct.title">
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input type="text" class="form-control" id="category"
                          placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input type="text" class="form-control" id="unit"
                          placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input type="number" class="form-control" id="origin_price"
                          placeholder="請輸入原價" v-model="tempProduct.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input type="number" class="form-control" id="price"
                          placeholder="請輸入售價" v-model="tempProduct.price">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea type="text" class="form-control" id="description"
                placeholder="請輸入產品描述" v-model="tempProduct.description">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea type="text" class="form-control" id="content"
                placeholder="請輸入產品說明內容" v-model="tempProduct.content">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                          :true-value="1"
                          :false-value="0"
                          id="is_enabled"
                          v-model="tempProduct.is_enabled">
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
          <button type="button" class="btn btn-primary" @click="$emit('update-product', tempProduct)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.images{
  img{
    width: 50%;
  }
}
@media (max-width:574px){
  .mt-5{
    padding-bottom: 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid $subColor4;
  }
}
</style>

<script>
import modalMixin from '@/mixins/ModalMixin'

export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  mixins: [modalMixin],
  watch: {
    product () {
      this.tempProduct = this.product // 新增時透過將空值傳入this.tempProduct 清空前一筆資料紀錄 編輯時則帶入現有this.product資料
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {},
      status: {
        loadingItem: false
      }
    }
  },
  methods: {
    showModal () {
      this.modal.show()
      this.clearInput(this.$refs.fileInputMain)
      this.clearInput(this.$refs.filesInput1)
      this.clearInput(this.$refs.filesInput2)
    },
    // 清空Input的值
    clearInput (input) {
      if (input) {
        input.value = ''
      }
    },
    // 單圖上傳
    uploadFile () {
      const uploadFile = this.$refs.fileInputMain.files[0]

      if (!uploadFile) {
        return
      }

      this.status.loadingItem = true
      const formData = new FormData()
      formData.append('file-to-upload', uploadFile) // 在formData表單新增一個欄位(api上傳檔案時需對應的欄位名稱,要傳送的內容)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = false
            this.tempProduct.imageUrl = res.data.imageUrl
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 將圖片上傳並儲存至imagesUrl(多圖用)
    uploadPost (files) {
      if (!files) {
        return
      }
      const formData = new FormData()
      formData.append('file-to-upload', files)

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imagesUrl.push(res.data.imageUrl)
          } else {
            console.log(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 等待所有圖上傳完後再回傳訊息
    startUpload () {
      const file1 = this.$refs.filesInput1.files[0]
      const file2 = this.$refs.filesInput2.files[0]

      if (!file1 && !file2) {
        alert('請選擇檔案')
        return
      }
      // ↓即使其中一個內容不存在，也回報成功，使then可運行
      const upload1 = file1 ? this.uploadPost(file1) : Promise.resolve('not file1')
      const upload2 = file2 ? this.uploadPost(file2) : Promise.resolve('not file2')

      Promise.all([
        upload1,
        upload2
      ])
        .then((res) => {
          alert('上傳成功')
          this.clearInput(this.$refs.filesInput1)
          this.clearInput(this.$refs.filesInput2)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.tempProduct = this.product
  }
}
</script>
