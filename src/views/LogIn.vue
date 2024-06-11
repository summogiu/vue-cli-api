<template>
  <h1>登入您的帳戶</h1>
  <form class="logInBox">
    <div class="mb-3">
      <label for="email">電子信箱：</label>
      <input type="email"
      name="email"
      class="form-control"
      v-model="user.username">
    </div>
    <div class="mb-3">
      <label for="password">密碼：</label>
      <input type="password"
      name="password"
      class="form-control"
      v-model="user.password">
    </div>
    <input type="button"
    value="登入"
    class="btn btn-primary"
    @click="logIn">
  </form>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    logIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user) // post請求：前方帶入api路徑 後方帶入要傳送的資料
        .then((res) => {
          if (res.data.success) { // 如果登入成功
            const { token, expired } = res.data // 取出res.data的token及expired屬性 並宣告成同名的變數
            //                 ↓hexToken為自定義的屬性名稱 後方放入要儲存的值
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            //                                    ↑expires為此cookie的有效期限 new Date是為了將res內取出的expired轉換為可讀取的形式
            this.$router.push('/dashboard/products')
          }
        }
        )
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
