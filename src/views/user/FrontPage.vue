<template>
  <div>
    <div class="front-page-frame">
      <div class="bunner-box">
        <div class="swiper bannerSwiper" ref="bannerSwiper">
          <div class="swiper-wrapper banner-swiper-wrapper">
            <div class="swiper-slide banner-swiper-slide">
              <img src="@/assets/images/banner/fontPage-banner01.jpg" alt="banner">
            </div>
            <div class="swiper-slide banner-swiper-slide">
              <img src="@/assets/images/banner/fontPage-banner02.jpg" alt="banner">
            </div>
            <div class="swiper-slide banner-swiper-slide">
              <img src="@/assets/images/banner/fontPage-banner03.jpg" alt="banner">
            </div>
          </div>
          <div class="swiper-pagination banner-swiper-pagination"></div>
        </div>
        <h1 class="bunner-title">IN MY LIGHT</h1>
        <img src="@/assets/images/icon/bunner-icon.png" class="bunner-title-icon">
        <div class="about-box">
          <div class="about-title">
            <img src="@/assets/images/icon/aboutUs.png" class="about-title-icon">
            <h2>ABOUT</h2>
          </div>
          <span class="little-title">- 關於我們 -</span>
          <router-link to="/about" class="about-Introduction">
            <p>在In My Light，我們相信每一盞燈都是一個故事的開始，一個氛圍的創造者，以及家居美學的靈感來源。
              我們是一家專業的燈具店，致力於為您的空間帶來獨特而精心設計的照明解決方案。</p>
            <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
        </div>
      </div>

      <div class="product-section-box" ref="product">
        <div class="product-Introduction">
          <img src="@/assets/images/icon/bag_shopping_icon.png">
          <h2>PRODUCT</h2>
          <router-link to="/products/productslist">
          <p>我們的產品包括吊燈、壁燈、臺燈和地燈等各種類型，涵蓋了現代、古典、工業風等多種風格，滿足您的不同需求和喜好。
            無論是為家居、辦公室還是商業空間，In My Light 系列燈具都能提供出色的照明效果，同時為您的空間增添藝術氣息和舒適感。
            選擇 In My Light，讓您的空間更加煥然一新！</p>
          <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
        </div>
        <span class="little-title">- 產品資訊 -</span>
        <div class="swiper sectionSwiper" ref="productSwiper" :class="[isSectionIn.isProductSectionIn ? 'sectionSwiper-In' : '']">
          <div class="swiper-wrapper section-swiper-wrapper">
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/products/industrial/pexels-anastasia-latunova-9967197.jpg" alt="product">
            </div>
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/products/crystal/pexels-aleksandar-j-popovic-5292856.jpg" alt="product">
            </div>
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/products/industrial/pexels-chris-f-8649354.jpg" alt="product">
            </div>
          </div>
          <div class="mask-color"></div>
          <div class="swiper-pagination product-swiper-pagination"></div>
        </div>
      </div>

      <div class="customized-section-box" ref="customized"
          :style="{ transform: `translateY(${moveTranslateY.customizedTranslate}px)`}">
        <div class="swiper sectionSwiper" ref="customizedSwiper"  :class="[isSectionIn.isCustomizedSectionIn ? 'sectionSwiper-In' : '']">
          <div class="swiper-wrapper section-swiper-wrapper">
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/customized/StarlightHotel02.jpg" alt="customized">
            </div>
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/customized/StarlightHotel04.jpg" alt="customized">
            </div>
          </div>
          <div class="mask-color"></div>
          <div class="swiper-pagination customized-swiper-pagination"></div>
        </div>
        <div class="customized-Introduction">
          <img src="@/assets/images/icon/mallet_icon.png">
          <h2>CUSTOMIZED</h2>
          <router-link to="/customized">
          <p>在In My Light，我們理解每個空間都是獨一無二的。
            我們提供訂製專欄服務，讓您能夠打造符合您獨特需求和風格的照明解決方案。
            無論您需要定制尺寸、特定材料或特別設計，我們的專業團隊將與您合作，
            以確保您得到完美的訂製燈具，讓您的空間煥然一新，與眾不同。
            與In My Light合作，將您的想象變成現實！
          </p>
          <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
        </div>
        <span class="little-title">- 訂製專欄 -</span>
        <div class="shadow" :style="{ opacity: this.opacity.customizedQpacity }"></div>
      </div>

      <div class="company-section-box" ref="company"
          :style="{ transform: `translateY(${moveTranslateY.companyTranslate}px)` }">
        <img src="@/assets/images/background/company1.jpg" alt="company">
        <span class="little-title">- 公司資訊 -</span>
        <div class="company-information">
          <div class="company-title">
            <img src="@/assets/images/icon/bunner-icon-black.png">
            <p>IN MY LIGHT</p>
          </div>
          <div class="table-box">
            <table>
              <tr>
                <th>公司名稱</th>
                <td>In My Light 燈具有限公司</td>
              </tr>
              <tr>
                <th>創建日期</th>
                <td>2020-01-15</td>
              </tr>
              <tr>
                <th>FAX</th>
                <td>+886-2-8765-4321</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>公司地址</th>
                <td>1234 台灣台北市中山區光復北路100號</td>
              </tr>
              <tr>
                <th>TEL</th>
                <td>+886-2-1234-5678</td>
              </tr>
              <tr>
                <th>業務類別</th>
                <td>家具及裝設品製造業.綜合零售業</td>
              </tr>
            </table>
          </div>
          <button class="connect-us-btn" type="button">
            <i class="bi bi-envelope"></i>
            聯絡我們
          </button>
        </div>
        <div class="shadow" :style="{ opacity: this.opacity.companyQpacity }"></div>
      </div>

      <div class="consult-section-frame" ref="consult">
        <div class="consult-section-box">
          <span class="little-title">- 線上諮詢 -</span>
          <img src="@/assets/images/icon/consult-icon.png">
          <p>在您有任何疑問、建議或合作意向時，請隨時通過電子信箱服務與我們取得聯繫。<br>
            我們的專業團隊將竭誠為您提供最優質的服務，並解答您的所有疑問。<br>
            期待與您的溝通與合作！
          </p>
          <p>信箱地址：info@inmylight.com</p>
          <span>或者</span>
          <button class="common-problem-btn" type="button">
            提交線上表單
            <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </button>
          <button class="back-top-btn" type="button" @click="scrollToTop">
            <img src="@/assets/images/icon/up.png">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/pagination';
