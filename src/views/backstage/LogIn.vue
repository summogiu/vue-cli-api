<template>
  <div>
    <div class="logIn-page-frame">
      <div class="logIn-box">
        <h1>In My Light<br>後檯管理系統</h1>
        <p>請登入您的帳戶</p>
        <form class="logInForm">
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
          class="logIn-btn"
          @click="logIn">
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.logIn-page-frame{
  display: flex;
  align-items: center;
  height: 100vh;
  background: $linearColor;
}
.logIn-box{
  max-width: 300px;
  padding: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  box-shadow: 2px 2px 10px gray;

  h1{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  p{
    margin: 10px 0 30px;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;

    .logIn-btn{
      width: 80px;
      height: 40px;
      border-radius: 25px;
      background-color: $subColor8;
      color: white;
      border: none;
    }
  }
}
</style>

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
