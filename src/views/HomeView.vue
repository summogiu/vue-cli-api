<template>
  <UserBar/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import UserBar from '@/components/user/UserBar.vue'
import Footer from '@/components/user/FooTer.vue'

export default {
  name: 'HomeView',
  components: {
    UserBar,
    Footer
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH) // 確認環境變數
  }
}
</script>