@import 'swiper/css/autoplay';
@import 'swiper/css/effect-fade';

.front-page-frame{
  opacity: 0;
  animation: fadeIn .8s .5s forwards;
}

// Swiper樣式
.bannerSwiper{
  width: 90%;
  animation: mask-title 2s ease-in forwards;

  .banner-swiper-wrapper{
    border-radius: 0 0 50% 50%;
    height: 1000px;
    overflow: hidden;

    .banner-swiper-slide{

      img{
        max-width: 2000px;
        object-fit: cover;
        animation: slowScale 30s infinite;
      }
    }
  }
  .banner-swiper-pagination{
    bottom: 15%;
  }
}
@media (max-width:919px){
  .bannerSwiper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner-swiper-wrapper{
      height: 550px;
      width: 160%;

      .banner-swiper-slide{
        img{
          max-width: 1400px;
        }
      }
    }
  }
}

// product及customized的通用Swiper樣式
.sectionSwiper{
  max-width: 640px;
  width: calc(50% - 12px);
  margin: 0;
  opacity: 0;

  .section-swiper-wrapper{
    border-radius: 0 0 320px 320px;
    height: 640px;
    overflow: hidden;

    .section-swiper-slide{
      img{
        max-width: 1000px;
        object-fit: cover;
        animation: slowScale 30s infinite;
      }
    }
  }
}
.swiper-pagination-bullet-active{
    background-color: white;
}
@media (max-width:919px){
  .sectionSwiper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-swiper-wrapper{
      height: 360px;
      max-width: 400px;

      .section-swiper-slide{
        img{
          max-width: 600px;
        }
      }
    }
  }
}

