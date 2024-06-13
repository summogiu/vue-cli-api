<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">即將刪除產品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          確定刪除 <span class="deleteColor">{{ product.title }}</span> 嗎?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="$emit('delete-product', product)">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .modal-header{
    background: #dc3545;
  }
  .modal-title{
    color: white;
  }
  .deleteColor{
    color: red;
  }
</style>

<script>
import modalMixin from '@/mixins/ModalMixin'

export default {
  props: ['product'],
  data () {
    return {
      modal: ''
    }
  },
  mixins: [modalMixin]
}
</script>
