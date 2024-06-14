<template>
  <UserBar></UserBar>
  <div class="container-fluid mt-3 position-relative">
    <router-view/></div>
</template>

<script>
import UserBar from '@/components/user/UserBar.vue'

export default {
  components: {
    UserBar
  }
}
</script>
