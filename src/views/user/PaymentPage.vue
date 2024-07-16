<template>
  <div>
    <div class="form-frame">
      <div class="payment-page-header">
        <router-link to="/products/productslist" class="logo-box">
          <img src="@/assets/images/logo.png" alt="logo">
        </router-link>
        <div class="process-box">
          <span :class="{ 'nowIn' : this.$route.name === '填寫收件資訊頁面' }">填寫收件資訊</span>
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="next-icon" />
          <span :class="{ 'nowIn' : this.$route.name === '訂單成立頁面' && !isPaid }">確認付款</span>
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="next-icon" />
          <span :class="{ 'nowIn' : isPaid }">已完成付款</span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.form-frame{
  position: relative;
  z-index: 60;
  background-color: white;
}
.payment-page-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  .logo-box{
    img{
      width: 300px;
      height: 300px;
    }
  }
  .process-box{
    margin: 0 auto;
    display: flex;
    align-items: center;

    span{
      font-size: 18px;
      color: gray;
    }
    .nowIn{
      color: black;
    }
    .next-icon{
      font-size: 24px;
      margin: 0 10px;
      color: $subColor3;
    }
  }
}

</style>

<script>
import emitter from '@/methods/emitter'

export default {
  data () {
    return {
      isPaid: false
    }
  },
  mixins: [emitter],
  methods: {
    getPaid (paid) {
      this.isPaid = paid
      console.log('取得付款狀態', this.isPaid)
    }
  },
  mounted () {
    emitter.on('isPaid', this.getPaid)
  }
}
</script>