// 區塊樣式
// bunner及about
.bunner-box{
  position: relative;
  overflow: hidden;

  .bunner-title{
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    font-size: 80px;
    color: $subColor;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    opacity: 0;
    animation: fadeIn 2s .5s ease-in forwards;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }
  .bunner-title-icon{
    height: 300px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }

  .about-box{
    display: flex;
    align-items: center;
    width: 640px;
    padding: 35px 50px;
    background-color: white;
    border-radius: 150px 0 0 150px;
    transform: translateX(100%);
    animation: out-to-Left 1.5s 2.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
    position: absolute;
    bottom: 20%;
    right: 0;
    z-index: 25;

    .about-title{
      display: flex;
      flex-direction: column;
      align-items: center;

      .about-title-icon{
        width: 130px;
      }
      h2{
        font-size: 24px;
      }
    }
    .about-Introduction{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      height: 150px;
      padding: 30px 20px 0 20px;

      p{
        font-size: 14px;
        color: $subColor2;
      }
      &:hover img{
        animation: BounceToRight 1s cubic-bezier(0.2, 1, 0.3, 1) infinite;
      }
    }
    .little-title{
      right: 50px;
      top: 20px;
    }
  }
}
@media (max-width:919px){
  .bunner-box{
    display: flex;
    flex-direction: column;
    align-items: center;

    .bunner-title{
      font-size: 40px;
      white-space: nowrap;
      top: 25%;
    }
    .bunner-title-icon{
      height: 200px;
    }
    .about-box{
      flex-direction: column;
      width: 100%;
      max-width: 540px;
      padding: 50px 5%;
      position: relative;
      transform: translateX(0);
      animation: none;

      .about-title{
        h2{
          padding-bottom: 10px;
        }
      }
      .about-Introduction{
        padding: 0;
        height: auto;
      }
      .little-title{
        color: white;
        top: -50px;
        right: 50%;
        transform: translateX(50%);
        text-align: center;
      }
    }
  }
}

// product及customized的通用樣式
.product-section-box,.customized-section-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
  margin: 150px auto 0 auto;
  position: relative;
  transform: translateY(0);

  .product-Introduction,.customized-Introduction{
    max-width: 540px;
    width: calc(50% - 12px);
    display: flex;
    flex-direction: column;
    align-items: center;

    >img{
      width: 130px;
    }
    h2{
      font-size: 24px;
      padding: 10px;
    }
    a{
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p{
        font-size: 14px;
        color: $subColor2;
      }
      &:hover img{
        animation: BounceToRight 1s cubic-bezier(0.2, 1, 0.3, 1) infinite;
      }
    }
  }
}
.mask-color{
    border-radius: 0 0 320px 320px;
    height: 640px;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    transition: opacity 2s ease-in;
}
// product及customized的個別樣式
.product-section-box{
  .little-title{
    left: 5%;
    top: 0;
  }
  .mask-color{
    background-color: $subColor8;
  }
}
.customized-section-box{
  padding-bottom: 200px;
  transition: translate .5s;

  .little-title{
    right: 5%;
    top: 0;
  }
  .mask-color{
    background-color: $subColor9;
  }
}
// product及customized的進場動畫
.sectionSwiper-In{
    animation: mask-circle 3s ease-in forwards;

    .mask-color{
      opacity: 0;
    }
  }
@media (max-width:919px){
  .product-section-box,.customized-section-box{
    flex-direction: column;
    margin: 50px auto 0 auto;

    .product-Introduction,.customized-Introduction{
      width: 100%;
      padding: 30px 0;
    }
    .little-title{
      transform: translateX(-50%);
      left: 50%;
      top: -36px;
    }
  }
  .mask-color{
    height: 360px;
    max-width: 400px;
    right: auto;
  }

  .product-section-box{
    flex-direction: column-reverse;
  }
}

.company-section-box{
  border-radius: 50px 50px 0 0;
  overflow: hidden;
  background-color: $subColor7;
  position: relative;
  padding-bottom: 160px;
  transform: translateY(0);

  >img{
    position: relative;
    z-index: 10;
    height: 500px;
    width: 100%;
    object-fit: cover;
    transform-origin: center bottom;
  }
  .little-title{
    top: 20px;
    left: 50px;
    z-index: 20;
  }
  .company-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-50px);

    img{
      width: 120px;
    }
    p{
      font-size: 30px;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  }
  .table-box{
    display: flex;
    justify-content: space-around;

    table{
      width: 40%;
      tr{
        display:block;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        padding: 20px 0;
        width: 100%;

        th{
          width: 100px;
        }
      }
    }
  }
}
@media (max-width:919px){
  .company-section-box{
    .little-title{
      transform: translateX(-50%);
      left: 50%;
    }
    .table-box{
      flex-direction: column;
      align-items: center;

      table{
        width: 60%;
        font-size: 14px;
      }
    }
  }
}

