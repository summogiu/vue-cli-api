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
                <label for="image" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" id="image"
                        placeholder="請輸入圖片連結">
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data"
                            method="post">
                  <input type="file" id="customFile" class="form-control"
                  @change="uploadFile" ref="fileInputMain">
                </form>
                <img :src="tempProduct.imageUrl" alt="" class="fileImg">
              </div>
              <img class="img-fluid" alt="">
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
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
                  @click="uploadPost">
                    新增圖片
                  </button>
                </div>
                <div class="images">
                  <img v-for="item in tempProduct.imagesUrl" :key="item" :src="item" alt="">
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
  .fileImg {
    max-width: 300px;
    max-height: 300px;
  }
</style>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product // 新增時透過將空值傳入this.tempProduct 清空前一筆資料紀錄 編輯時則帶入現有this.product資料
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {
        imagesUrl: []
      },
      inputs: []
    }
  },
  methods: {
    showModal () {
      this.modal.show()
      this.inputs = []
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
    hideModal () {
      this.modal.hide()
    },
    // 單圖上傳
    uploadFile () {
      const uploadFile = this.$refs.fileInputMain.files[0]

      if (!uploadFile) {
        return
      }

      const formData = new FormData()
      formData.append('file-to-upload', uploadFile) // 在formData表單新增一個欄位(api上傳檔案時需對應的欄位名稱,要傳送的內容)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    uploadFiles1 () {
      this.inputs.push(this.$refs.filesInput1.files[0])
      // this.uploadPost(uploadFiles1)
    },
    uploadFiles2 () {
      this.inputs.push(this.$refs.filesInput2.files[0])
      // this.uploadPost(uploadFiles2)
    },
    // 將圖片上傳並儲存至imagesUrl(多圖)
    uploadPost () {
      if (this.inputs.length === 0) {
        alert('請選擇圖片')
      } else {
        const formData1 = new FormData()
        formData1.append('file-to-upload', this.inputs[0])

        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
        this.$http.post(api, formData1)
          .then((res) => {
            if (res.data.success) {
              this.tempProduct.imagesUrl.push(res.data.imageUrl)
              alert('上傳成功')
            }
          })
          .catch((error) => {
            console.log(error)
          })

        if (this.inputs[1]) {
          const formData2 = new FormData()
          formData2.append('file-to-upload', this.inputs[1])

          const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
          this.$http.post(api, formData2)
            .then((res) => {
              if (res.data.success) {
                this.tempProduct.imagesUrl.push(res.data.imageUrl)
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
      this.inputs = []
      this.clearInput(this.$refs.filesInput1)
      this.clearInput(this.$refs.filesInput2)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    this.tempProduct = this.product
  }
}
</script>
