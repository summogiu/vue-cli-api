<template>
  <div>
    <div class="navBar-box">
      <h1>
        <p>In My Light 後臺管理系統</p>
      </h1>
        <ul>
          <li :class="[isActive === '商品管理' ? 'navBar-li-active' : '']" @click="changeActive('商品管理')">
            <router-link to="products">商品管理</router-link>
          </li>
          <li :class="[isActive === '優惠券管理' ? 'navBar-li-active' : '']" @click="changeActive('優惠券管理')">
            <router-link to="coupons">優惠券管理</router-link>
          </li>
          <li :class="[isActive === '文章管理' ? 'navBar-li-active' : '']" @click="changeActive('文章管理')">
            <router-link to="article">文章管理</router-link>
          </li>
          <li :class="[isActive === '訂單管理' ? 'navBar-li-active' : '']" @click="changeActive('訂單管理')">
            <router-link to="order">訂單管理</router-link>
          </li>
          <li>
            <a href="#" @click.prevent="logOut">登出</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<style lang="scss">
.navBar-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  background-color: black;
  color: white;

  ul{
    display: flex;

    li{
      a{
        color: white;
        border-left: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
      }
      &:hover{
        a{
          background-color: rgba($color: #ffffff, $alpha: 0.2);
        }
      }
    }
    .navBar-li-active{
      a{
        color: black;
        border-left: 1px solid black;
        background-color: white;
        cursor: default;
      }
      &:hover{
        a{
          background-color: white;
        }
      }
    }
  }
}
@media (max-width:919px){
  .navBar-box{
    flex-direction: column;
    padding: 0;

    ul{
      flex-wrap: wrap;
      width: 100%;

      li{
        width: 50%;
        a{
          width: 100%;
          border: none;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      isActive: this.$route.name
    }
  },
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, {}) // 登出不需要傳送資料
        .then((res) => {
          console.log(res)
          this.$router.push('/login')
        })
    },
    changeActive (option) {
      this.isActive = option
    }
  }
}
</script>
