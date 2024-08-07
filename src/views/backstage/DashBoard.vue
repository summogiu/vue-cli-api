<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/></div>
</template>

<style lang="scss">
.table{
  thead{
    tr{
      th{
        font-weight: bold;
      }
    }
  }
  tbody{
    tr{
        border-top: 1px solid $subColor4;
    }
  }
}
@media (max-width:919px){
  .table{
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>

<script>
import Navbar from '@/components/backstage/NavBar.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/backstage/ToastMessages.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1') // 取出cookie資料 並賦予到token變數
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) { // 如果登入失敗
          this.$router.push('/logIn')
        }
      }
      )
      .catch((error) => {
        console.log(error)
      })
  },
  provide () {
    return {
      emitter
    }
  },
  mounted () {
    document.title = '後檯管理-In My Light'
  }
}
</script>
