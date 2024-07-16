<template>
  <div>
    <div class="error-page-frame">
      <h1>404 查無此頁面</h1>
      <router-link to="/">回到首頁</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.error-page-frame{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 36px;
    color: gray;
    border-bottom: 1px solid $subColor4;
    margin-bottom: 20px;
  }
  a{
    height: 60px;
    border: 1px solid $subColor3;
    border-radius: 50px;
    width: 200px;
    text-align: center;
    color: $subColor3;
    line-height: 60px;
  }
}
</style>
