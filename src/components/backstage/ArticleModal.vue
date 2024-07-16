<template>
  <div>
    <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-box">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">新增文章</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content-box">
              <div class="modal-content-left">
                <div class="mb-3">
                  <label for="customFile" class="form-label">上傳封面
                      <div class="spinner-border spinner-border-sm" role="status" v-if="status.loadingItem">
                      </div>
                  </label>
                  <img :src="tempArticle.imageUrl" alt="title-img" class="fileImg" v-if="tempArticle.imageUrl">
                  <p v-else>尚未上傳</p>
                  <form action="/api/giugiu-api/admin/upload" enctype="multipart/form-data"
                              method="post">
                    <input type="file" id="customFile" class="form-control"
                    @change="titleImgUpload" ref="titleImgInput"
                    :disabled="status.loadingItem">
                  </form>
                </div>
                <div class="mb-3">
                  <label for="author" class="form-label">建立者</label>
                  <input type="text" class="form-control" id="author"
                          placeholder="請輸入您的名稱" v-model="tempArticle.author">
                </div>
                <div class="mb-3">
                  <label for="due_date" class="form-label">建立日期</label>
                  <input type="date" class="form-control" id="due_date"
                            v-model="due_date">
                </div>
                <div class="mb-3">
                  <input class="form-check-input" type="checkbox"
                          :true-value="true"
                          :false-value="false"
                          id="isPublic"
                          v-model="tempArticle.isPublic">
                  <label class="form-check-label" for="isPublic">
                    公開文章
                  </label>
                </div>
              </div>
              <div class="modal-content-right">
                <div class="mb-3">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                          placeholder="請輸入標題" v-model="tempArticle.title">
                </div>
                <div class="mb-3">
                  <label for="tag">標籤</label>
                  <input type="text" class="form-control" id="tag"
                          placeholder="請輸入標籤(例:#標籤名稱)" v-model="tempArticle.tag">
                </div>
                <div class="mb-3">
                  <label for="description">文章描述</label>
                  <input type="text" class="form-control" id="description"
                          placeholder="請輸入關於文章的描述" v-model="tempArticle.description">
                </div>
                <div class="mb-3">
                  <label for="content">文章內容</label>
                  <!-- <textarea class="form-control article-content" id="content"
                          placeholder="請輸入內容" v-model="tempArticle.content">
                  </textarea> -->
                  <Wang ref="wang" v-model="tempArticle.content"></Wang>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="$emit('update-article', tempArticle)">儲存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-box{
  max-width: 920px;
}
.modal-content-box{
  display: flex;

  .modal-content-left{
    width: 40%;
    margin-right: 20px;
  }
  .modal-content-right{
    width: 60%;

    .article-content{
      height: 200px;
    }
  }
}
</style>

<script>
import modalMixin from '@/mixins/ModalMixin'
import Wang from '@/components/backstage/Wang.vue'

export default {
  props: {
    article: {}
  },
  components: {
    Wang
  },
  data () {
    return {
      modal: {},
      tempArticle: {},
      due_date: '',
      status: {
        loadingItem: false
      }
    }
  },
  watch: {
    article () {
      this.tempArticle = this.article

      if (!this.tempArticle.isPublic) {
        this.tempArticle.isPublic = false
      }
    },
    due_date () {
      console.log(this.due_date)
      this.tempArticle.create_at = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mixins: [modalMixin],
  methods: {
    titleImgUpload () { // 上傳封面圖片
      const titleImgFile = this.$refs.titleImgInput.files[0]

      if (!titleImgFile) {
        return
      }

      this.status.loadingItem = true

      const formData = new FormData()
      formData.append('file-to-upload', titleImgFile)

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.status.loadingItem = false
            this.tempArticle.imageUrl = res.data.imageUrl
            console.log(this.tempArticle.imageUrl)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.tempArticle = this.article
  }
}
</script>
