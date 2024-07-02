<template>
  <div>
    <div class="footer-frame">
      <ul class="footer-content">
        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
        <li><a href="#"><i class="bi bi-twitter-x"></i></a></li>
      </ul>

      <p class="business-time">營業時間：<br>平日 10:00 - 19:00，<br>週六 10:00 - 17:00。</p>

      <ul class="footer-menu">
        <li class="first-li"><router-link to="about">關於我們</router-link></li>
        <li><router-link to="productList">產品資訊</router-link></li>
        <li><router-link to="about">專屬訂製</router-link></li>
        <li><router-link to="about">公司資訊</router-link></li>
        <li><router-link to="about">線上諮詢</router-link></li>
        <li><router-link to="/">回首頁</router-link></li>
      </ul>

      <p class="copyright-notice">© 2024 In My Light 燈具有限公司. 保留所有權利。</p>
    </div>
  </div>
</template>

<style lang="scss">
.footer-frame{
    position: relative;
    z-index: 1;
    background-color: $h2Color;
    height: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: $subColor;

  .footer-content{
    display: flex;
    justify-content: center;

    li{
      margin: 0 10px;

      i{
        font-size: 30px;
        color: $subColor;
        opacity: 0.5;
        transition: all 300ms;
      }
      &:hover{
          animation: floatUp 1s forwards;

          i{
            color: $mainColor;
            opacity: 1;
          }
        }
    }
  }
  .business-time{
    br{
      display: none;
    }
  }
  .footer-menu{
    display: flex;

      li{
        padding: 2px 10px;
        border-left: 1px solid rgba(127,255,212,0.5);

        a{
          color: $subColor;
          transition: color 300ms;
        }
        &:hover a{
          color: $mainColor;
        }
      }
      .first-li{
        border: none;
      }
    }

    .copyright-notice{
      opacity: 0.5;
    }
}
@media (max-width:919px){
  .footer-frame{
    .business-time{
      text-align: center;
      br{
      display: block;
    }
    }
    .footer-menu{
      display: none;
    }
  }
}
</style>
