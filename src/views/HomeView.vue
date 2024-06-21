<template>
  <UserBar/>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import UserBar from '@/components/user/UserBar.vue'

export default {
  name: 'HomeView',
  components: {
    UserBar
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH) // 確認環境變數
  }
}
</script>