.consult-section-frame{
  background-color: $subColor7;
}
.consult-section-box{
  border-radius: 50px 50px 0 0;
  background-color: $subColor4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .little-title{
    top: 20px;
    right: 50px;
  }
  >img{
    margin: 130px auto 60px auto;
  }
  p{
    text-align: center;
    margin-bottom: 40px;
  }
  .back-top-btn{
    background-color: transparent;
    border: none;
    border-top: 2px solid black;
    margin: 100px 0 60px 0;

    img{
      width: 100px;
      margin-top: 5px;
    }
    &:hover{
      img{
        animation: BounceToTop 0.2s;
      }
    }
  }
}
.connect-us-btn,.common-problem-btn{
  background-color: black;
  border-radius: 20px;
  border: none;
  color: white;
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;

  i{
    margin-right: 10px;
    font-size: 18px;
  }
}
.common-problem-btn{
  background-color: white;
  color: black;

  img{
    margin-left: 10px;
    width: 20px;
  }
  &:hover img{
    animation: BounceToRight 1s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }
}
@media (max-width:919px){
  .consult-section-box{
    .little-title{
      transform: translateX(-50%);
      left: 50%;
    }
  }
}

// customized及consult的覆蓋效果
.shadow{
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 25;
    top: 0;
    width: 100%;
    height: 100%;
    transition: opacity .3s;
    pointer-events: none;

    &::before{
      content: '';
      height: 200px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -200px;
      background-color: rgba(0, 0, 0, 0.55);
    }
}

.to-more-btn{
  width: 30px;
}
.little-title{
  position: absolute;
  font-size: 14px;
  text-align: center;
}

</style>

<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'

import Swiper from 'swiper'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

Swiper.use(Pagination)
Swiper.use(Autoplay)
Swiper.use(EffectFade)

