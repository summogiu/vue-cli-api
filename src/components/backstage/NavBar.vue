<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/login" class="nav-link" href="#">
      <p>In My Light</p>
      <p>後臺管理系統</p>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="products" class="nav-link">商品管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="coupons" class="nav-link">優惠券管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="article" class="nav-link">文章管理</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logOut">登出</a>
          </li>
        </ul>
        <span class="navbar-text">
          文字
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, {}) // 登出不需要傳送資料
        .then((res) => {
          console.log(res)
          this.$router.push('/login')
        })
    }
  }
}
</script>