export default {
  data () {
    return {
      bannerSwiper: '',
      productSwiper: '',
      customizedSwiper: '',
      // 區塊位置
      sectionTops: {
        productTop: 0,
        customizedTop: 0,
        companyTop: 0,
        consultTop: 0
      },
      // 判斷是否已進場
      isSectionIn: {
        isProductSectionIn: false,
        isCustomizedSectionIn: false
      },
      // 動態改變的TranslateY
      moveTranslateY: {
        customizedTranslate: 0,
        companyTranslate: 0
      },
      // 動態改變的opacity
      opacity: {
        customizedQpacity: 0,
        companyQpacity: 0
      }
    }
  },
  computed: {
    screenWidth () { // 視窗寬度
      return window.innerWidth
    }
  },
  watch: {
    // 判斷是否已進場
    scrollPosition () {
      if (this.scrollPosition >= this.sectionTops.productTop / 2) {
        this.isSectionIn.isProductSectionIn = true
      }
      if (this.scrollPosition >= this.sectionTops.customizedTop / 1.4) {
        this.isSectionIn.isCustomizedSectionIn = true
      }
      this.handleScroll()
    },
    screenWidth () {
      this.getSectionTops()
    }
  },
  mixins: [scrollPosMixin],
  methods: {
    scrollToTop () { // 返回頁面頂端
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    getSectionTops () { // 取得區塊定位
      // 取得元素目前的translateY
      const getTFY = (refName) => {
        const element = this.$refs[refName] // 取得元素
        const style = window.getComputedStyle(element) // 取得元素樣式
        const matrix = new WebKitCSSMatrix(style.transform) // 變換矩陣，支援度關係，需替換成其他方式取得translateY
        return matrix.m42 // 取得translateY
      }
      console.log('定位更新', this.sectionTops)
      this.sectionTops.productTop = this.$refs.product.getBoundingClientRect().top + window.pageYOffset
      // 透過 - getTFY('customized')扣除偏移量(元素當前的translateY)
      this.sectionTops.customizedTop = this.$refs.customized.getBoundingClientRect().top + window.pageYOffset - getTFY('customized')
      this.sectionTops.companyTop = this.$refs.company.getBoundingClientRect().top + window.pageYOffset - getTFY('company')
      this.sectionTops.consultTop = this.$refs.consult.getBoundingClientRect().top + window.pageYOffset
    },
    handleScroll () { // 動態改變TranslateY和opacity
      // >919斷點
      if (this.screenWidth > 919) {
        // customized區塊
        // TranslateY
        console.log('919的斷', this.sectionTops)
        if (this.scrollPosition >= this.sectionTops.companyTop / 1.52) {
          this.moveTranslateY.customizedTranslate = Math.max((this.scrollPosition - this.sectionTops.customizedTop) * 0.3, 0)
        } else {
          this.moveTranslateY.customizedTranslate = 0
        }
        // opacity
        if (this.scrollPosition >= this.sectionTops.companyTop / 1.2) {
          this.opacity.customizedQpacity = Math.min(this.scrollPosition / 5000, 1)
        } else {
          this.opacity.customizedQpacity = 0
        }
        // company區塊
        // TranslateY
        if (this.scrollPosition >= this.sectionTops.consultTop / 1.35) {
          this.moveTranslateY.companyTranslate = Math.max((this.scrollPosition - this.sectionTops.companyTop) * 0.2, 0)
        } else {
          this.moveTranslateY.companyTranslate = 0
        }
        // opacity
        if (this.scrollPosition >= this.sectionTops.consultTop / 1.1) {
          this.opacity.companyQpacity = Math.min(this.scrollPosition / 5000, 1)
        } else {
          this.opacity.companyQpacity = 0
        }
      } else if (this.screenWidth <= 919 && this.screenWidth > 414) { // <=919 >414
        console.log('919~414的斷', this.sectionTops)
        // customized區塊
        // TranslateY
        if (this.scrollPosition >= this.sectionTops.companyTop / 1.48) {
          this.moveTranslateY.customizedTranslate = Math.max((this.scrollPosition - this.sectionTops.customizedTop) * 0.3, 0)
        } else {
          this.moveTranslateY.customizedTranslate = 0
        }
        // opacity
        if (this.scrollPosition >= this.sectionTops.companyTop / 1.2) {
          this.opacity.customizedQpacity = Math.min(this.scrollPosition / 5000, 1)
        } else {
          this.opacity.customizedQpacity = 0
        }
        // company區塊
        // TranslateY
        if (this.scrollPosition >= this.sectionTops.consultTop / 1.35) {
          this.moveTranslateY.companyTranslate = Math.max((this.scrollPosition - this.sectionTops.companyTop) * 0.15, 0)
        } else {
          this.moveTranslateY.companyTranslate = 0
        }
        // opacity
        if (this.scrollPosition >= this.sectionTops.consultTop / 1.08) {
          this.opacity.companyQpacity = Math.min(this.scrollPosition / 5000, 1)
        } else {
          this.opacity.companyQpacity = 0
        }
      } else if (this.screenWidth <= 414) { // <=414
        console.log('414的斷', this.sectionTops)
        // customized區塊
        // TranslateY
        if (this.scrollPosition >= this.sectionTops.companyTop / 1.48) {
          this.moveTranslateY.customizedTranslate = Math.max((this.scrollPosition - this.sectionTops.customizedTop) * 0.3, 0)
        } else {
          this.moveTranslateY.customizedTranslate = 0
        }
        // opacity
        if (this.scrollPosition >= this.sectionTops.companyTop / 1.1) {
          this.opacity.customizedQpacity = Math.min(this.scrollPosition / 5000, 1)
        } else {
          this.opacity.customizedQpacity = 0
        }
        // company區塊
        // TranslateY
        if (this.scrollPosition >= this.sectionTops.consultTop / 1.35) {
          this.moveTranslateY.companyTranslate = Math.max((this.scrollPosition - this.sectionTops.companyTop) * 0.15, 0)
        } else {
          this.moveTranslateY.companyTranslate = 0
        }
        // opacity
        if (this.scrollPosition >= this.sectionTops.consultTop / 1.05) {
          this.opacity.companyQpacity = Math.min(this.scrollPosition / 5000, 1)
        } else {
          this.opacity.companyQpacity = 0
        }
      }
    }
  },
  mounted () {
    // bannerSwiper
    this.bannerSwiper = new Swiper(this.$refs.bannerSwiper, {
      pagination: {
        el: '.banner-swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      effect: 'fade'
    })
    // productSwiper
    this.productSwiper = new Swiper(this.$refs.productSwiper, {
      pagination: {
        el: '.product-swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      effect: 'fade'
    })
    // customizedSwiper
    this.customizedSwiper = new Swiper(this.$refs.customizedSwiper, {
      pagination: {
        el: '.customized-swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      effect: 'fade'
    })

    this.getSectionTops()
    window.addEventListener('resize', this.handleScroll)
  }
}
</script>
